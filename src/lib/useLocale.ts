import { useCallback, useState } from 'react'
import type { Locale } from '../content'
import { localizedPath, parseLocation } from './routing'

/**
 * Langue du site : dérivée de l'URL (/en préfixé), pas d'un état ou d'une
 * préférence mémorisée. Une redirection basée sur le navigateur ferait
 * qu'une même URL affiche un contenu différent selon le visiteur — Google
 * déconseille ça, et ça empêche d'indexer correctement les deux langues.
 */
export function useLocale() {
  const [locale] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'fr' : parseLocation(window.location.pathname).locale
  )

  const toggle = useCallback(() => {
    const { locale: current, rest } = parseLocation(window.location.pathname)
    const next: Locale = current === 'fr' ? 'en' : 'fr'
    window.location.href = localizedPath(next, rest) + window.location.hash
  }, [])

  return { locale, toggle }
}
