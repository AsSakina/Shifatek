import { content as fr } from './content.fr'
import { content as en } from './content.en'

/**
 * fr/en sont écrits avec `as const` (types littéraux, utile pour l'édition).
 * Content élargit ces littéraux en types simples afin que les deux bundles
 * soient structurellement interchangeables — sinon `en` n'est jamais
 * assignable à un type figé sur les chaînes exactes du français.
 */
type DeepWiden<T> = T extends readonly (infer U)[]
  ? readonly DeepWiden<U>[]
  : T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends object
          ? { [K in keyof T]: DeepWiden<T[K]> }
          : T

export type Content = DeepWiden<typeof fr>

export const locales: Record<'fr' | 'en', Content> = { fr, en }

export type Locale = keyof typeof locales
export type ProductId = keyof Content['productPages']

/** Clés de page produit — indépendantes de la langue, utilisées pour le routage. */
export const productIds = Object.keys(fr.productPages) as ProductId[]

export const localeLabels: Record<Locale, string> = { fr: 'FR', en: 'EN' }
