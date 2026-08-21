import type { CSSProperties } from 'react'
import { Compass, Radio, Sparkles, Target } from 'lucide-react'
import { useContent } from '../lib/ContentContext'
import { OrbitMark } from '../visuals/OrbitMark'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

/** Une icône et une paire de remplissage par valeur (ordre de content.ts). */
const TILES = [
  { Icon: Target, fill: 'var(--fill-1)', ink: 'var(--fill-1-ink)' },
  { Icon: Radio, fill: 'var(--fill-2)', ink: 'var(--fill-2-ink)' },
  { Icon: Compass, fill: 'var(--fill-3)', ink: 'var(--fill-3-ink)' },
  { Icon: Sparkles, fill: 'var(--fill-4)', ink: 'var(--fill-4-ink)' },
] as const

export function Values() {
  const { about, values, contact } = useContent()
  return (
    <section className="band" id="apropos">
      <div className="wrap">
        <SectionLabel index={4}>{about.eyebrow}</SectionLabel>
        <div className="bento">
          <Reveal className="bento-tile bento-intro">
            <h2>{about.title}</h2>
            {about.paragraphs.map((text, i) => (
              <p className="lead" key={i}>{text}</p>
            ))}
          </Reveal>

          <Reveal className="bento-tile bento-visual" index={1}>
            <span className="mark" aria-hidden="true">
              <OrbitMark />
            </span>
            <span className="caption">{contact.location}</span>
          </Reveal>

          {values.map(([title, text], i) => {
            const { Icon, fill, ink } = TILES[i]
            return (
              <Reveal
                className="bento-tile wipe"
                key={title}
                index={i}
                style={{ '--fill': fill, '--fill-ink': ink } as CSSProperties}
              >
                <span className="wipe-chip" aria-hidden="true">
                  <Icon strokeWidth={1.7} />
                </span>
                <h3>{title}</h3>
                <p className="wipe-meta">{text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
