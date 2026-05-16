'use client'

import { useEffect, useRef } from 'react'
import { School, Star, Users, BookOpen, Lightbulb, ArrowRight } from 'lucide-react'

const activities = [
  {
    icon: BookOpen,
    title: 'Foundational Workshops',
    desc: 'Introduction to computational biology, DNA basics, and bioinformatics tools tailored for school and college students.',
  },
  {
    icon: Users,
    title: 'Intern-Led Sessions',
    desc: 'GSA interns actively mentor younger participants, sharing their research experience and inspiring future scientists.',
  },
  {
    icon: Lightbulb,
    title: 'Hands-On Activities',
    desc: 'Interactive exercises with real data, sequence analysis, and visual biology — making science tangible and exciting.',
  },
  {
    icon: Star,
    title: 'Science Inspiration',
    desc: 'Sparking curiosity about computational biology and research careers among the next generation of Bangladeshi scientists.',
  },
]

export default function Camp() {
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
    <section id="camp" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.04) 50%, rgba(139,92,246,0.04) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      {/* Decorative blob */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Copy */}
          <div>
            <div className="reveal">
              <div className="section-badge mb-6">
                <School size={13} />
                Bioinformatics Camp
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Inspiring the{' '}
                <span className="gradient-text">Next Generation</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Beyond training university students, the GSA internship team organizes a dedicated{' '}
                <span className="text-emerald-300 font-medium">Bioinformatics Camp for School and College Students</span>{' '}
                — designed to spark curiosity and build foundational awareness of computational
                biology among younger learners.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Interns actively support this camp through mentoring, instruction, and event
                coordination — turning their own learning journey into an opportunity to give back.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-emerald-300" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <School size={15} />
                  School Students
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-cyan-300" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <BookOpen size={15} />
                  College Students
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-violet-300" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                  <Users size={15} />
                  Intern Mentors
                </div>
              </div>
            </div>
          </div>

          {/* Right: Activity cards */}
          <div className="grid grid-cols-2 gap-4">
            {activities.map((act, i) => {
              const Icon = act.icon
              return (
                <div
                  key={act.title}
                  className="reveal card p-5"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    <Icon size={18} color="#34d399" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{act.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{act.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA banner */}
        <div className="reveal mt-16">
          <div
            className="relative rounded-2xl p-8 md:p-10 overflow-hidden text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(16,185,129,0.1) 100%)',
              border: '1px solid rgba(6,182,212,0.15)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)',
              }}
            />
            <div className="relative">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                Advancing Scientific Literacy in Bangladesh
              </h3>
              <p className="text-slate-400 text-lg mb-6 max-w-2xl mx-auto">
                Together with GNOBB, SPSB, ASI, CHIRAL, and DeepBio — we aim to build a thriving
                research ecosystem in Bangladesh and beyond.
              </p>
              <a
                href="https://github.com/gsabioinfointernship"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Learn More on GitHub
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
