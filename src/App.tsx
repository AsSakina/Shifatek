import { useEffect } from 'react'
import { productIds, type ProductId } from './content'
import { useLocaleSwitch, useContent } from './lib/ContentContext'
import { localizedPath, parseLocation } from './lib/routing'
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

/** Routage minimal : /en préfixe la langue, puis une page produit par id connu, sinon l'accueil. */
function currentRoute(): ProductId | null {
  const { rest } = parseLocation(window.location.pathname)
  const id = rest.slice(1)
  return (productIds as string[]).includes(id) ? (id as ProductId) : null
}

function setAlternate(hreflang: string, href: string) {
  let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', hreflang)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
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
  const { locale } = useLocaleSwitch()

  useEffect(() => {
    document.title = route ? productTitle(content, route) : content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)

    const path = route ? `/${route}` : '/'
    const url = `https://www.shifatek.com${localizedPath(locale, path)}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)

    const frUrl = `https://www.shifatek.com${path}`
    const enUrl = `https://www.shifatek.com${localizedPath('en', path)}`
    setAlternate('fr', frUrl)
    setAlternate('en', enUrl)
    setAlternate('x-default', frUrl)
  }, [route, content, locale])

  return (
    <>
      <Header />
      {route ? <ProductPage id={route} /> : <Home />}
      <Footer />
      <Chatbot />
    </>
  )
}
