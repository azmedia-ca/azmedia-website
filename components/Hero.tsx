'use client'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { ThreeDMarqueeDemo } from './3dMarquee'
import { ArrowRight, Star, Award, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
      <div className="absolute inset-0 noise" />
      
      {/* Floating elements for premium feel */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-200/30 rounded-full blur-3xl" />
      
      <div className="container py-16 md:py-24 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
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
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
                style={{ width: '25%', height: 'auto' }}
              />
            </motion.div>

            {/* Enhanced headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-7xl font-bold leading-tight mb-6">
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
              className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              We're Calgary's premier digital agency, transforming ambitious brands through 
              <strong className="text-slate-800"> strategic design, cutting-edge development</strong>, and 
              <strong className="text-slate-800"> data-driven marketing</strong> that delivers measurable results.
            </motion.p>

            {/* Social proof stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">320+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">92%</div>
                <div className="text-sm text-slate-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">10+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#estimate" 
                className="group relative overflow-hidden bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Your Free Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#portfolio" 
                className="group bg-white/80 backdrop-blur hover:bg-white border border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2">
                View Our Work
                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative">
            
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
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg border border-brand-200/50">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5 text-brand-600" />
                <span className="font-medium">Award Winning</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg border border-brand-200/50">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-medium">ROI Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
