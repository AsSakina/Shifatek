import { useContent } from '../lib/ContentContext'
import { NsoromaStar } from '../visuals/NsoromaStar'
import { Reveal } from './Reveal'

/** « Demain » : la feuille de route APHIA V2, sur un bandeau menthe. */
export function Roadmap() {
  const { roadmap } = useContent()
  return (
    <section className="band roadmap" id="avenir">
      <div className="wrap roadmap-grid">
        <Reveal>
          <span className="eyebrow">
            <NsoromaStar size={11} />
            {roadmap.eyebrow}
          </span>
          <h2>{roadmap.title}</h2>
          <p>{roadmap.text}</p>
        </Reveal>
        <Reveal className="roadmap-list" index={1}>
          {roadmap.features.map((feature, i) => (
            <div key={feature}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <p>{feature}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
