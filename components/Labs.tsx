'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Monitor, Zap, Wifi, Server } from 'lucide-react'

const specs = [
  {
    icon: Monitor,
    label: 'Dedicated Workstations',
    desc: 'High-performance desktop PCs purpose-built for bioinformatics analysis, multi-omics pipelines, and data-intensive research.',
    color: '#06b6d4',
  },
  {
    icon: Zap,
    label: 'Uninterrupted Power',
    desc: 'EcoFlow backup power station ensures zero downtime — long compute runs and analyses never interrupted by power outages.',
    color: '#10b981',
  },
  {
    icon: Wifi,
    label: 'Connected Research Hub',
    desc: 'Fully networked lab environment at MasLab, Dhaka — optimized for collaborative research and remote data access.',
    color: '#8b5cf6',
  },
  {
    icon: Server,
    label: 'GNOBB·ASI Bioinformatics Hub',
    desc: 'Official hub jointly established by GNOBB and ASI School of Life at SPSB — a dedicated space for computational life science.',
    color: '#f59e0b',
  },
]

export default function Labs() {
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
      id="lab"
      className="py-24 lg:py-32 relative"
      style={{ background: 'rgba(6,13,26,0.5)' }}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-badge mb-5">
            <Monitor size={13} />
            Lab Infrastructure
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Built to <span className="gradient-text">Do Real Research</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interns work in a professional, fully-equipped bioinformatics hub — dedicated hardware,
            reliable power, and a collaborative lab environment in Dhaka.
          </p>
        </div>

        {/* Photos */}
        <div className="grid md:grid-cols-2 gap-6 mb-14 reveal">
          {/* Workstation — primary */}
          <div
            className="relative rounded-2xl overflow-hidden group"
            style={{ border: '1px solid rgba(6,182,212,0.15)' }}
          >
            <div className="relative aspect-video">
              <Image
                src="/labs/workstation.png"
                alt="GNOBB·ASI Bioinformatics Hub at SPSB"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(3,7,18,0.85) 0%, transparent 50%)' }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono mb-2"
                style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}
              >
                GNOBB · ASI Bioinformatics Hub at SPSB
              </div>
              <p className="text-white font-semibold text-sm">Research Workstations</p>
              <p className="text-slate-400 text-xs mt-0.5">High-performance desktops · MasLab, Dhaka</p>
            </div>
          </div>

          {/* Power station */}
          <div
            className="relative rounded-2xl overflow-hidden group flex flex-col"
            style={{ border: '1px solid rgba(16,185,129,0.15)', background: 'rgba(16,185,129,0.04)' }}
          >
            <div className="flex-1 flex items-center justify-center p-10">
              <div className="relative w-52 h-52">
                <Image
                  src="/labs/power_station.jpeg"
                  alt="EcoFlow Power Station"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </div>
            <div
              className="p-5"
              style={{ borderTop: '1px solid rgba(16,185,129,0.15)' }}
            >
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono mb-2"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399' }}
              >
                <Zap size={11} />
                Backup Power Supply
              </div>
              <p className="text-white font-semibold text-sm">EcoFlow Power Station</p>
              <p className="text-slate-400 text-xs mt-0.5">Continuous operation · No downtime during analyses</p>
            </div>
          </div>
        </div>

        {/* Spec cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specs.map((spec, i) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.label}
                className="reveal card p-5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${spec.color}15`, border: `1px solid ${spec.color}30` }}
                >
                  <Icon size={18} color={spec.color} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{spec.label}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{spec.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
