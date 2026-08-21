import { ArrowLeft, ArrowRight, Activity } from 'lucide-react'
import type { Content, ProductId } from '../content'
import { useContent } from '../lib/ContentContext'
import { Capabilities } from './Capabilities'
import { Contact } from './Contact'
import { Roadmap } from './Roadmap'

/** Page produit : /aphia, /ilmia, /formations. La feuille de route est propre à APHIA. */
export function ProductPage({ id }: { id: ProductId }) {
  const { productPages, productNav, productContact } = useContent()
  const data = productPages[id]
  const hasRoadmap = id === 'aphia'

  return (
    <main className={`product-page accent-${data.accent}`} id="top">
      <section className="product-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-dots" />
          <div className="hero-glow one" />
        </div>
        <div className="wrap">
          <div className="product-hero-inner">
            <a className="back-link" href="/">
              <ArrowLeft aria-hidden="true" />
              {productNav.back}
            </a>
            <span className="eyebrow">
              <Activity size={11} />
              {data.kicker}
            </span>
            <h1>{data.title}</h1>
            <p className="lead">{data.intro}</p>
            <div className="hero-actions">
              <a className="btn-primary" href={data.ctaHref}>
                {data.cta}
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="btn-secondary" href={data.secondaryHref}>
                {data.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav className="section-nav" aria-label={`Sections ${data.name}`}>
        <div className="wrap">
          <a href="#fonctionnalites">{productNav.features}</a>
          {hasRoadmap && <a href="#avenir">{productNav.roadmap}</a>}
          <a href="#contact">{productNav.contact}</a>
        </div>
      </nav>

      <Capabilities features={data.features} />
      {hasRoadmap && <Roadmap />}
      <Contact eyebrow={productContact.eyebrow} title={productContact.title} text={productContact.text} />
    </main>
  )
}

/** Titre de page côté client : utile puisque la navigation recharge la page. */
export function productTitle(content: Content, id: ProductId) {
  return `${content.productPages[id].name} — ${content.meta.title.split(' — ')[0]}`
}
