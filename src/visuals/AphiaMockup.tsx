import { Boxes, Check, PackageCheck, ShoppingCart } from 'lucide-react'
import { useLocaleSwitch } from '../lib/ContentContext'

/**
 * Maquette de l'ERP APHIA Care. Contenu illustratif, pas une capture réelle.
 * - `stock` : la vue inventaire (utilisée dans le hero)
 * - `sync`  : la file d'attente hors ligne (utilisée sur la carte produit)
 */
const TEXT = {
  fr: {
    label: {
      sync: "Aperçu de l'interface APHIA Care : file d'attente de synchronisation hors ligne",
      stock: "Aperçu de l'interface APHIA Care : gestion de stock d'une pharmacie",
    },
    offline: 'Hors ligne',
    online: 'Synchronisé',
    stock: 'Stock',
    sales: 'Ventes',
    receiving: 'Réception',
    queueHead: "File d'attente",
    statusHead: 'Statut',
    productHead: 'Produit',
    qtyHead: 'Quantité',
    stockRows: [
      { name: 'Paracétamol 500 mg', qty: '128', status: 'En stock', alert: false },
      { name: 'Amoxicilline 250 mg', qty: '42', status: 'En stock', alert: false },
      { name: 'Sérum physiologique', qty: '6', status: 'Stock faible', alert: true },
    ],
    queueRows: [
      { name: 'Vente · 12:04', state: 'En attente', done: false },
      { name: 'Réception · 11:47', state: 'En attente', done: false },
      { name: 'Inventaire · 09:20', state: 'Envoyé', done: true },
    ],
  },
  en: {
    label: {
      sync: 'Preview of the APHIA Care interface: offline sync queue',
      stock: 'Preview of the APHIA Care interface: pharmacy stock management',
    },
    offline: 'Offline',
    online: 'Synced',
    stock: 'Stock',
    sales: 'Sales',
    receiving: 'Receiving',
    queueHead: 'Queue',
    statusHead: 'Status',
    productHead: 'Product',
    qtyHead: 'Quantity',
    stockRows: [
      { name: 'Paracetamol 500 mg', qty: '128', status: 'In stock', alert: false },
      { name: 'Amoxicillin 250 mg', qty: '42', status: 'In stock', alert: false },
      { name: 'Saline solution', qty: '6', status: 'Low stock', alert: true },
    ],
    queueRows: [
      { name: 'Sale · 12:04 PM', state: 'Pending', done: false },
      { name: 'Receiving · 11:47 AM', state: 'Pending', done: false },
      { name: 'Inventory · 9:20 AM', state: 'Sent', done: true },
    ],
  },
} as const

type Props = { variant?: 'stock' | 'sync' }

export function AphiaMockup({ variant = 'stock' }: Props) {
  const { locale } = useLocaleSwitch()
  const t = TEXT[locale]
  const isSync = variant === 'sync'
  const label = isSync ? t.label.sync : t.label.stock

  return (
    <div className="mock mock-aphia" role="img" aria-label={label}>
      <div className="mock-bar">
        <span className="mock-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="mock-name">APHIA Care</span>
        <span className="spacer" />
        <span className="sync-pill" aria-hidden="true">
          <span className="offline"><i />{t.offline}</span>
          <span className="online"><i />{t.online}</span>
        </span>
      </div>
      <div className="mock-body">
        <div className="mock-side" aria-hidden="true">
          <button type="button" className={isSync ? '' : 'active'} tabIndex={-1}>
            <Boxes strokeWidth={1.6} />{t.stock}
          </button>
          <button type="button" tabIndex={-1}><ShoppingCart strokeWidth={1.6} />{t.sales}</button>
          <button type="button" className={isSync ? 'active' : ''} tabIndex={-1}>
            <PackageCheck strokeWidth={1.6} />{t.receiving}
          </button>
        </div>
        <div className="mock-main" aria-hidden="true">
          {isSync ? (
            <>
              <div className="mock-row head queue">
                <span>{t.queueHead}</span>
                <span>{t.statusHead}</span>
              </div>
              {t.queueRows.map((row) => (
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
                <span>{t.productHead}</span>
                <span>{t.qtyHead}</span>
                <span>{t.statusHead}</span>
              </div>
              {t.stockRows.map((row) => (
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
