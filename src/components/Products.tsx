import { useContent } from '../lib/ContentContext'
import { AphiaMockup } from '../visuals/AphiaMockup'
import { IlmiaMockup } from '../visuals/IlmiaMockup'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

/**
 * Deux cartes juxtaposées. Chacune porte ses propres écrans, empilés en
 * couches et rognés par le bas ; au survol, la carte se remplit de sa
 * couleur produit et les écrans remontent.
 */
const PREVIEWS = {
  aphia: (
    <>
      <div className="layer behind"><AphiaMockup variant="sync" /></div>
      <div className="layer front"><AphiaMockup /></div>
    </>
  ),
  ilmia: <div className="layer front"><IlmiaMockup /></div>,
} as const

export function Products() {
  const { products, productsIntro } = useContent()
  return (
    <section className="band band-tinted" id="produits">
      <div className="wrap">
        <Reveal className="products-head">
          <SectionLabel index={2}>{productsIntro.eyebrow}</SectionLabel>
          <h2>{productsIntro.title}</h2>
          <p>{productsIntro.text}</p>
        </Reveal>
        <div className="product-grid">
          {products.map((product, i) => (
            <Reveal
              className={`product-card wipe ${product.tone}`}
              id={product.id}
              key={product.id}
              index={i}
            >
              <span className="tag">{product.tag}</span>
              <h3>{product.title}</h3>
              <p className="wipe-meta">{product.text}</p>
              <span className="status">
                <i />
                {product.status}
              </span>
              <div className="product-preview">{PREVIEWS[product.id as keyof typeof PREVIEWS]}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
