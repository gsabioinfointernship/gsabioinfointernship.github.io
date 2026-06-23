import Image from 'next/image'
import { Github, Heart } from 'lucide-react'

const links = {
  Program: [
    { label: 'About', href: '#about' },
    { label: 'Curriculum', href: '#program' },
    { label: 'Cohort C02', href: '#cohort-c02' },
    { label: 'Cohort C01', href: '#cohort' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Bio Camp', href: '#camp' },
  ],
  Organizations: [
    { label: 'GNOBB', href: 'https://gnobb.org', external: true },
    { label: 'SPSB', href: '#', external: false },
    { label: 'ASI School of Life', href: '#', external: false },
    { label: 'CHIRAL Bangladesh', href: '#', external: true },
    { label: 'DeepBio Limited', href: 'https://deepbioltd.com/', external: false },
    { label: 'DeepBio Academy', href: 'https://deepbioacademy.com/', external: false }

  ],
  Resources: [
    { label: 'Onboarding Guide', href: '/onboarding', external: false },
    { label: 'GitHub Organization', href: 'https://github.com/gsabioinfointernship', external: true },
    { label: 'Cohort C01 Projects', href: '#cohort', external: false },
    { label: 'Photo Gallery', href: '#gallery', external: false },
  ],
}

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: 'rgba(3,7,18,0.95)',
        borderTop: '1px solid rgba(6,182,212,0.1)',
      }}
    >
      <div className="container-wide">
        {/* Top: Brand + links */}
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/GSABioinformaticsInternship.png"
                alt="GSA Bioinformatics Internship"
                width={44}
                height={44}
                className="object-contain"
                unoptimized
              />
              <div>
                <div className="text-white font-semibold text-sm">GSA Bioinformatics</div>
                <div className="text-cyan-400 text-xs font-mono">Internship Program</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              A collaborative initiative by GNOBB, ASI School of Life, and SPSB — nurturing the
              next generation of bioinformatics researchers in Bangladesh.
            </p>
            <a
              href="https://github.com/gsabioinfointernship"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              <Github size={16} />
              gsabioinfointernship
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={'external' in item && item.external ? '_blank' : undefined}
                      rel={'external' in item && item.external ? 'noopener noreferrer' : undefined}
                      className="text-slate-500 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-600 text-xs" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} GSA Bioinformatics Internship — GNOBB · SPSB · ASI School of Life.
            All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Developed by{' '}
            <a
              href="https://mdjubayerhossain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:text-cyan-500 transition-colors"
            >
              Md. Jubayer Hossain
            </a>
            <Heart size={11} className="text-cyan-700" />
          </p>
        </div>
      </div>
    </footer>
  )
}
