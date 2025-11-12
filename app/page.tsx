import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
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
      <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-50/30">
        <div className="container">
          <About />
        </div>
      </section>
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="container">
          <Features />
        </div>
      </section>


      <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-white via-brand-50/20 to-accent-violet/5 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-accent-rose/10 to-accent-amber/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent-emerald/10 to-accent-cyan/10 rounded-full blur-3xl"></div>
        <div className="container relative z-10">
          <Services />
        </div>
      </section>
      <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-white to-accent-emerald/5">
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section id="values" className="py-20 md:py-32 bg-gradient-to-br from-accent-emerald/5 via-brand-50/40 to-accent-violet/5 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-brand-200/20 to-accent-violet/15 rounded-full blur-3xl"></div>
        <div className="container relative z-10">
          <Values />
        </div>
      </section>
      <section id="clients" className="py-20 md:py-32 bg-gradient-to-b from-accent-violet/5 to-white">
        <div className="container">
          <Clients />
        </div>
      </section>
      <section id="estimate" className="py-20 md:py-32 bg-gradient-to-br from-brand-50/60 via-accent-cyan/5 to-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-brand-300/20 to-accent-violet/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-accent-emerald/15 to-accent-cyan/20 rounded-full blur-3xl"></div>
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full animate-pulse" />
              Get Instant Quote Estimate
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Get Your Custom Quote{' '}
              <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                In Under 3 Minutes
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and get an instant, detailed estimate. No hidden fees, 
              no surprises—just <strong className="text-brand-600">transparent pricing</strong> for premium digital solutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Estimator />
          </div>
        </div>
      </section>
      <CTA />
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-brand-50/40 via-accent-violet/5 to-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-brand-200/20 to-accent-rose/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-br from-accent-violet/10 to-brand-300/15 rounded-full blur-3xl"></div>
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full animate-pulse" />
              Let's Start the Conversation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform{' '}
              <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                Your Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your vision, and we'll show you how to make it reality. 
              Get a response from our team <strong className="text-brand-600">within 24 hours</strong>.
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
