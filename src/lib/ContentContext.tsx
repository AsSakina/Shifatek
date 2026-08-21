import { createContext, useContext as useReactContext, useEffect } from 'react'
import type { ReactNode } from 'react'
import { locales, type Content, type Locale } from '../content'
import { useLocale } from './useLocale'

type ContentContextValue = { locale: Locale; content: Content; toggleLocale: () => void }

const ContentContext = createContext<ContentContextValue | null>(null)

export function ContentProvider({ children }: { children: ReactNode }) {
  const { locale, toggle } = useLocale()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <ContentContext.Provider value={{ locale, content: locales[locale], toggleLocale: toggle }}>
      {children}
    </ContentContext.Provider>
  )
}

/** Contenu de la langue courante — mêmes clés qu'avant, juste la source qui change. */
export function useContent(): Content {
  const ctx = useReactContext(ContentContext)
  if (!ctx) throw new Error('useContent doit être utilisé sous <ContentProvider>')
  return ctx.content
}

/** Langue courante + bascule — pour le sélecteur dans le header. */
export function useLocaleSwitch() {
  const ctx = useReactContext(ContentContext)
  if (!ctx) throw new Error('useLocaleSwitch doit être utilisé sous <ContentProvider>')
  return { locale: ctx.locale, toggleLocale: ctx.toggleLocale }
}
