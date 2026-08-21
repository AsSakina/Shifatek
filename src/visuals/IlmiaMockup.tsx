import { Sparkles } from 'lucide-react'

/**
 * Maquette d'Ilmia : un cas clinique en cours, la bonne réponse s'allume
 * en boucle. Le texte du cas est volontairement laissé à l'état de gabarit.
 */
export function IlmiaMockup() {
  return (
    <div className="mock mock-ilmia" role="img" aria-label="Aperçu de l'interface Ilmia : un cas clinique interactif en cours">
      <div className="mock-bar">
        <span className="mock-name">Cas clinique</span>
        <span className="spacer" />
        <span className="ia-badge" aria-hidden="true"><Sparkles size={11} />IA</span>
      </div>
      <div className="mock-quiz" aria-hidden="true">
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton short" />
        <div className="answers">
          <div className="answer">
            <span className="key">A</span>
            <span className="skeleton" />
          </div>
          <div className="answer correct">
            <span className="key">B</span>
            <span className="skeleton" />
            <span className="verdict">Bonne réponse</span>
          </div>
          <div className="answer">
            <span className="key">C</span>
            <span className="skeleton" />
          </div>
        </div>
        <div className="quiz-foot">
          <span>Question 3/10</span>
          <span className="progress"><i /></span>
        </div>
      </div>
    </div>
  )
}
