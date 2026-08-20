import { StrictMode, useEffect, useRef, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Menu, X } from 'lucide-react'
import './styles.css'

const navItems = [['Mission', '#mission'], ['APHIA Care', '#aphia'], ['Ilmia', '#ilmia']] as const
const values = [
  ['Rigueur', 'Des produits testés dans les conditions réelles du terrain, pas seulement en théorie.'],
  ['Accessibilité', 'Des outils pensés pour une connectivité variable et des usages concrets.'],
  ['Impact local', "Des solutions qui répondent aux besoins de l'Afrique de l'Ouest, depuis l'Afrique de l'Ouest."],
  ['Innovation', "L'IA et le digital mis au service de la santé et de la formation."],
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <header className={scrolled ? 'scrolled' : ''}><div className="wrap nav"><a href="#top" className="logo">Shifa<span>tek</span></a><nav id="main-navigation" className={open ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Nous contacter</a></nav><button className="burger" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.12 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`}>{children}</div>
}
function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }
  return <form onSubmit={submit} className="reveal">{[['name', 'Nom', 'text', true], ['email', 'E-mail', 'email', true], ['company', 'Entreprise (facultatif)', 'text', false]].map(([id, label, type, required]) => <div className="field" key={id as string}><label htmlFor={id as string}>{label as string}</label><input id={id as string} name={id as string} type={type as string} required={required as boolean} /></div>)}<div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div><button type="submit">Envoyer le message</button><p className="form-note" role="status">{sent ? 'Merci ! Votre message est prêt — connectez le formulaire à votre e-mail pour l’activer.' : ''}</p></form>
}

function App() {
  return <><Header /><main id="top"><section className="hero"><div className="hero-glow" /><div className="hero-glow two" /><div className="wrap"><Reveal><span className="eyebrow">Santé digitale · Afrique de l'Ouest</span></Reveal><Reveal><h1>La technologie de santé, pensée <em>depuis le terrain</em>.</h1></Reveal><Reveal><p>Shifatek conçoit des outils de santé digitale et des solutions innovantes pour l'Afrique de l'Ouest — en partant des besoins réels des pharmacies, des soignants et des étudiants, plutôt que de solutions importées.</p></Reveal><Reveal className="hero-actions"><a href="#mission" className="btn-primary">Découvrir notre mission</a><a href="#contact" className="btn-text">Nous contacter <ArrowRight aria-hidden="true" /></a></Reveal></div></section>
  <section className="band" id="mission"><div className="wrap"><div className="split"><Reveal className="content"><span className="eyebrow">Notre conviction</span><h2>Partir des besoins réels, pas importer des solutions toutes faites.</h2><p className="lead">Trop d'outils numériques de santé sont pensés ailleurs, pour des contextes qui ne sont pas les nôtres : connexion permanente supposée, réalités réglementaires différentes, usages éloignés du terrain.</p><p className="lead">Chez Shifatek, chaque produit naît d'un problème observé directement au Sénégal — dans une pharmacie, une faculté de médecine, une entreprise — et se construit avec les personnes concernées. C'est ce qui rend nos outils réellement utiles, et adoptés.</p></Reveal><Reveal className="visual teal-mark">◍</Reveal></div></div></section>
  <section className="band products-band" id="produits"><div className="wrap"><Reveal className="section-head"><span className="eyebrow">Nos solutions</span><h2>Une mission, des expressions concrètes.</h2><p>Chaque produit Shifatek répond à un besoin observé sur le terrain de la santé en Afrique de l'Ouest.</p></Reveal><div className="products"><Product id="aphia" tone="aphia" tag="Santé digitale · en production" title="APHIA Care" text="L'ERP qui digitalise la gestion des pharmacies sénégalaises : stock, ventes, réception. Conçu offline-first, il fonctionne même sans connexion stable et se synchronise dès le retour du réseau." status="Déployé et en commercialisation" /><Product id="ilmia" tone="ilmia" tag="Apprentissage · en construction" title="Ilmia" text="Un assistant qui forme les étudiants et professionnels de santé par le jeu : des scénarios cliniques interactifs, guidés par l'IA, ancrés dans les pathologies du contexte ouest-africain." status="En conception" /></div></div></section>
  <section className="band light" id="apropos"><div className="wrap"><div className="split"><Reveal className="visual coral-mark">S</Reveal><Reveal className="content"><span className="eyebrow">L'équipe</span><h2>Une équipe entre la tech, la santé et le terrain sénégalais.</h2><p className="lead">Basée à Dakar, Shifatek réunit une expertise technique réelle — data science, développement, IA — et une connaissance intime des réalités de la santé en Afrique de l'Ouest.</p><p className="lead">Nous construisons avec une exigence : chaque outil doit fonctionner dans le monde réel, pas seulement en démonstration.</p></Reveal></div><div className="values">{values.map(([title, text]) => <Reveal className="value" key={title}><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
  <section className="band" id="contact"><div className="wrap contact-grid"><Reveal className="contact-info"><span className="eyebrow">Parlons-en</span><h2>Construisons la santé digitale de demain, ensemble.</h2><p>Un projet, un partenariat, une formation pour vos équipes ? Écrivez-nous, nous vous répondrons rapidement.</p><div className="contact-meta"><div><small>Basés à</small><span>Dakar, Sénégal</span></div><div><small>E-mail</small><a href="mailto:contact@shifatek.com">contact@shifatek.com</a></div></div></Reveal><ContactForm /></div></section></main><footer><div className="wrap foot"><a href="#top" className="logo">Shifa<span>tek</span></a><div className="foot-links">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="#contact">Contact</a></div><small>© 2026 Shifatek — Dakar, Sénégal. Tous droits réservés.</small></div></footer></>
}
function Product({ id, tone, tag, title, text, status }: { id: string; tone: string; tag: string; title: string; text: string; status: string }) { return <Reveal className={`card ${tone}`}><div id={id} className="anchor" /><span className="tag">{tag}</span><h3>{title}</h3><p>{text}</p><span className="status"><i />{status}</span></Reveal> }

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
