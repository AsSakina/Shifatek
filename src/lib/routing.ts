import type { Locale } from '../content'

/**
 * Anglais préfixé (/en, /en/aphia…), français à la racine (/, /aphia…) —
 * c'est ce qui rend chaque langue crawlable séparément par Google, au lieu
 * d'un simple bascule JS invisible pour un moteur de recherche.
 */
export function parseLocation(pathname: string): { locale: Locale; rest: string } {
  const clean = pathname.replace(/\/$/, '')
  if (clean === '/en' || clean.startsWith('/en/')) {
    return { locale: 'en', rest: clean.slice(3) || '/' }
  }
  return { locale: 'fr', rest: clean || '/' }
}

/** URL d'un chemin (ex. '/', '/aphia') dans la langue donnée. */
export function localizedPath(locale: Locale, rest: string): string {
  if (locale === 'fr') return rest
  return rest === '/' ? '/en' : `/en${rest}`
}
