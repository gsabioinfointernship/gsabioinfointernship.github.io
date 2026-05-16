'use client'

import { useEffect, useRef } from 'react'
import {
  Laptop,
  GitBranch,
  Users2,
  BarChart3,
  Calendar,
  BookMarked,
  ChevronRight,
} from 'lucide-react'

const features = [
  {
    icon: Laptop,
    title: 'Hybrid Format',
    body: 'Flexible online and in-person sessions designed to maximize learning while accommodating participants from across Bangladesh.',
    tag: 'Format',
    color: 'cyan',
  },
  {
    icon: GitBranch,
    title: 'Research Projects',
    body: 'Every intern undertakes an independent research project in computational biology, culminating in publication-ready analyses.',
    tag: 'Curriculum',
    color: 'emerald',
  },
  {
    icon: Users2,
    title: 'Expert Mentorship',
    body: 'One-on-one guidance from researchers at CHIRAL Bangladesh and DeepBio Limited throughout the entire internship period.',
    tag: 'Mentorship',
    color: 'violet',
  },
  {
    icon: BarChart3,
    title: 'Data Science Skills',
    body: 'Hands-on training in R, Python, Linux, and bioinformatics pipelines covering genomics, transcriptomics, and multi-omics.',
    tag: 'Technical',
    color: 'cyan',
  },
  {
    icon: Calendar,
    title: '6-Month Duration',
    body: 'A structured 6-month program providing sufficient depth for meaningful research output and comprehensive skill development.',
    tag: 'Duration',
    color: 'emerald',
  },
  {
    icon: BookMarked,
    title: 'Scientific Integrity',
    body: 'Training in research ethics, reproducible science, open-source tools, and best practices for computational biology research.',
    tag: 'Ethics',
    color: 'violet',
  },
]

const colorMap = {
  cyan: {
    badge: 'tag-cyan',
    iconBg: 'rgba(6,182,212,0.1)',
    iconBorder: 'rgba(6,182,212,0.2)',
    iconColor: '#22d3ee',
    gradient: 'from-cyan-500/10 to-transparent',
  },
  emerald: {
    badge: 'tag-green',
    iconBg: 'rgba(16,185,129,0.1)',
    iconBorder: 'rgba(16,185,129,0.2)',
    iconColor: '#34d399',
    gradient: 'from-emerald-500/10 to-transparent',
  },
  violet: {
    badge: 'tag-purple',
    iconBg: 'rgba(139,92,246,0.1)',
    iconBorder: 'rgba(139,92,246,0.2)',
    iconColor: '#a78bfa',
    gradient: 'from-violet-500/10 to-transparent',
  },
}

const timeline = [
  { phase: 'Phase 1', label: 'Foundations', weeks: 'Weeks 1–4', desc: 'Linux, R, Python, bioinformatics basics' },
  { phase: 'Phase 2', label: 'Core Training', weeks: 'Weeks 5–12', desc: 'NGS analysis, genomics, transcriptomics' },
  { phase: 'Phase 3', label: 'Research', weeks: 'Weeks 13–20', desc: 'Independent project design & execution' },
  { phase: 'Phase 4', label: 'Showcase', weeks: 'Weeks 21–24', desc: 'Manuscript writing & project presentation' },
]

export default function ProgramHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 90)
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="program" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">
            <BookMarked size={13} />
            The Program
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            What Makes GSA <span className="gradient-text">Unique</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A carefully designed curriculum combining structured learning, real research,
            and mentorship from active scientists.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => {
            const c = colorMap[f.color as keyof typeof colorMap]
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="reveal card p-6 group relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Gradient hover accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl`}
                  style={{
                    background: `linear-gradient(90deg, ${c.iconColor}60, transparent)`,
                  }}
                />

                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: c.iconBg, border: `1px solid ${c.iconBorder}` }}
                  >
                    <Icon size={20} color={c.iconColor} />
                  </div>
                  <div>
                    <span className={`tag ${c.badge} text-[0.7rem] mb-1.5`}>{f.tag}</span>
                    <h3 className="text-white font-semibold text-base">{f.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
              </div>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="reveal">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: 'rgba(15,30,58,0.5)',
              border: '1px solid rgba(6,182,212,0.12)',
            }}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-8 text-center">
              Program Timeline
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {timeline.map((t, i) => (
                <div key={t.phase} className="relative flex flex-col">
                  {/* Connector line */}
                  {i < timeline.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-5 left-1/2 w-full h-px"
                      style={{
                        background: 'linear-gradient(90deg, rgba(6,182,212,0.4), rgba(6,182,212,0.1))',
                      }}
                    />
                  )}
                  <div className="flex flex-col items-center text-center px-4 pb-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3 relative z-10 flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                        boxShadow: '0 0 20px rgba(6,182,212,0.4)',
                      }}
                    >
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <div className="text-xs font-mono text-cyan-400 mb-1">{t.weeks}</div>
                    <div className="text-white font-semibold mb-1">{t.label}</div>
                    <div className="text-slate-400 text-sm">{t.desc}</div>
                    {i < timeline.length - 1 && (
                      <ChevronRight
                        size={16}
                        className="lg:hidden text-cyan-500/40 mt-2 rotate-90"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
