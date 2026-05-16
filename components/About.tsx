'use client'

import { useEffect, useRef } from 'react'
import { Target, BookOpen, Users, Globe, Lightbulb, Award } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Mission-Driven',
    body: 'Bridging the gap between theoretical education and real-world research in life sciences, fostering scientific integrity and innovation.',
    color: 'cyan',
  },
  {
    icon: BookOpen,
    title: 'Hands-On Learning',
    body: 'Participants gain practical experience through structured instruction, mentored projects, and collaborative research in bioinformatics.',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    body: 'Guided by academic researchers, educators, and practitioners from leading institutions and research labs across Bangladesh.',
    color: 'violet',
  },
  {
    icon: Globe,
    title: 'Global Network',
    body: "Connected to a thriving research ecosystem through GNOBB's global network of Bangladeshi biotechnologists worldwide.",
    color: 'cyan',
  },
  {
    icon: Lightbulb,
    title: 'Research Projects',
    body: 'Interns conduct independent research on current biomedical challenges, producing publication-quality analyses and insights.',
    color: 'emerald',
  },
  {
    icon: Award,
    title: 'Scientific Literacy',
    body: 'Committed to promoting early exposure to bioinformatics and advancing life science education in Bangladesh and beyond.',
    color: 'violet',
  },
]

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  cyan: {
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    icon: '#22d3ee',
  },
  emerald: {
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    icon: '#34d399',
  },
  violet: {
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    icon: '#a78bfa',
  },
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
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
    <section id="about" className="py-24 lg:py-32 relative" ref={sectionRef}>
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">
            <Target size={13} />
            Our Mission
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Nurturing the Next Generation of{' '}
            <span className="gradient-text">Bioinformatics Researchers</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            The GSA Bioinformatics Internship is a collaborative initiative jointly organized by
            GNOBB, ASI School of Life, and SPSB — committed to nurturing the next generation of
            bioinformatics researchers through accessible, high-quality, and impact-driven training.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const colors = colorMap[pillar.color]
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="reveal card p-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                >
                  <Icon size={22} color={colors.icon} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
