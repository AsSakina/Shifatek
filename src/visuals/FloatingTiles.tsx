import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { GraduationCap, Package, Pill, ShieldCheck, Stethoscope, WifiOff } from 'lucide-react'
import { useReducedMotion } from '../lib/useReducedMotion'

/** Tuiles d'icônes en profondeur autour de la scène, avec parallaxe au pointeur. */
const TILES = [
  { Icon: Pill, x: '-6%', y: '0%', rot: '-8deg', depth: 14, delay: '0s', accent: 'accent-teal' },
  { Icon: Stethoscope, x: '97%', y: '2%', rot: '9deg', depth: 18, delay: '-1.4s', accent: '' },
  { Icon: GraduationCap, x: '-11%', y: '46%', rot: '4deg', depth: 10, delay: '-0.8s', accent: '' },
  { Icon: WifiOff, x: '101%', y: '44%', rot: '-7deg', depth: 16, delay: '-3.8s', accent: 'accent-coral' },
  { Icon: Package, x: '-4%', y: '90%', rot: '6deg', depth: 22, delay: '-2.6s', accent: '' },
  { Icon: ShieldCheck, x: '95%', y: '92%', rot: '-5deg', depth: 12, delay: '-2s', accent: 'accent-teal' },
] as const

export function FloatingTiles() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node) return
    let frame = 0
    let x = 0
    let y = 0
    const apply = () => {
      frame = 0
      node.style.setProperty('--px', x.toFixed(3))
      node.style.setProperty('--py', y.toFixed(3))
    }
    const onMove = (event: PointerEvent) => {
      x = (event.clientX / window.innerWidth - 0.5) * 2
      y = (event.clientY / window.innerHeight - 0.5) * 2
      if (!frame) frame = requestAnimationFrame(apply)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reduced])

  return (
    <div className="floating-tiles" ref={ref} aria-hidden="true">
      {TILES.map(({ Icon, x, y, rot, depth, delay, accent }, i) => (
        <div
          key={i}
          className={`tile ${accent}`.trim()}
          style={{ '--x': x, '--y': y, '--rot': rot, '--depth': depth, '--delay': delay } as CSSProperties}
        >
          <Icon strokeWidth={1.6} />
        </div>
      ))}
    </div>
  )
}
