import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'GSA Bioinformatics Internship | GNOBB · SPSB · ASI',
  description:
    'A 6-month hybrid bioinformatics internship by GNOBB, ASI School of Life, and SPSB — nurturing the next generation of bioinformatics researchers in Bangladesh through hands-on training, mentorship, and collaborative research.',
  keywords: [
    'bioinformatics',
    'internship',
    'Bangladesh',
    'GNOBB',
    'SPSB',
    'ASI',
    'DeepBio',
    'CHIRAL',
    'computational biology',
    'life sciences',
    'research',
  ],
  authors: [{ name: 'GSA Bioinformatics Internship Team' }],
  openGraph: {
    title: 'GSA Bioinformatics Internship',
    description:
      'Bridging theoretical education and real-world research in life sciences through bioinformatics, data science, and molecular biology.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSA Bioinformatics Internship',
    description: 'A collaborative bioinformatics internship program — GNOBB · SPSB · ASI',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
