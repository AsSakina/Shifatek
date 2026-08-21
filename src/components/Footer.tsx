import { footer, nav } from '../content'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <a href="/" className="logo logo-full">
          <img className="logo-img light" src="/logo-full-light.png" alt="Shifatek — technologies au service de la santé" width={422} height={120} />
          <img className="logo-img dark" src="/logo-full-dark.png" alt="" aria-hidden="true" width={422} height={120} />
        </a>
        <div className="foot-links">
          {nav.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="#contact">{footer.contactLink}</a>
        </div>
        <small>{footer.legal}</small>
      </div>
    </footer>
  )
}
