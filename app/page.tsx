import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Organizations from '@/components/Organizations'
import ProgramHighlights from '@/components/ProgramHighlights'
import Apply from '@/components/Apply'
import Cohort from '@/components/Cohort'
import Mentors from '@/components/Mentors'
import Gallery from '@/components/Gallery'
import Camp from '@/components/Camp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Organizations />
      <ProgramHighlights />
      <Apply />
      <Cohort />
      <Mentors />
      <Gallery />
      <Camp />
      <Footer />
    </main>
  )
}
