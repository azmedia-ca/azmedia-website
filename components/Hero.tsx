'use client'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { ThreeDMarqueeDemo } from './3dMarquee'
import { ArrowRight, Award, TrendingUp } from '@/components/icons/AnimatedIcons'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
      <div className="absolute inset-0 noise" />
      
      {/* Floating elements for premium feel */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-brand-100/20 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-brand-200/30 rounded-full blur-3xl floating-element" />
      
      <div className="container py-8 sm:py-12 md:py-16 lg:py-24 relative">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl self-start text-left order-2 lg:order-1">
            
            

            {/* Logo with better positioning */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 sm:mb-6">
              <NextImage
                src="/images/small_logo.png"
                alt="AZ Media - Calgary's Premier Digital Agency"
                width={500}
                height={500}
                className="rounded-xl "
                style={{ width: 'clamp(80px, 25%, 120px)', height: 'auto' }}
              />
            </motion.div>

            {/* Enhanced headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Where Creativity Meets{' '}
              <span className="relative">
                <span className="text-brand-600">Results</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Enhanced description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              We're Calgary's premier digital agency, transforming ambitious brands through 
              <strong className="text-slate-800"> strategic design, cutting-edge development</strong>, and 
              <strong className="text-slate-800"> data-driven marketing</strong> that delivers measurable results.
            </motion.p>

           

            {/* Enhanced CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="#estimate" 
                className="group relative overflow-hidden bg-brand-600 hover:bg-brand-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Instant Quote
                  <ArrowRight animation="pulse" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#portfolio" 
                className="group bg-white/80 backdrop-blur hover:bg-white border border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm">
                View Our Work
                <TrendingUp animation="pulse" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2">
            
            {/* Premium decoration around 3D element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-400/20 via-transparent to-brand-600/20 rounded-3xl blur-2xl" />
            
            <div className="relative">
              <ThreeDMarqueeDemo />
            </div>
            
            {/* Floating achievement badges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white/90 backdrop-blur rounded-2xl p-2 sm:p-3 shadow-lg border border-brand-200/50">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <Award animation="pulse" className="w-4 h-4 sm:w-5 sm:h-5 text-brand-600" />
                <span className="font-medium">Quality Guaranteed</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white/90 backdrop-blur rounded-2xl p-2 sm:p-3 shadow-lg border border-brand-200/50">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <TrendingUp animation="pulse" className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="font-medium">ROI Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
