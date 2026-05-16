'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Building2 } from 'lucide-react'

const hosts = [
  {
    name: 'Global Network of Bangladeshi Biotechnologists',
    abbr: 'GNOBB',
    logo: '/logos/GNOBB.png',
    desc: 'A global network connecting Bangladeshi biotechnologists worldwide, fostering collaboration and knowledge exchange in life sciences.',
    role: 'Host Organization',
    color: '#06b6d4',
  },
  {
    name: 'Society for the Popularization of Science, Bangladesh',
    abbr: 'SPSB',
    logo: '/logos/SPSB.png',
    desc: 'Promoting scientific literacy and public engagement with science across Bangladesh through education and outreach programs.',
    role: 'Host Organization',
    color: '#10b981',
  },
  {
    name: 'ASI School of Life',
    abbr: 'ASI',
    logo: '/logos/ASISchoolofLife.png',
    desc: 'An academic institution dedicated to life science education and training, providing foundational and advanced coursework in biology.',
    role: 'Host Organization',
    color: '#8b5cf6',
  },
]

const partners = [
  {
    name: 'Big Bioinformatics Lab, CHIRAL Bangladesh',
    abbr: 'CHIRAL',
    logo: '/logos/chiral_logo.jpg',
    desc: 'A dedicated bioinformatics research lab providing core training, mentorship, and collaborative research support for program participants.',
    role: 'Core Training & Research Partner',
    color: '#f59e0b',
  },
  {
    name: 'DeepBio Limited',
    abbr: 'DeepBio',
    logo: '/logos/DeepBioLogo.png',
    desc: 'A bioinformatics and AI-driven life science company contributing industry expertise, real-world research projects, and mentorship.',
    role: 'Research & Industry Partner',
    color: '#ec4899',
  },
  {
    name: 'DeepBio Academy',
    abbr: 'DeepBio Academy',
    logo: '/logos/DeepBioLogo.png',
    desc: 'The educational arm of DeepBio — providing structured bioinformatics training, online learning resources, and career development pathways for aspiring researchers.',
    role: 'Training & Education Partner',
    color: '#a855f7',
  },
]

export default function Organizations() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 110)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="py-24 lg:py-32 relative"
      style={{ background: 'rgba(6,13,26,0.7)' }}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-badge mb-5">
            <Building2 size={13} />
            Organizations
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            The <span className="gradient-text">Collaborative Force</span> Behind GSA
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three host organizations and three research partners unite to deliver a world-class
            bioinformatics training experience.
          </p>
        </div>

        {/* Host organizations */}
        <div className="mb-5 reveal">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            Host Organizations
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hosts.map((org, i) => (
              <div key={org.abbr} className="reveal card p-6 flex flex-col h-full" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Image src={org.logo} alt={org.abbr} width={56} height={56} className="object-contain" unoptimized />
                  </div>
                  <div>
                    <div
                      className="tag text-xs mb-2"
                      style={{ background: `${org.color}18`, color: org.color, border: `1px solid ${org.color}30` }}
                    >
                      {org.role}
                    </div>
                    <h3 className="text-white font-semibold text-base leading-snug">{org.name}</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider my-10" />

        {/* Partner organizations */}
        <div className="reveal">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            Research &amp; Training Partners
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((org, i) => (
              <div key={org.abbr} className="reveal card p-6 flex flex-col h-full" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Image src={org.logo} alt={org.abbr} width={56} height={56} className="object-contain" unoptimized />
                  </div>
                  <div>
                    <div
                      className="tag text-xs mb-2"
                      style={{ background: `${org.color}18`, color: org.color, border: `1px solid ${org.color}30` }}
                    >
                      {org.role}
                    </div>
                    <h3 className="text-white font-semibold text-base leading-snug">{org.name}</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo strip */}
        <div className="reveal mt-14">
          <div
            className="flex flex-wrap items-center justify-center gap-10 py-8 px-10 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {[...hosts, ...partners].map((org) => (
              <div key={org.abbr} className="flex flex-col items-center gap-2 group">
                <Image
                  src={org.logo}
                  alt={org.abbr}
                  width={64}
                  height={64}
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity logo-img"
                  unoptimized
                />
                <span className="text-slate-600 text-xs font-mono group-hover:text-slate-400 transition-colors">
                  {org.abbr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
