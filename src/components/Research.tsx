import type { CSSProperties } from 'react'
import { HeartPulse, ScanLine } from 'lucide-react'
import { useContent } from '../lib/ContentContext'
import { OrbitMark } from '../visuals/OrbitMark'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

/** Une icône et une paire de remplissage par axe (ordre de content.ts). */
const TILES = [
  { Icon: ScanLine, fill: 'var(--fill-1)', ink: 'var(--fill-1-ink)' },
  { Icon: HeartPulse, fill: 'var(--fill-2)', ink: 'var(--fill-2-ink)' },
] as const

/** Recherche : deux axes explorés par l'équipe, cartes animées au survol. */
export function Research() {
  const { research, researchIntro } = useContent()
  return (
    <section className="band band-tinted research-section" id="recherche">
      <span className="research-mark" aria-hidden="true">
        <OrbitMark />
      </span>
      <div className="wrap">
        <Reveal className="research-head">
          <SectionLabel index={5}>{researchIntro.eyebrow}</SectionLabel>
          <h2>{researchIntro.title}</h2>
          <p className="lead">{researchIntro.text}</p>
        </Reveal>
        <div className="research-grid">
          {research.map((item, i) => {
            const { Icon, fill, ink } = TILES[i]
            return (
              <Reveal
                className="research-card card-surface wipe"
                key={item.id}
                index={i}
                style={{ '--fill': fill, '--fill-ink': ink } as CSSProperties}
              >
                <span className="wipe-chip" aria-hidden="true">
                  <Icon strokeWidth={1.7} />
                </span>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p className="wipe-meta">{item.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
