import { defineConfig, loadEnv, type Plugin, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Sert /api/* pendant `npm run dev`. En production, Vercel exécute ces
 * fichiers comme fonctions serverless ; ce pont fait la même chose en local
 * en adaptant req/res Node vers Request/Response.
 */
function devApi(env: Record<string, string>): Plugin {
  return {
    name: 'shifatek-dev-api',
    configureServer(server: ViteDevServer) {
      // Les fonctions lisent process.env : on y injecte le .env local.
      for (const [key, value] of Object.entries(env)) {
        if (!key.startsWith('VITE_') && process.env[key] === undefined) process.env[key] = value
      }

      server.middlewares.use(async (req, res, next) => {
        const url = req.url ?? ''
        if (!url.startsWith('/api/')) return next()

        const route = url.split('?')[0].replace(/\/$/, '')
        try {
          const module = await server.ssrLoadModule(`.${route}.ts`)
          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk as Buffer)

          const request = new Request(`http://localhost${url}`, {
            method: req.method,
            headers: req.headers as HeadersInit,
            body: req.method === 'GET' || req.method === 'HEAD' ? undefined : Buffer.concat(chunks),
          })

          const response: Response = await module.default(request)
          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))
          res.end(Buffer.from(await response.arrayBuffer()))
        } catch (error) {
          server.config.logger.error(`[dev-api] ${route} : ${String(error)}`)
          res.statusCode = 500
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'dev_api_failed' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), devApi(loadEnv(mode, process.cwd(), ''))],
}))
