import { NsoromaStar } from './NsoromaStar'

/**
 * Composition décorative : anneaux concentriques + étoile Nsoromma au centre.
 * Remplace les anciennes vignettes « ◍ » et « S ».
 */
export function OrbitMark({ letter }: { letter?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false" className="drift">
      <g fill="none" stroke="currentColor" strokeOpacity="0.35">
        <circle cx="100" cy="100" r="92" strokeDasharray="2 8" strokeLinecap="round" />
        <circle cx="100" cy="100" r="70" strokeOpacity="0.22" />
        <circle cx="100" cy="100" r="48" strokeOpacity="0.16" />
      </g>
      {[0, 90, 180, 270].map((angle) => (
        <circle
          key={angle}
          cx={100 + 92 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 92 * Math.sin((angle * Math.PI) / 180)}
          r="4"
          fill="currentColor"
          fillOpacity="0.5"
        />
      ))}
      {letter ? (
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dominantBaseline="central"
          fill="currentColor"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="86"
          fontWeight="600"
        >
          {letter}
        </text>
      ) : (
        <g transform="translate(64 64) scale(0.72)">
          <NsoromaStar size={100} />
        </g>
      )}
    </svg>
  )
}
