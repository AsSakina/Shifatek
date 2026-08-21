import { useEffect, useRef, useState } from 'react'

/**
 * Révèle un élément une seule fois, quand il entre dans le viewport.
 * L'observer se déconnecte après le premier passage.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<T>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold })
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}
