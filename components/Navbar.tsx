'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const APPLY_URL = 'https://forms.gle/uReie9GcAUeYbzsY8'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#cohort', label: 'Cohort C01' },
  { href: '#mentors', label: 'Mentors' },
  { href: '#gallery', label: 'Gallery' },
  { href: '/onboarding', label: 'Onboarding' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'glass border-b border-cyan-500/10 py-3 shadow-lg shadow-black/20' : 'py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="GSA Bioinformatics Internship">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image src="/logos/GSABioinformaticsInternship.png" alt="GSA" fill className="object-contain" unoptimized />
          </div>
          <div className="leading-none">
            <div className="text-white font-semibold text-sm tracking-tight">GSA Bioinformatics</div>
            <div className="text-cyan-400 text-xs font-mono mt-0.5">Internship Program</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Apply CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #059669, #06b6d4)',
              boxShadow: '0 0 16px rgba(6,182,212,0.3)',
            }}
          >
            Apply C02
          </a>
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass border-t border-cyan-500/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 px-2 text-slate-300 hover:text-cyan-400 font-medium transition-colors border-b border-white/5 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center px-4 py-3 rounded-lg text-sm font-bold text-white"
            style={{ background: 'linear-gradient(90deg, #059669, #06b6d4)' }}
          >
            Apply for Cohort 02
          </a>
        </nav>
      </div>
    </header>
  )
}
