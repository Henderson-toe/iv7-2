'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const WHATSAPP_URL =
  'https://wa.me/5595991114018?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IV7%20e%20quero%20saber%20mais!'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container-iv7 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Soluções', href: '#solucoes' },
            { label: 'Serviços', href: '#servicos' },
            { label: 'Por que a IV7', href: '#porque' },
            { label: 'Blog', href: '/blog' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-sans text-iv7-gray-light hover:text-white transition-colors duration-200 tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-helvetica font-bold tracking-widest uppercase px-6 py-2.5 bg-white text-black hover:bg-iv7-gray-lighter transition-colors duration-200"
          >
            Falar com a IV7
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {[
            { label: 'Soluções', href: '#solucoes' },
            { label: 'Serviços', href: '#servicos' },
            { label: 'Por que a IV7', href: '#porque' },
            { label: 'Blog', href: '/blog' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-sans text-iv7-gray-light hover:text-white transition-colors uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-helvetica font-bold tracking-widest uppercase px-6 py-3 bg-white text-black text-center"
          >
            Falar com a IV7
          </a>
        </div>
      )}
    </header>
  )
}
