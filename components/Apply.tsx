'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  CalendarDays,
} from 'lucide-react'

const APPLY_URL = 'https://forms.gle/uReie9GcAUeYbzsY8'

const eligibility = [
  'Undergraduate or graduate students in biology, biochemistry, bioinformatics, or related fields',
  'Strong motivation to learn computational biology and data-driven research',
  'Basic familiarity with any programming language or willingness to learn',
  'Commitment to complete the full 6-month hybrid program',
  'Open to students from any institution in Bangladesh',
]

const benefits = [
  { icon: GraduationCap, label: 'Structured Curriculum', desc: 'Foundation to advanced bioinformatics' },
  { icon: Users, label: 'Expert Mentorship', desc: 'From CHIRAL, DeepBio & DeepBio Academy' },
  { icon: CheckCircle2, label: 'Research Project', desc: 'Independent publication-ready study' },
  { icon: Rocket, label: 'Career Launchpad', desc: 'Network, skills & research experience' },
]

export default function Apply() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="apply"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ background: 'rgba(6,13,26,0.8)' }}
    >
      {/* Animated gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(6,182,212,0.07) 0%, rgba(16,185,129,0.05) 40%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-wide relative">
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Live badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold"
              style={{
                background: 'linear-gradient(90deg, rgba(16,185,129,0.2), rgba(6,182,212,0.2))',
                border: '1px solid rgba(16,185,129,0.4)',
                color: '#34d399',
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400"
                style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
              />
              Applications Open
            </span>
          </div>

          <div className="section-badge mb-5">
            <Rocket size={13} />
            GSA Cohort 02
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Join the{' '}
            <span className="gradient-text">Next Cohort</span>
            <br />
            of GSA Interns
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            GSA Cohort 01 has concluded. We are now launching{' '}
            <span className="text-cyan-300 font-semibold">GSA Cohort 02</span> — apply now to be
            part of Bangladesh&apos;s premier bioinformatics internship program.
          </p>

          {/* Primary CTA */}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white shadow-2xl transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
              boxShadow: '0 0 40px rgba(6,182,212,0.35)',
            }}
          >
            <ExternalLink size={20} />
            Apply for GSA Cohort 02
            <ArrowRight size={20} />
          </a>

          <p className="text-slate-500 text-sm mt-4 flex items-center justify-center gap-1.5">
            <CalendarDays size={14} />
            Apply via Google Form · Free to apply
          </p>
        </div>

        {/* Benefits grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.label}
                className="card p-5 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                  }}
                >
                  <Icon size={22} color="#22d3ee" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{b.label}</div>
                <div className="text-slate-400 text-xs">{b.desc}</div>
              </div>
            )
          })}
        </div>

        {/* Two-col: eligibility + apply panel */}
        <div
          className="grid lg:grid-cols-2 gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}
        >
          {/* Eligibility */}
          <div className="card p-7">
            <h3 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2">
              <CheckCircle2 size={20} color="#34d399" />
              Who Should Apply?
            </h3>
            <ul className="space-y-3">
              {eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply panel */}
          <div
            className="rounded-2xl p-7 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(16,185,129,0.08) 100%)',
              border: '1px solid rgba(6,182,212,0.2)',
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} color="#22d3ee" />
                <span className="text-cyan-300 font-semibold">Apply While Spots Are Available</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                GSA Cohort 02
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Following the success of Cohort 01, we are expanding the program. Cohort 02 will
                feature the same rigorous curriculum with enhanced mentorship from CHIRAL Bangladesh,
                DeepBio Limited, and DeepBio Academy.
              </p>

              <div className="space-y-2 mb-8">
                {[
                  ['Format', 'Hybrid (online + in-person)'],
                  ['Duration', '6 months'],
                  ['Application', 'Google Form (free)'],
                  ['Language', 'English / Bangla'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-slate-500">{label}</span>
                    <span className="text-slate-200 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-center"
              style={{
                background: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
              }}
            >
              <ExternalLink size={17} />
              Open Application Form
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
