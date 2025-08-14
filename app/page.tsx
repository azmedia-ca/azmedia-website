import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Footprint } from '@/components/Footprint'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
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
      <section id="portfolio" className="py-24 bg-white">
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section id="values" className="py-24 bg-brand-50/30">
        <div className="container">
          <Values />
        </div>
      </section>
      <section id="clients" className="py-24">
        <div className="container">
          <Clients />
        </div>
      </section>
      <section id="estimate" className="py-24 bg-gradient-to-b from-brand-50/60 to-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl -z-10" />
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Free Project Estimate
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Custom Quote
              <span className="block text-brand-600">In Under 3 Minutes</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tell us about your project and get an instant, detailed estimate. No hidden fees, 
              no surprises—just transparent pricing for premium digital solutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Estimator />
          </div>
        </div>
      </section>
      <CTA />
      <section id="contact" className="py-24 bg-brand-50/40 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl -z-10" />
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Let's Start the Conversation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform
              <span className="block text-brand-600">Your Digital Presence?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tell us about your vision, and we'll show you how to make it reality. 
              Get a response from our team within 24 hours.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
