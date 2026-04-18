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
        <li><a href="#hakkimizda" onClick={closeMenu}>Hakkımızda</a></li>
        <li><a href="#galeri"     onClick={closeMenu}>Galeri</a></li>
        <li><a href="#hizmetler" onClick={closeMenu}>Hizmetler</a></li>
        <li><a href="#atolye"    onClick={closeMenu}>Atölye</a></li>
        <li><a href="#referanslar" onClick={closeMenu}>Referanslar</a></li>
        <li><a href="#iletisim"  className="nav-cta" onClick={closeMenu}>İletişim</a></li>
      </ul>

      <button
        className={`nav-burger${menuOpen ? ' open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menüyü aç/kapat"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
