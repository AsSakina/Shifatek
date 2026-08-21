import { research, researchIntro } from '../content'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

/** Recherche : deux projets portés par les fondateurs, en cartes sobres. */
export function Research() {
  return (
    <section className="band band-tinted" id="recherche">
      <div className="wrap">
        <Reveal className="research-head">
          <SectionLabel index={5}>{researchIntro.eyebrow}</SectionLabel>
          <h2>{researchIntro.title}</h2>
          <p className="lead">{researchIntro.text}</p>
        </Reveal>
        <div className="research-grid">
          {research.map((item, i) => (
            <Reveal className="research-card card-surface" key={item.id} index={i}>
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="research-byline">
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
