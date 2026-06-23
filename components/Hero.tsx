'use client'

import Image from 'next/image'
import { ArrowDown, Microscope, Network, FlaskConical } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center animated-bg overflow-hidden">
      {/* CSS orb background — zero JS, mobile-safe */}
      <div
        className="hero-orb-1 absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden
      />
      <div
        className="hero-orb-2 absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          bottom: '-15%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        aria-hidden
      />
      <div
        className="hero-orb-3 absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          top: '40%',
          left: '40%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(3,7,18,0.7) 100%)',
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="container-wide relative z-10 pt-28 sm:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Copy ── */}
          <div>
            <div className="section-badge mb-6">
              <FlaskConical size={13} />
              GNOBB &middot; SPSB &middot; ASI School of Life
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl leading-[1.06] tracking-tight mb-5">
              <span className="text-white">GSA </span>
              <span className="gradient-text">Bioinformatics</span>
              <br />
              <span className="text-white">Internship</span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              A 6-month hybrid program bridging theoretical education and
              real-world research in life sciences — integrating{' '}
              <span className="text-cyan-300 font-medium">bioinformatics</span>,{' '}
              <span className="text-emerald-300 font-medium">data science</span>, and{' '}
              <span className="text-violet-300 font-medium">molecular biology</span>.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#cohort-c02" className="btn-primary">
                <Microscope size={16} />
                Meet Cohort C02
              </a>
              <a href="#cohort" className="btn-outline">
                <Network size={16} />
                Cohort C01
              </a>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
              {[
                { val: '6', label: 'Months', sub: 'Hybrid format' },
                { val: '5+', label: 'Interns', sub: 'Cohort C01' },
                { val: '3', label: 'Orgs', sub: 'Collaborating' },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-cyan-500/25 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-cyan leading-none">
                    {s.val}
                  </div>
                  <div className="text-white text-xs sm:text-sm font-semibold mt-1">{s.label}</div>
                  <div className="text-slate-500 text-xs hidden sm:block">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Logo visual (desktop only) ── */}
          <div className="hidden lg:flex relative justify-center items-center">
            {/* Glow blob */}
            <div
              className="absolute rounded-full blur-3xl pointer-events-none"
              style={{
                width: 360,
                height: 360,
                background:
                  'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(16,185,129,0.1) 60%, transparent 100%)',
              }}
              aria-hidden
            />

            {/* Central card */}
            <div className="relative glass rounded-3xl p-8 glow-cyan animate-float">
              <Image
                src="/logos/GSABioinformaticsInternship.png"
                alt="GSA Bioinformatics Internship"
                width={240}
                height={240}
                className="object-contain"
                unoptimized
                priority
              />
            </div>

            {/* Floating org logos — safe absolute positions */}
            <div className="absolute -top-5 -right-2 glass rounded-xl p-2.5 animate-float-delayed shadow-lg">
              <Image src="/logos/GNOBB.png" alt="GNOBB" width={48} height={48} className="object-contain" unoptimized />
            </div>
            <div className="absolute -bottom-5 -right-2 glass rounded-xl p-2.5 animate-float-slow shadow-lg">
              <Image src="/logos/SPSB.png" alt="SPSB" width={48} height={48} className="object-contain" unoptimized />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 glass rounded-xl p-2.5 animate-float-delayed shadow-lg">
              <Image src="/logos/ASISchoolofLife.png" alt="ASI" width={48} height={48} className="object-contain" unoptimized />
            </div>
          </div>
        </div>

        {/* Mobile: logo strip (shows only on < lg) */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-10 flex-wrap">
          {[
            { src: '/logos/GNOBB.png', alt: 'GNOBB' },
            { src: '/logos/SPSB.png', alt: 'SPSB' },
            { src: '/logos/ASISchoolofLife.png', alt: 'ASI' },
          ].map((org) => (
            <div key={org.alt} className="glass rounded-xl p-2.5">
              <Image src={org.src} alt={org.alt} width={44} height={44} className="object-contain" unoptimized />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll to About"
      >
        <span className="text-[0.6rem] font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
