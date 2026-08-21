/**
 * Formulaire de contact — fonction serverless (runtime Edge sur Vercel).
 *
 * Deux e-mails partent via Resend (https://api.resend.com/emails) :
 *   1. l'accusé de réception au visiteur, depuis noreply@shifatek.com ;
 *   2. la notification interne à contact@shifatek.com, avec reply-to sur
 *      l'adresse du visiteur pour pouvoir répondre directement.
 *
 * La clé d'API ne quitte jamais le serveur : elle est lue dans
 * l'environnement (RESEND_API_KEY) et n'est jamais exposée au client.
 */

export const config = { runtime: 'edge' }

// Évite d'ajouter @types/node pour la seule lecture de l'environnement.
declare const process: { env: Record<string, string | undefined> }

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const USER_AGENT = 'shifatek-site/1.0' // Resend renvoie 403 sans User-Agent
const FROM = 'Shifatek <noreply@shifatek.com>'
const TEAM_INBOX = 'contact@shifatek.com'

const LIMITS = { name: 120, email: 180, company: 160, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Payload = {
  name?: unknown
  email?: unknown
  company?: unknown
  message?: unknown
  /** Champ piège : rempli uniquement par les robots. */
  website?: unknown
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

function send(apiKey: string, email: Record<string, unknown>) {
  return fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
      'user-agent': USER_AGENT,
    },
    body: JSON.stringify(email),
  })
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405)
  }

  let payload: Payload
  try {
    payload = (await request.json()) as Payload
  } catch {
    return json({ error: 'invalid_json' }, 400)
  }

  // Piège à robots : on répond « ok » sans rien envoyer.
  if (clean(payload.website, 100)) return json({ ok: true }, 200)

  const name = clean(payload.name, LIMITS.name)
  const email = clean(payload.email, LIMITS.email)
  const company = clean(payload.company, LIMITS.company)
  const message = clean(payload.message, LIMITS.message)

  const invalid: string[] = []
  if (!name) invalid.push('name')
  if (!EMAIL_RE.test(email)) invalid.push('email')
  if (!message) invalid.push('message')
  if (invalid.length) return json({ error: 'invalid_fields', fields: invalid }, 400)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // En développement, on simule l'envoi pour pouvoir tester le formulaire.
    if (process.env.NODE_ENV !== 'production') {
      console.info('[contact] RESEND_API_KEY absente — envoi simulé :', { name, email, company })
      return json({ ok: true, dryRun: true }, 200)
    }
    console.error('[contact] RESEND_API_KEY manquante en production')
    return json({ error: 'not_configured' }, 500)
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || '—'),
    message: escapeHtml(message).replace(/\n/g, '<br />'),
  }

  const notification = {
    from: FROM,
    to: [TEAM_INBOX],
    reply_to: [email],
    subject: `Nouveau message du site — ${name}`,
    text: [
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Entreprise : ${company || '—'}`,
      '',
      message,
    ].join('\n'),
    html: `
      <div style="font-family:system-ui,sans-serif;color:#17213a;line-height:1.6">
        <h2 style="margin:0 0 16px">Nouveau message du site</h2>
        <p style="margin:0 0 4px"><strong>Nom :</strong> ${safe.name}</p>
        <p style="margin:0 0 4px"><strong>E-mail :</strong> ${safe.email}</p>
        <p style="margin:0 0 16px"><strong>Entreprise :</strong> ${safe.company}</p>
        <div style="padding:16px;border-left:3px solid #00a6a6;background:#f5f3f6">${safe.message}</div>
      </div>`,
  }

  const acknowledgement = {
    from: FROM,
    to: [email],
    reply_to: [TEAM_INBOX],
    subject: 'Nous avons bien reçu votre message',
    text: [
      `Bonjour ${name},`,
      '',
      'Merci de nous avoir écrit. Votre message est bien arrivé chez Shifatek et notre équipe vous répondra rapidement.',
      '',
      'Pour rappel, voici votre message :',
      message,
      '',
      '— L’équipe Shifatek, Dakar, Sénégal',
      'contact@shifatek.com',
    ].join('\n'),
    html: `
      <div style="font-family:system-ui,sans-serif;color:#17213a;line-height:1.6">
        <p style="margin:0 0 16px">Bonjour ${safe.name},</p>
        <p style="margin:0 0 16px">Merci de nous avoir écrit. Votre message est bien arrivé chez Shifatek
        et notre équipe vous répondra rapidement.</p>
        <p style="margin:0 0 8px"><strong>Pour rappel, voici votre message :</strong></p>
        <div style="padding:16px;border-left:3px solid #00a6a6;background:#f5f3f6">${safe.message}</div>
        <p style="margin:24px 0 0">— L’équipe Shifatek, Dakar, Sénégal<br />
        <a href="mailto:contact@shifatek.com" style="color:#00767a">contact@shifatek.com</a></p>
      </div>`,
  }

  try {
    const [teamResponse, userResponse] = await Promise.all([
      send(apiKey, notification),
      send(apiKey, acknowledgement),
    ])

    // La notification interne prime : si elle échoue, l'envoi a échoué.
    if (!teamResponse.ok) {
      console.error('[contact] échec de la notification', teamResponse.status, await teamResponse.text())
      return json({ error: 'send_failed' }, 502)
    }
    if (!userResponse.ok) {
      console.warn('[contact] accusé de réception non envoyé', userResponse.status, await userResponse.text())
    }
    return json({ ok: true, acknowledged: userResponse.ok }, 200)
  } catch (error) {
    console.error('[contact] erreur réseau', error)
    return json({ error: 'send_failed' }, 502)
  }
}
