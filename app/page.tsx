import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Footprint } from '@/components/Footprint'
import { Services } from '@/components/Services'
import { Values } from '@/components/Values'
import { Clients } from '@/components/Clients'
import { Estimator } from '@/components/Estimator/Estimator'
import { ContactForm } from '@/components/ContactForm'
import { CTA } from '@/components/CTA'
import { Features } from '@/components/Features'

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <section id="about" className="py-24">
        <div className="container">
          <About />
        </div>
      </section>
      <section id="about" className="py-24">
        <div className="container">
          <Features />
        </div>
      </section>


      <section id="footprint" className="py-24 ">
        <div className="container">
          <Footprint />
        </div>
      </section>
      <section id="services" className="py-24">
        <div className="container">
          <Services />
        </div>
      </section>
      <section id="values" className="py-24 bg-brand-50/60">
        <div className="container">
          <Values />
        </div>
      </section>
      <section id="clients" className="py-24">
        <div className="container">
          <Clients />
        </div>
      </section>
      <section id="estimate" className="py-24 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container">
          <Estimator />
        </div>
      </section>
      <CTA />
      <section id="contact" className="py-24 bg-brand-50/40">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
