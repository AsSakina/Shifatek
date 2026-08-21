import { useCallback, useState } from 'react'
import type { Locale } from '../content'

const KEY = 'shifatek-locale'

function initial(): Locale {
  try {
    const stored = localStorage.getItem(KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // stockage indisponible (navigation privée) : on retombe sur la langue du navigateur
  }
  return typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

/** Langue du site (fr/en), persistée comme le thème. Pas de préfixe d'URL. */
export function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => (typeof window === 'undefined' ? 'fr' : initial()))

  const toggle = useCallback(() => {
    setLocale((previous) => {
      const next: Locale = previous === 'fr' ? 'en' : 'fr'
      try {
        localStorage.setItem(KEY, next)
      } catch {
        // stockage indisponible : le choix reste en mémoire pour la session
      }
      return next
    })
  }, [])

  return { locale, toggle }
}
