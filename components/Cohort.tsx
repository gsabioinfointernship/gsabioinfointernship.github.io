'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { GraduationCap, FlaskConical, MapPin } from 'lucide-react'

const interns = [
  {
    name: 'Md. Shakil Ahamed',
    photo: '/GSA-C01-Internship/Interns_Photos/Shakil%20Ahamed.jpeg',
    institution: 'Mawlana Bhashani Science and Technology University',
    project:
      'Bioinformatics Analysis of Transcriptomic Data Reveals Molecular Signatures Driving Colorectal Cancer',
    focus: 'Transcriptomics · Cancer Biology',
    color: 'cyan',
  },
  {
    name: 'Rahnuma Tabassum',
    photo: '/GSA-C01-Internship/Interns_Photos/Rahnuma%20Tabassum.jpg',
    institution: 'Jagannath University',
    project:
      'Integrated Transcriptomic Meta-Analysis Identifies Pathway Crosstalk and Therapeutic Targets in Hepatocellular Carcinoma',
    focus: 'Meta-Analysis · Liver Cancer',
    color: 'emerald',
  },
  {
    name: 'Fayez Ahmad',
    photo: '/GSA-C01-Internship/Interns_Photos/Fayez%20Ahmad.jpg',
    institution: 'Notre Dame College, Dhaka',
    project:
      'Identification of Prognostic Biomarkers in Esophageal Carcinoma through Integrated Bioinformatics Analysis',
    focus: 'Biomarker Discovery · GI Cancer',
    color: 'violet',
  },
  {
    name: 'Sabbir Khan',
    photo: '/GSA-C01-Internship/Interns_Photos/Sabbir%20Khan.png',
    institution: 'Gazipur Agricultural University',
    project:
      'Multi-Omics Meta-Analysis Identifies a Mitotic Signature as a Prognostic and Therapeutic Target in KIRC',
    focus: 'Multi-Omics · Kidney Cancer',
    color: 'cyan',
  },
  {
    name: 'Lamisa Manha Aditee',
    photo: '/GSA-C01-Internship/Interns_Photos/lamisa%20manha.JPG',
    institution: 'BRAC University',
    project:
      'Network-Driven Bioinformatics Approach Uncovers Prognostic Signatures and Therapeutic Targets in Pancreatic Ductal Adenocarcinoma',
    focus: 'Network Biology · Pancreatic Cancer',
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

export default function Cohort() {
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
    <section
      id="cohort"
      className="py-24 lg:py-32 relative"
      style={{ background: 'rgba(6,13,26,0.6)' }}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">
            <GraduationCap size={13} />
            Cohort C01 · 2025
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Meet the <span className="gradient-text">Inaugural Cohort</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Five exceptional researchers who completed the first cohort of the GSA Bioinformatics
            Internship, each conducting independent research on critical biomedical challenges.
          </p>
        </div>

        {/* Intern grid — responsive, all 5 */}
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
              <div className="text-slate-400 text-xs mt-0.5">Interns</div>
            </div>
            <div className="w-px h-10 bg-cyan-500/20" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-cyan">5</div>
              <div className="text-slate-400 text-xs mt-0.5">Research Projects</div>
            </div>
            <div className="w-px h-10 bg-cyan-500/20" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-cyan">5</div>
              <div className="text-slate-400 text-xs mt-0.5">Universities</div>
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

      {/* Project */}
      <div
        className="rounded-xl p-4 w-full mt-auto"
        style={{
          background: `${c.glow.replace('0.15', '0.06')}`,
          border: `1px solid ${c.border.replace('0.35', '0.12')}`,
        }}
      >
        <p className="text-slate-400 text-xs leading-relaxed italic">{intern.project}</p>
      </div>
    </div>
  )
}
