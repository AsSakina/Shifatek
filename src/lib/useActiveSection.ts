import { useEffect, useState } from 'react'

/**
 * Renvoie l'id de la section actuellement la plus proche du haut du viewport,
 * sous le header fixe. Utilisé pour surligner le lien de navigation actif.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [ids])
  return active
}
