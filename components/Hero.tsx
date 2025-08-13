'use client'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { ThreeDMarqueeDemo } from './3dMarquee'


export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 noise" />
      <div className="container py-10 md:py-16 relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="hero-text"
            className="max-w-3xl self-start text-left">
            <span className="inline-block text-xs antialiased  tracking-widest  text-brand-800 bg-brand-100 rounded-full px-3 py-1">Proudly Calgary-based</span>


            <NextImage
                src="/images/small_logo.png"
                alt="AZMedia"
                width={500}
                height={500}
                className="rounded-lg block selft-start"
                style={{ width: '30%', height: 'auto' }}
              />

            <h2 className="mt-6 text-3xl  md:text-6xl font-bold space-y-28 leading-relaxed ">
              Where Creativity Meets  <span className="text-brand-500">Results</span>
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              AZ Media is a Calgary-based media and advertising agency that delivers high-quality digital products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#estimate" className="btn-primary">Estimate Your Project</a>
              <a href="#services" className="btn-ghost">View Services</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl self-start">
            <ThreeDMarqueeDemo />
          </motion.div>

          {/* <div className="mt-2 justify-self-center lg:mt-0 lg:justify-self-auto"> */}
          
            {/* <HeroVideo imageSrc="/images/small_logo.png" imageAlt="Media preview" /> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
