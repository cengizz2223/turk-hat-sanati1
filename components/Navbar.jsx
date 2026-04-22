'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="#hero" className="nav-logo">
        <span className="nav-logo-tagline">Gelenekten Geleceğe</span>
        <span className="nav-logo-main">Türk Hat Sanatı</span>
        <span className="nav-logo-script">Yolculuğu</span>
      </Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#hakkinda"    onClick={closeMenu}>Proje</a></li>
        <li><a href="#etkinlikler" onClick={closeMenu}>Etkinlikler</a></li>
        <li><a href="#egitmenler"  onClick={closeMenu}>Eğitmenler</a></li>
        <li><a href="#paydashlar"  onClick={closeMenu}>Paydaşlar</a></li>
        <li><a href="#iletisim" className="nav-cta" onClick={closeMenu}>İletişim</a></li>
      </ul>

      <button
        className={`nav-burger${menuOpen ? ' open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menüyü aç/kapat"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
