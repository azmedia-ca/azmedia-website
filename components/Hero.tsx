'use client'
import { motion } from 'framer-motion'
import { HeroVideo } from './HeroVideo'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 noise" />
      <div className="container py-28 md:py-36 relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-700 bg-brand-100 rounded-full px-3 py-1">Proudly Canadian • Calgary, AB</span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Design, Media & Tech that <span className="text-brand-700">moves</span> business forward.
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              AZ Media crafts premium brands, engaging campaigns, and high-performance digital products — with senior-level polish.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#estimate" className="btn-primary">Estimate Your Project</a>
              <a href="#services" className="btn-ghost">View Services</a>
            </div>
          </motion.div>
          <div className="mt-2 lg:mt-0">
            <HeroVideo imageSrc="/images/small_logo.png" imageAlt="Media preview" />
          </div>
        </div>
      </div>
    </section>
  )
}
