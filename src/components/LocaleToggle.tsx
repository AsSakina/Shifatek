import { localeLabels } from '../content'
import { useLocaleSwitch } from '../lib/ContentContext'

/** Bascule FR/EN : affiche la langue vers laquelle basculer, comme ThemeToggle. */
export function LocaleToggle() {
  const { locale, toggleLocale } = useLocaleSwitch()
  const next = locale === 'fr' ? 'en' : 'fr'

  return (
    <button type="button" className="locale-toggle" onClick={toggleLocale} aria-label={localeLabels[next]} title={localeLabels[next]}>
      {localeLabels[next]}
    </button>
  )
}
