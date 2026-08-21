import { Boxes, Check, PackageCheck, ShoppingCart } from 'lucide-react'

/**
 * Maquette de l'ERP APHIA Care. Contenu illustratif, pas une capture réelle.
 * - `stock` : la vue inventaire (utilisée dans le hero)
 * - `sync`  : la file d'attente hors ligne (utilisée sur la carte produit)
 */
const STOCK_ROWS = [
  { name: 'Paracétamol 500 mg', qty: '128', status: 'En stock', alert: false },
  { name: 'Amoxicilline 250 mg', qty: '42', status: 'En stock', alert: false },
  { name: 'Sérum physiologique', qty: '6', status: 'Stock faible', alert: true },
]

const QUEUE_ROWS = [
  { name: 'Vente · 12:04', state: 'En attente', done: false },
  { name: 'Réception · 11:47', state: 'En attente', done: false },
  { name: 'Inventaire · 09:20', state: 'Envoyé', done: true },
]

type Props = { variant?: 'stock' | 'sync' }

export function AphiaMockup({ variant = 'stock' }: Props) {
  const isSync = variant === 'sync'
  const label = isSync
    ? "Aperçu de l'interface APHIA Care : file d'attente de synchronisation hors ligne"
    : "Aperçu de l'interface APHIA Care : gestion de stock d'une pharmacie"

  return (
    <div className="mock mock-aphia" role="img" aria-label={label}>
      <div className="mock-bar">
        <span className="mock-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="mock-name">APHIA Care</span>
        <span className="spacer" />
        <span className="sync-pill" aria-hidden="true">
          <span className="offline"><i />Hors ligne</span>
          <span className="online"><i />Synchronisé</span>
        </span>
      </div>
      <div className="mock-body">
        <div className="mock-side" aria-hidden="true">
          <button type="button" className={isSync ? '' : 'active'} tabIndex={-1}>
            <Boxes strokeWidth={1.6} />Stock
          </button>
          <button type="button" tabIndex={-1}><ShoppingCart strokeWidth={1.6} />Ventes</button>
          <button type="button" className={isSync ? 'active' : ''} tabIndex={-1}>
            <PackageCheck strokeWidth={1.6} />Réception
          </button>
        </div>
        <div className="mock-main" aria-hidden="true">
          {isSync ? (
            <>
              <div className="mock-row head queue">
                <span>File d'attente</span>
                <span>Statut</span>
              </div>
              {QUEUE_ROWS.map((row) => (
                <div className="mock-row queue" key={row.name}>
                  <strong>{row.name}</strong>
                  <span className={row.done ? 'pill done' : 'pill'}>
                    {row.done ? <Check strokeWidth={3} /> : null}
                    {row.state}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="mock-row head">
                <span>Produit</span>
                <span>Quantité</span>
                <span>Statut</span>
              </div>
              {STOCK_ROWS.map((row) => (
                <div className="mock-row" key={row.name}>
                  <strong>{row.name}</strong>
                  <span className="qty">{row.qty}</span>
                  <span className={row.alert ? 'pill alert' : 'pill'}>{row.status}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
