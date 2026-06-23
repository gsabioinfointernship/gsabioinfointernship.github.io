import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'GSA Bioinformatics Internship — Cohort 02'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#030712',
          padding: '64px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(6,182,212,0.18) 0%, rgba(16,185,129,0.10) 40%, transparent 70%)',
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Org badges */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 64,
            display: 'flex',
            gap: 10,
          }}
        >
          {['GNOBB', 'SPSB', 'ASI School of Life'].map((org) => (
            <div
              key={org}
              style={{
                padding: '6px 14px',
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                color: '#94a3b8',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
              }}
            >
              {org}
            </div>
          ))}
        </div>

        {/* Cohort badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 20,
            padding: '6px 16px',
            borderRadius: 20,
            background: 'rgba(6,182,212,0.12)',
            border: '1px solid rgba(6,182,212,0.3)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#10b981',
              display: 'flex',
            }}
          />
          <span style={{ color: '#34d399', fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>
            COHORT 02 — APPLICATIONS OPEN
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span style={{ color: '#ffffff' }}>GSA Bioinformatics</span>
          <span
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #10b981)',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Internship Program
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: '#94a3b8',
            marginBottom: 36,
            maxWidth: 700,
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          6-month hybrid program · Hands-on research · Expert mentorship · Dhaka, Bangladesh
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div
            style={{
              padding: '12px 28px',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #059669, #06b6d4)',
              color: '#ffffff',
              fontSize: 18,
              fontWeight: 700,
              display: 'flex',
            }}
          >
            Cohort 02 — Now Underway
          </div>
          <span style={{ color: '#475569', fontSize: 16, display: 'flex' }}>
            gsabioinfointernship.github.io
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
