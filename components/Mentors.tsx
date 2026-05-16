'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Microscope, Mail, Globe } from 'lucide-react'

const mentors = [
  {
    name: 'Md. Jubayer Hossain',
    photo: '/people/jubayer.jpg',
    title: 'Program Lead',
    org: 'DeepBio Limited',
    orgColor: '#f59e0b',
    bio: 'A bioinformatician and educator who founded DeepBio Limited and CHIRAL Bangladesh to advance bioinformatics research and training. His work spans genomics, transcriptomics, and cancer bioinformatics, with a focus on making research skills accessible to all.',
    expertise: ['Bioinformatics Education', 'Cancer Genomics', 'R Programming', 'Transcriptomics'],
    links: { web: 'https://mdjubayerhossain.com' },
    color: 'cyan',
  },
  {
    name: 'Dr. Zeba I. Seraj',
    photo: '/people/Zeba-I-Seraj-Ph-D.jpg',
    title: 'Supervisor',
    org: 'GNOBB',
    orgColor: '#06b6d4',
    bio: "An internationally recognized plant biotechnologist and molecular biologist with decades of experience in genomics, stress biology, and scientific capacity building across South Asia. A driving force behind GNOBB's educational mission.",
    expertise: ['Plant Biotechnology', 'Molecular Biology', 'Genomics', 'Stress Biology'],
    links: {},
    color: 'emerald',
  },
  {
    name: 'Md. Muhibullah Shahjahan',
    photo: '/people/muhib.jpg',
    title: 'Program Coordinator',
    org: 'DeepBio Limited',
    orgColor: '#ec4899',
    bio: 'A dedicated bioinformatics researcher and trainer contributing industry expertise and data science skills to the internship. Guides interns through real-world research workflows and computational biology best practices.',
    expertise: ['Machine Learning', 'Multi-Omics', 'Data Science', 'Biomarker Analysis'],
    links: {},
    color: 'violet',
  },
]

const colorMap = {
  cyan: {
    border: 'rgba(6,182,212,0.3)',
    glow: 'rgba(6,182,212,0.12)',
    accent: '#22d3ee',
    tagBg: 'rgba(6,182,212,0.1)',
    tagBorder: 'rgba(6,182,212,0.2)',
    tagColor: '#67e8f9',
  },
  emerald: {
    border: 'rgba(16,185,129,0.3)',
    glow: 'rgba(16,185,129,0.12)',
    accent: '#34d399',
    tagBg: 'rgba(16,185,129,0.1)',
    tagBorder: 'rgba(16,185,129,0.2)',
    tagColor: '#6ee7b7',
  },
  violet: {
    border: 'rgba(139,92,246,0.3)',
    glow: 'rgba(139,92,246,0.12)',
    accent: '#a78bfa',
    tagBg: 'rgba(139,92,246,0.1)',
    tagBorder: 'rgba(139,92,246,0.2)',
    tagColor: '#c4b5fd',
  },
}

export default function Mentors() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
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
    <section id="mentors" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      {/* Glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, rgba(16,185,129,0.04) 50%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container-wide relative">
        <div className="text-center mb-14 reveal">
          <div className="section-badge mb-5">
            <Microscope size={13} />
            Core Trainers &amp; Mentors
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Guided by <span className="gradient-text">Active Researchers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Researchers from DeepBio Limited and Big Bioinformatics Lab, CHIRAL Bangladesh serve as
            core trainers and research mentors throughout the internship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => {
            const c = colorMap[mentor.color as keyof typeof colorMap]
            return (
              <div
                key={mentor.name}
                className="reveal card p-7 flex flex-col group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Photo */}
                <div className="flex justify-center mb-5">
                  <div
                    className="relative w-40 h-40 rounded-2xl overflow-hidden"
                    style={{
                      border: `2px solid ${c.border}`,
                      boxShadow: `0 8px 30px ${c.glow}`,
                    }}
                  >
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Name & title */}
                <div className="text-center mb-4">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2">{mentor.title}</p>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${mentor.orgColor}18`,
                      border: `1px solid ${mentor.orgColor}35`,
                      color: mentor.orgColor,
                    }}
                  >
                    {mentor.org}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 text-center flex-1">
                  {mentor.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-[0.68rem] px-2.5 py-0.5 rounded-full"
                      style={{
                        background: c.tagBg,
                        border: `1px solid ${c.tagBorder}`,
                        color: c.tagColor,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {mentor.links.web && (
                  <div className="flex justify-center">
                    <a
                      href={mentor.links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
                    >
                      <Globe size={13} />
                      {mentor.links.web.replace('https://', '')}
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
