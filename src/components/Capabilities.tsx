import { Check } from 'lucide-react'
import { capabilities } from '../content'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

/**
 * « Aujourd'hui » : la liste de ce qui existe déjà, en deux colonnes de
 * lignes numérotées séparées par des filets.
 */
export function Capabilities({
  features,
  index,
  title = capabilities.title,
}: {
  features: readonly string[]
  index?: number
  title?: string
}) {
  return (
    <section className="band capabilities" id="fonctionnalites">
      <div className="wrap">
        <Reveal className="section-intro">
          {index ? (
            <SectionLabel index={index}>{capabilities.eyebrow}</SectionLabel>
          ) : (
            <span className="eyebrow">{capabilities.eyebrow}</span>
          )}
          <h2>{title}</h2>
        </Reveal>
        <div className="capability-grid">
          {features.map((feature, i) => (
            <Reveal className="capability" key={feature} index={i}>
              <span className="capability-num">{String(i + 1).padStart(2, '0')}</span>
              <Check aria-hidden="true" />
              <p>{feature}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
