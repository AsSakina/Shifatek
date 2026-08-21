import { useEffect } from 'react'
import { productPages, type ProductId } from './content'
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

/** Routage minimal sur le chemin : une page produit par clé de productPages, sinon l'accueil. */
function currentRoute(): ProductId | null {
  const id = window.location.pathname.replace(/\/$/, '').slice(1)
  return id in productPages ? (id as ProductId) : null
}

function Home() {
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

  useEffect(() => {
    document.title = route ? productTitle(route) : 'Shifatek — Santé digitale et innovation'
  }, [route])

  return (
    <>
      <Header />
      {route ? <ProductPage id={route} /> : <Home />}
      <Footer />
      <Chatbot />
    </>
  )
}
