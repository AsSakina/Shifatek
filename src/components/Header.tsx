import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useContent } from '../lib/ContentContext'
import { useActiveSection } from '../lib/useActiveSection'
import { useScrollProgress } from '../lib/useScrollProgress'
import { LocaleToggle } from './LocaleToggle'
import { ThemeToggle } from './ThemeToggle'

const SECTION_IDS = ['mission', 'produits', 'apropos', 'recherche', 'contact'] as const

export function Header() {
  const { nav, navCta, ui } = useContent()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useScrollProgress<HTMLElement>()
  const active = useActiveSection(SECTION_IDS)
  const path = typeof window === 'undefined' ? '/' : window.location.pathname.replace(/\/$/, '') || '/'

  /** Actif : la page produit courante, ou la section visible sur l'accueil. */
  const isActive = (href: string) =>
    href.startsWith('/#') ? path === '/' && active === href.slice(2) : href === path

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? 'scrolled' : ''}`.trim()}>
      <div className="wrap nav">
        <a href={path === '/' ? '#top' : '/'} className="logo">
          <img className="logo-img light" src="/logo-light.png" alt="Shifatek" width={555} height={120} />
          <img className="logo-img dark" src="/logo-dark.png" alt="" aria-hidden="true" width={555} height={120} />
        </a>
        <nav
          id="main-navigation"
          className={open ? 'nav-links open' : 'nav-links'}
          aria-label={ui.mainNav}
        >
          {nav.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={isActive(href) ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            {navCta}
          </a>
        </nav>
        <LocaleToggle />
        <ThemeToggle />
        <button
          className="burger"
          aria-label={open ? ui.closeMenu : ui.openMenu}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
