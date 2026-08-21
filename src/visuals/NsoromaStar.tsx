/**
 * Nsoromma — étoile à huit branches, motif récurrent du design system.
 * Symbole de garde et de qualité (cf. design.md).
 */
const POINTS =
  '50.0,0.0 57.8,31.1 85.4,14.6 68.9,42.2 100.0,50.0 68.9,57.8 85.4,85.4 57.8,68.9 ' +
  '50.0,100.0 42.2,68.9 14.6,85.4 31.1,57.8 0.0,50.0 31.1,42.2 14.6,14.6 42.2,31.1'

export function NsoromaStar({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <polygon points={POINTS} />
    </svg>
  )
}
