'use client'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { ThreeDMarqueeDemo } from './3dMarquee'
import { ArrowRight, Star, Award, TrendingUp } from '@/components/icons/AnimatedIcons'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
      <div className="absolute inset-0 noise" />
      
      {/* Floating elements for premium feel */}
      <div className="absolute top-10 left-4 w-24 h-24 bg-brand-100/20 rounded-full blur-3xl hidden sm:block md:top-20 md:left-10 md:w-32 md:h-32" />
      <div className="absolute bottom-10 right-4 w-28 h-28 bg-brand-200/30 rounded-full blur-3xl hidden sm:block md:bottom-20 md:right-10 md:w-40 md:h-40" />
      
      <div className="container py-12 sm:py-16 md:py-24 relative">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl self-start text-left">
            
            {/* Premium badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-brand-200/50 rounded-full px-4 py-2 mb-6">
              <div className="flex items-center gap-1">
                <Star animation="pulse" className="w-4 h-4 text-yellow-500 fill-current" />
                <Star animation="pulse" className="w-4 h-4 text-yellow-500 fill-current" />
                <Star animation="pulse" className="w-4 h-4 text-yellow-500 fill-current" />
                <Star animation="pulse" className="w-4 h-4 text-yellow-500 fill-current" />
                <Star animation="pulse" className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <span className="text-sm font-medium text-slate-700">Proudly Calgary-based • 5-star rated</span>
            </motion.div>

            {/* Logo with better positioning */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6">
              <NextImage
                src="/images/small_logo.png"
                alt="AZ Media - Calgary's Premier Digital Agency"
                width={200}
                height={200}
                className="rounded-xl w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
              />
            </motion.div>

            {/* Enhanced headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
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
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              We're Calgary's premier digital agency, transforming ambitious brands through 
              <strong className="text-slate-800"> strategic design, cutting-edge development</strong>, and 
              <strong className="text-slate-800"> data-driven marketing</strong> that delivers measurable results.
            </motion.p>

            {/* Social proof stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8">
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-brand-600">320+</div>
                <div className="text-xs text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-brand-600">92%</div>
                <div className="text-xs text-slate-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-brand-600">10+</div>
                <div className="text-xs text-slate-600">Years Experience</div>
              </div>
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="#estimate" 
                className="group relative overflow-hidden bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Your Free Estimate
                  <ArrowRight animation="pulse" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#portfolio" 
                className="group bg-white/80 backdrop-blur hover:bg-white border border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm">
                View Our Work
                <TrendingUp animation="pulse" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative">
            
            {/* Premium decoration around 3D element */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-brand-400/20 via-transparent to-brand-600/20 rounded-3xl blur-xl sm:blur-2xl" />
            
            <div className="relative">
              <ThreeDMarqueeDemo />
            </div>
            
            {/* Floating achievement badges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/90 backdrop-blur rounded-2xl p-2 shadow-lg border border-brand-200/50 hidden md:block">
              <div className="flex items-center gap-2 text-sm">
                <Award animation="pulse" className="w-5 h-5 text-brand-600" />
                <span className="font-medium">Award Winning</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/90 backdrop-blur rounded-2xl p-2  shadow-lg border border-brand-200/50 hidden md:block">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp animation="pulse" className="w-5 h-5 text-green-600" />
                <span className="antialiased">ROI Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
