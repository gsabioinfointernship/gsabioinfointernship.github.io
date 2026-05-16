'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'

const conferencePhotos = [
  'BeautyPlus_20251221120540571_save.jpg',
  'BeautyPlus_20251221193847218_save.jpg',
  'BeautyPlus_20251221195642114_save.jpg',
  'BeautyPlus_20251221195753331_save.jpg',
  'BeautyPlus_20251221200103205_save.jpg',
  'BeautyPlus_20251222025835252_save.jpg',
  'BeautyPlus_20251222030736075_save.jpg',
  'BeautyPlus_20251222081427451_save.jpg',
  '02.jpeg',
  '03.jpeg',
  '04.jpeg',
  '1767082830873.jpg',
  '1767082831323.jpg',
  '20251221_115317.jpg',
  'IMG_20251221_111536.jpg',
  'IMG_20251221_141454.jpg',
  'IMG-20251221-WA0082.jpg',
  'IMG-20251223-WA0264.jpg',
]

const workshopPhotos = [
  '586014144_1143258794688060_5260234424620418716_n.jpg',
  '588212936_1144946691185937_1027922563898163561_n.jpg',
  '588435394_1145362251144381_50358353965836363_n.jpg',
  '590043488_1148609044153035_7553094379091837552_n.jpg',
  '590403272_1148583860822220_1552284265918460223_n.jpg',
  '590966599_1147809134233026_3153957624629663782_n.jpg',
  '591733151_1150111974002742_8665638731691896_n.jpg',
  '595147931_1157049103309029_8999578515046597541_n.jpg',
  '595305071_1156579573355982_4173115806778103108_n.jpg',
  '595344272_1156616466685626_6913002362219957925_n.jpg',
  '596307944_1156605356686737_5020369435879447677_n.jpg',
  '596402145_1156602360020370_3142451241964390097_n.jpg',
  '596407046_1156586270021979_1012057550362351507_n.jpg',
  '597801594_1157878006559472_3007094002852827582_n.jpg',
]

type Tab = 'conference' | 'workshop'

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('conference')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const photos = activeTab === 'conference' ? conferencePhotos : workshopPhotos
  const basePath =
    activeTab === 'conference'
      ? '/GSA-C01-Internship/Conference_Photos/'
      : '/GSA-C01-Internship/Workshop_Photos/'

  const allSrcs = photos.map((f) => `${basePath}${f}`)

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx)
    if (typeof window !== 'undefined') document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIdx(null)
    if (typeof window !== 'undefined') document.body.style.overflow = ''
  }

  const navigate = (dir: 1 | -1) => {
    setLightboxIdx((prev) => {
      if (prev === null) return null
      return (prev + dir + allSrcs.length) % allSrcs.length
    })
  }

  // Header reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIdx, allSrcs.length])

  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 relative"
      style={{ background: 'rgba(6,13,26,0.5)' }}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="section-badge mb-5">
            <Camera size={13} />
            Photo Gallery
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Life Inside the <span className="gradient-text">Internship</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Moments from our inaugural cohort — workshops, conferences, and the collaborative spirit
            that defines the GSA experience.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center mb-10"
          style={{
            opacity: headerVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.15s',
          }}
        >
          <div
            className="flex gap-1 p-1 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {(['conference', 'workshop'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'conference' ? '🎓 Conference' : '🔬 Workshops'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — key forces remount on tab change so CSS animation retriggers */}
        <div key={activeTab} className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((filename, i) => (
            <div
              key={filename}
              className="gallery-item break-inside-avoid"
              style={{
                animation: `galleryFadeIn 0.45s ease forwards`,
                animationDelay: `${i * 35}ms`,
                opacity: 0,
              }}
              onClick={() => openLightbox(i)}
              role="button"
              aria-label={`View photo ${i + 1}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
            >
              <div
                className="relative"
                style={{ paddingBottom: `${58 + (i % 3) * 14}%` }}
              >
                <Image
                  src={`${basePath}${filename}`}
                  alt={`${activeTab === 'conference' ? 'Conference' : 'Workshop'} photo ${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm font-mono">
            {photos.length} photos &middot; click to expand
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.93)' }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-cyan-400 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-white hover:text-cyan-400 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-white hover:text-cyan-400 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="relative w-full max-w-5xl mx-20 flex items-center justify-center"
            style={{ maxHeight: '88vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={allSrcs[lightboxIdx]}
              alt="Gallery photo"
              style={{
                maxWidth: '100%',
                maxHeight: '88vh',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-400 text-xs font-mono bg-black/50 px-3 py-1 rounded-full">
              {lightboxIdx + 1} / {allSrcs.length}
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
