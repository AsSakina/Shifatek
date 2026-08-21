import { NsoromaStar } from '../visuals/NsoromaStar'

/** Numéro d'index + intitulé + filet : le repère éditorial de chaque section. */
export function SectionLabel({ index, children }: { index: number; children: string }) {
  return (
    <div className="section-label">
      <span className="num">{String(index).padStart(2, '0')}</span>
      <span className="eyebrow">
        <NsoromaStar size={11} />
        {children}
      </span>
      <span className="rule" aria-hidden="true" />
    </div>
  )
}
