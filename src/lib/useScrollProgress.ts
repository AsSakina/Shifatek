import { useEffect, useRef } from 'react'

/**
 * Écrit la progression de scroll (0 → 1) dans --progress sur l'élément ciblé.
 * Passe par une CSS custom property pour éviter un re-render par frame.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const node = ref.current
      if (!node) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0
      node.style.setProperty('--progress', ratio.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
  return ref
}
