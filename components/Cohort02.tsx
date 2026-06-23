'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Sparkles, FlaskConical, MapPin } from 'lucide-react'

const interns = [
  {
    name: 'Dhruba Chowdhury',
    photo: '/GSA-C02-Internship/Dhruba_Chowdhury.png',
    institution: 'University of Dhaka',
    focus: 'Multi-Omics · Cancer Subtypes',
    bio:
      'Completed his B.S. and M.S. in Biochemistry & Molecular Biology at the University of Dhaka. Researches integrative multi-omics to characterize cancer subtypes, with a focus on single-cell and spatial transcriptomics for precision medicine.',
    color: 'cyan',
  },
  {
    name: 'Md. Aftabur Rahman',
    photo: '/GSA-C02-Internship/Md.%20Aftabur_Rahman.jpg',
    institution: 'Jahangirnagar University',
    focus: 'Transcriptomics · Drug Discovery',
    bio:
      'Biotechnology & Genetic Engineering undergraduate with research interests in transcriptomics, comparative genomics, computational drug discovery, and vaccine design. Co-author on published biotechnology and immunoinformatics research.',
    color: 'emerald',
  },
  {
    name: 'Tahia Aswad Arony',
    photo: '/GSA-C02-Internship/Arony_Aswad.jpeg',
    institution: 'North South University',
    focus: 'Genomics · Computational Neuroscience',
    bio:
      'Biochemistry & Biotechnology undergraduate interested in bioinformatics, genomics, and computational neuroscience. Contributing to an independent neuroscience project on the biological basis of aesthetic perception through data-driven approaches.',
    color: 'violet',
  },
  {
    name: 'Mahmuda Hoque',
    photo: '/GSA-C02-Internship/Mahmuda_Hoque.jpg',
    institution: 'BRAC University',
    focus: 'AMR · Host–Microbe Interactions',
    bio:
      'M.Sc. Biotechnology student with a background in microbiology and molecular biology. Focuses on antimicrobial resistance, host–microbe interactions, and applying bioinformatics to biomedical research.',
    color: 'cyan',
  },
  {
    name: 'Shreya Tabassum',
    photo: '/GSA-C02-Internship/Shreya_Tabassum.PNG',
    institution: 'BRAC University',
    focus: 'Cancer Bioinformatics · Precision Medicine',
    bio:
      'Biotechnology undergraduate drawn to molecular genetics, metabolic diseases, cancer bioinformatics, and precision medicine — aiming to translate raw biological data into meaningful healthcare solutions.',
    color: 'emerald',
  },
]

const colorMap = {
  cyan: {
    border: 'rgba(6,182,212,0.35)',
    glow: 'rgba(6,182,212,0.15)',
    tag: 'tag-cyan',
    accent: '#22d3ee',
  },
  emerald: {
    border: 'rgba(16,185,129,0.35)',
    glow: 'rgba(16,185,129,0.15)',
    tag: 'tag-green',
    accent: '#34d399',
  },
  violet: {
    border: 'rgba(139,92,246,0.35)',
    glow: 'rgba(139,92,246,0.15)',
    tag: 'tag-purple',
    accent: '#a78bfa',
  },
}

export default function Cohort02() {
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
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cohort-c02" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">
            <Sparkles size={13} />
            Cohort C02 · 2026 · Current
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Meet the <span className="gradient-text">Second Cohort</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Five new researchers selected for the second cohort of the GSA Bioinformatics
            Internship — now beginning six months of hands-on computational biology research.
          </p>
        </div>

        {/* Intern grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interns.map((intern, i) => (
            <InternCard key={intern.name} intern={intern} delay={i * 100} />
          ))}
        </div>

        {/* Bottom stat */}
        <div className="reveal mt-14 text-center">
          <div
            className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl"
            style={{
              background: 'rgba(6,182,212,0.06)',
              border: '1px solid rgba(6,182,212,0.12)',
            }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-cyan">5</div>
              <div className="text-slate-400 text-xs mt-0.5">New Interns</div>
            </div>
            <div className="w-px h-10 bg-cyan-500/20" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-cyan">4</div>
              <div className="text-slate-400 text-xs mt-0.5">Universities</div>
            </div>
            <div className="w-px h-10 bg-cyan-500/20" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-cyan">6</div>
              <div className="text-slate-400 text-xs mt-0.5">Months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InternCard({ intern, delay }: { intern: (typeof interns)[0]; delay: number }) {
  const c = colorMap[intern.color as keyof typeof colorMap]
  return (
    <div
      className="reveal card p-6 flex flex-col items-center text-center group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo */}
      <div
        className="relative w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0"
        style={{
          border: `3px solid ${c.border}`,
          boxShadow: `0 0 28px ${c.glow}`,
        }}
      >
        <Image
          src={intern.photo}
          alt={intern.name}
          fill
          className="object-cover object-top"
          unoptimized
        />
      </div>

      {/* Name */}
      <h3 className="text-white font-bold text-base leading-tight mb-1">{intern.name}</h3>

      {/* Institution */}
      <div className="flex items-center gap-1.5 mb-3 justify-center">
        <MapPin size={11} color="#64748b" />
        <span className="text-slate-500 text-xs">{intern.institution}</span>
      </div>

      {/* Focus tag */}
      <span className={`tag ${c.tag} text-[0.7rem] mb-4`}>
        <FlaskConical size={10} style={{ marginRight: 4 }} />
        {intern.focus}
      </span>

      {/* Bio */}
      <div
        className="rounded-xl p-4 w-full mt-auto"
        style={{
          background: `${c.glow.replace('0.15', '0.06')}`,
          border: `1px solid ${c.border.replace('0.35', '0.12')}`,
        }}
      >
        <p className="text-slate-400 text-xs leading-relaxed">{intern.bio}</p>
      </div>
    </div>
  )
}
