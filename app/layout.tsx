import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gsabioinfointernship.github.io'),
  title: {
    default: 'GSA Bioinformatics Internship — Training the Next Generation of Computational Biologists in Bangladesh',
    template: '%s | GSA Bioinformatics Internship',
  },
  description:
    'GSA Bioinformatics Internship — a 6-month hybrid program in Bangladesh by GNOBB, ASI School of Life, and SPSB. Meet our Cohort 02 interns. Hands-on training, expert mentorship, and publication-ready research.',
  keywords: [
    'bioinformatics internship Bangladesh',
    'GSA bioinformatics',
    'GNOBB internship',
    'computational biology training',
    'bioinformatics cohort 2025',
    'CHIRAL Bangladesh',
    'DeepBio',
    'life sciences research Bangladesh',
    'genomics internship',
    'transcriptomics training',
  ],
  authors: [{ name: 'GSA Bioinformatics Internship Team' }],
  openGraph: {
    title: 'GSA Bioinformatics Internship — Cohort 02',
    description:
      'A 6-month hybrid bioinformatics internship in Bangladesh. Hands-on research, expert mentorship from CHIRAL Bangladesh & DeepBio, and publication-ready projects. Meet our Cohort 02 interns.',
    type: 'website',
    locale: 'en_US',
    url: 'https://gsabioinfointernship.github.io',
    siteName: 'GSA Bioinformatics Internship',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSA Bioinformatics Internship — Cohort 02',
    description: '6-month hybrid bioinformatics internship in Bangladesh. Meet our Cohort 02 interns — GNOBB · SPSB · ASI',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
