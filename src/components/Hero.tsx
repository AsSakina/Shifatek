import { ArrowRight, Activity } from 'lucide-react'
import type { CSSProperties } from 'react'
import { hero } from '../content'
import { AphiaMockup } from '../visuals/AphiaMockup'
import { FloatingTiles } from '../visuals/FloatingTiles'

/** Décale l'entrée de chaque bloc du hero de 90 ms. */
const step = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-dots" />
        <div className="hero-glow one" />
        <div className="hero-glow two" />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="hero-badge rise" style={step(0)}>
            <Activity size={13} />
            {hero.eyebrow}
          </span>
          {/* Le <br> ne s'applique qu'au-delà de 860px : deux lignes exactement. */}
          <h1 className="rise" style={step(1)}>
            {hero.titleBefore}
            <br />
            <em>{hero.titleEm}</em>
            {hero.titleAfter}
          </h1>
          <p className="hero-text rise" style={step(2)}>
            {hero.text}
          </p>
          <div className="hero-actions rise" style={step(3)}>
            <a href="#mission" className="btn-primary">
              {hero.primaryCta}
            </a>
            <a href="#contact" className="btn-secondary">
              {hero.secondaryCta}
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-stage rise" style={step(4)}>
          <FloatingTiles />
          <div className="hero-panel">
            <AphiaMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
