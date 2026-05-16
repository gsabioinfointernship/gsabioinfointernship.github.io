import Hero from '@/components/Hero'
import About from '@/components/About'
import Organizations from '@/components/Organizations'
import ProgramHighlights from '@/components/ProgramHighlights'
import Labs from '@/components/Labs'
import Apply from '@/components/Apply'
import Cohort from '@/components/Cohort'
import Mentors from '@/components/Mentors'
import Gallery from '@/components/Gallery'
import Camp from '@/components/Camp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Organizations />
      <ProgramHighlights />
      <Labs />
      <Apply />
      <Cohort />
      <Mentors />
      <Gallery />
      <Camp />
      <Footer />
    </main>
  )
}
