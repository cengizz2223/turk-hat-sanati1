import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import Etkinlikler   from '@/components/Etkinlikler'
import Egitmenler    from '@/components/Egitmenler'
import Paydashlar    from '@/components/Paydashlar'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Etkinlikler />
        <Egitmenler />
        <Paydashlar />
        <Contact />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  )
}
