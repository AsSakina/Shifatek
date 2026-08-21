import { useEffect } from 'react'
import { productIds, type ProductId } from './content'
import { useContent } from './lib/ContentContext'
import { Capabilities } from './components/Capabilities'
import { Chatbot } from './components/Chatbot'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Mission } from './components/Mission'
import { ProductPage, productTitle } from './components/ProductPage'
import { Products } from './components/Products'
import { Research } from './components/Research'
import { Values } from './components/Values'

/** Routage minimal sur le chemin : une page produit par id connu, sinon l'accueil. */
function currentRoute(): ProductId | null {
  const id = window.location.pathname.replace(/\/$/, '').slice(1)
  return (productIds as string[]).includes(id) ? (id as ProductId) : null
}

function Home() {
  const { productPages } = useContent()
  return (
    <main id="top">
      <Hero />
      <Mission />
      <Products />
      <Capabilities features={productPages.aphia.features} index={3} />
      <Values />
      <Research />
      <Contact index={6} />
    </main>
  )
}

export function App() {
  const route = currentRoute()
  const content = useContent()

  useEffect(() => {
    document.title = route ? productTitle(content, route) : content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)
    const url = `https://www.shifatek.com${route ? `/${route}` : '/'}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
  }, [route, content])

  return (
    <>
      <Header />
      {route ? <ProductPage id={route} /> : <Home />}
      <Footer />
      <Chatbot />
    </>
  )
}
