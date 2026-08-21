import { Sparkles } from 'lucide-react'
import { useLocaleSwitch } from '../lib/ContentContext'

/**
 * Maquette d'Ilmia : un cas clinique en cours, la bonne réponse s'allume
 * en boucle. Le texte du cas est volontairement laissé à l'état de gabarit.
 */
const TEXT = {
  fr: {
    label: "Aperçu de l'interface Ilmia : un cas clinique interactif en cours",
    caseLabel: 'Cas clinique',
    ai: 'IA',
    correct: 'Bonne réponse',
    question: 'Question 3/10',
  },
  en: {
    label: 'Preview of the Ilmia interface: an interactive clinical case in progress',
    caseLabel: 'Clinical case',
    ai: 'AI',
    correct: 'Correct answer',
    question: 'Question 3/10',
  },
} as const

export function IlmiaMockup() {
  const { locale } = useLocaleSwitch()
  const t = TEXT[locale]

  return (
    <div className="mock mock-ilmia" role="img" aria-label={t.label}>
      <div className="mock-bar">
        <span className="mock-name">{t.caseLabel}</span>
        <span className="spacer" />
        <span className="ia-badge" aria-hidden="true"><Sparkles size={11} />{t.ai}</span>
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
            <span className="verdict">{t.correct}</span>
          </div>
          <div className="answer">
            <span className="key">C</span>
            <span className="skeleton" />
          </div>
        </div>
        <div className="quiz-foot">
          <span>{t.question}</span>
          <span className="progress"><i /></span>
        </div>
      </div>
    </div>
  )
}
