import { useContent } from '../lib/ContentContext'
import { OrbitMark } from '../visuals/OrbitMark'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

/**
 * « Notre conviction » : bandeau sombre pleine largeur. Une déclaration en
 * grand, puis l'argumentaire en deux colonnes sous un filet.
 */
export function Mission() {
  const { mission } = useContent()
  return (
    <section className="band statement" id="mission">
      <span className="statement-mark" aria-hidden="true">
        <OrbitMark />
      </span>
      <div className="wrap">
        <Reveal>
          <SectionLabel index={1}>{mission.eyebrow}</SectionLabel>
          <h2>{mission.title}</h2>
        </Reveal>
        <div className="statement-cols">
          {mission.paragraphs.map((text, i) => (
            <Reveal key={i} index={i}>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
