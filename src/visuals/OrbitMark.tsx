/**
 * Composition décorative : anneaux concentriques, purement abstraite.
 * Pas de lettre ni de symbole au centre — ni l'étoile Nsoromma (identité
 * d'APHIA, cf. Roadmap), ni une initiale : juste le motif.
 */
export function OrbitMark() {
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
      <circle cx="100" cy="100" r="5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}
