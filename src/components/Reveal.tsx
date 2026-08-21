import type { CSSProperties, PointerEventHandler, ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'

type Props = {
  children: ReactNode
  className?: string
  /** Rang dans une grille : décale la révélation de 70 ms par cran. */
  index?: number
  id?: string
  style?: CSSProperties
  onPointerMove?: PointerEventHandler<HTMLDivElement>
}

export function Reveal({ children, className = '', index = 0, id, style, onPointerMove }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'in' : ''} ${className}`.trim()}
      style={{ '--i': index, ...style } as CSSProperties}
      onPointerMove={onPointerMove}
    >
      {children}
    </div>
  )
}
