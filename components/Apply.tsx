'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  GraduationCap,
  ExternalLink,
  MapPin,
} from 'lucide-react'

const APPLY_URL = 'https://forms.gle/uReie9GcAUeYbzsY8'

const benefits = [
  { icon: GraduationCap, label: 'Structured Curriculum', desc: 'Foundation to advanced bioinformatics over 6 months', color: '#06b6d4' },
  { icon: Users, label: 'Expert Mentorship', desc: 'Guided by CHIRAL Bangladesh, DeepBio & DeepBio Academy', color: '#10b981' },
  { icon: CheckCircle2, label: 'Research Project', desc: 'Independent, publication-ready bioinformatics study', color: '#8b5cf6' },
  { icon: Rocket, label: 'Career Launchpad', desc: 'Network, skills, and verified research experience', color: '#f59e0b' },
]

const eligibility = [
  // Who
  'Undergraduate or graduate students in biology, biochemistry, bioinformatics, or related fields',
  'Open to students from any institution in Bangladesh — must be able to attend in-person sessions every Friday and Saturday in Dhaka',
  // Attitude & mindset
  'Strong motivation to learn computational biology and data-driven research',
  'Highly team-oriented and dedicated, with a problem-solving mindset and passion for data-driven biological research',
  // Skills
  'Basic familiarity with Bash, R, or Python, or willingness to learn',
  'Access to a personal laptop for online and remote components',
  // Time & commitment
  'Can commit 15–20 hours/week to lab or computational work (evenings and weekends preferred; flexible during exams)',
  'Commitment to complete the full 6-month hybrid program',
  'Willingness to present research progress and participate in weekly meetings',
  // Constraints
  'Must not be engaged with any other organization during the internship — academic thesis work is the only exception',
]

const steps = [
  { n: '01', label: 'Online Application', desc: 'Submit via Google Form' },
  { n: '02', label: 'Shortlisted', desc: 'CV & motivation review' },
  { n: '03', label: 'Interview', desc: 'Short online interview' },
  { n: '04', label: 'Offer Letter', desc: 'Final selection confirmed' },
]

const programDetails = [
  ['Format', 'Hybrid (online + in-person)'],
  ['Duration', '6 months'],
  ['Location', 'MasLab, Dhaka'],
  ['Sessions', 'Every Friday & Saturday'],
  ['Language', 'English / Bangla'],
  ['Application', 'Google Form — free'],
]

function fade(delay: string) {
  return { transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}` }
}

export default function Apply() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.06 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const anim = (delay: string) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    ...fade(delay),
  })

  return (
    <section
      id="apply"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ background: 'rgba(6,13,26,0.8)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className="container-wide relative space-y-16">

        {/* ── 1. Header ── */}
        <div className="text-center" style={anim('0s')}>
          <div className="section-badge mb-5">
            <Rocket size={13} />
            GSA Cohort 02 — Applications Open
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            Apply for <span className="gradient-text">GSA Cohort 02</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            6 months of hands-on bioinformatics research, expert mentorship, and real-world projects — based in Dhaka.
          </p>
        </div>

        {/* ── 2. What you get ── */}
        <div style={anim('0.1s')}>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 text-center">What You Get</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="card p-5 text-center">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${b.color}15`, border: `1px solid ${b.color}30` }}
                  >
                    <Icon size={20} color={b.color} />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{b.label}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{b.desc}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── 3. Who should apply ── */}
        <div style={anim('0.15s')}>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 text-center">Who Should Apply</p>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Eligibility */}
            <div className="card p-6">
              <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle2 size={17} color="#34d399" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-3">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attendance requirement */}
            <div className="card p-6 flex flex-col gap-4">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <MapPin size={17} color="#f59e0b" />
                Attendance Requirement
              </h3>
              <div
                className="rounded-xl p-4 flex-1"
                style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}
              >
                <p className="text-amber-200 font-semibold text-sm mb-2">In-Person Sessions — MasLab, Dhaka</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All selected interns must attend in-person every{' '}
                  <span className="text-white font-medium">Friday and Saturday</span> throughout the 6-month program.
                  Remote participation is not available for in-person sessions.
                </p>
              </div>
              {/* Program details */}
              <div className="space-y-2 pt-1">
                {programDetails.map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm border-b border-white/4 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500">{label}</span>
                    <span className="text-slate-200 font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                <iframe
                  title="MASLab Location"
                  src="https://maps.google.com/maps?q=Level+12,+758+Satmasjid+Road,+Dhaka+1209&output=embed&z=16"
                  width="100%"
                  height="200"
                  style={{ display: 'block', border: 0, filter: 'grayscale(0.3) invert(0.9) hue-rotate(180deg)' }}
                  loading="lazy"
                  allowFullScreen
                />
                <div className="px-3 py-2" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-slate-400 text-xs font-mono">Level 12, 758 Satmasjid Road, Dhaka 1209</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. How to apply ── */}
        <div style={anim('0.2s')}>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 text-center">How to Apply</p>
          <div
            className="rounded-2xl px-8 py-8"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center">
              {steps.map((item, i) => (
                <div key={item.n} className="flex flex-col md:flex-row items-center">
                  <div className="flex flex-col items-center text-center px-8 py-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-3 font-bold text-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(16,185,129,0.2))',
                        border: '2px solid rgba(6,182,212,0.35)',
                        color: '#22d3ee',
                      }}
                    >
                      {item.n}
                    </div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.desc}</div>
                  </div>
                  {i < 3 && (
                    <>
                      <div className="hidden md:block w-14 h-px flex-shrink-0" style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.3), rgba(16,185,129,0.3))' }} />
                      <div className="md:hidden w-px h-6" style={{ background: 'rgba(6,182,212,0.25)' }} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 5. CTA ── */}
        <div className="text-center" style={anim('0.3s')}>
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(5,150,105,0.15) 0%, rgba(6,182,212,0.15) 100%)',
              border: '1px solid rgba(6,182,212,0.25)',
            }}
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={14} color="#22d3ee" />
                <span className="text-cyan-300 text-sm font-semibold">Applications are open now</span>
              </div>
              <p className="text-slate-400 text-sm">Free to apply · No application fee</p>
            </div>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-base text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
                boxShadow: '0 0 24px rgba(6,182,212,0.3)',
              }}
            >
              <ExternalLink size={16} />
              Apply Now
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
