'use client'

import { useState } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'

const APPLY_URL = 'https://forms.gle/uReie9GcAUeYbzsY8'

export default function ApplyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      className="relative z-[60] flex flex-wrap items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium"
      style={{
        background: 'linear-gradient(90deg, #0e7490 0%, #059669 50%, #7c3aed 100%)',
      }}
    >
      {/* Shimmer — uses global CSS class, no inline <style> */}
      <div className="shimmer-banner absolute inset-0 pointer-events-none" aria-hidden />

      <Sparkles size={14} className="text-yellow-300 flex-shrink-0 relative hidden sm:block" />

      <span className="text-white relative text-xs sm:text-sm text-center">
        <span className="font-bold text-yellow-200">GSA Cohort 02 is now open!</span>
        <span className="hidden sm:inline"> Applications are live — join the next generation of bioinformatics researchers.</span>
      </span>

      <a
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex-shrink-0 inline-flex items-center gap-1.5 bg-white text-emerald-700 font-bold px-3 py-1 rounded-full text-xs hover:bg-yellow-100 transition-colors shadow-md"
      >
        Apply Now
        <ArrowRight size={12} />
      </a>

      <button
        onClick={() => setDismissed(true)}
        className="relative text-white/70 hover:text-white transition-colors flex-shrink-0"
        aria-label="Dismiss announcement"
      >
        <X size={15} />
      </button>
    </div>
  )
}
