import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Services from '@/components/Services'
import Workshop from '@/components/Workshop'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Workshop />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollRevealInit />
    </>
  )
}
