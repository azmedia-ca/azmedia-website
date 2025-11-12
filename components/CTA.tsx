'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Award } from '@/components/icons/AnimatedIcons'
import { Clock } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.2),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-brand-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center">
          
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles animation="pulse" className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Ready to Transform Your Business?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Build Something
            <span className="block bg-gradient-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          
          <p className="text-lg text-brand-100 leading-relaxed mb-12 max-w-3xl mx-auto">
            Join Calgary's most successful businesses who trust AZ Media to deliver 
            <strong className="text-white"> premium digital solutions</strong> that drive real results. 
            Your success story starts here.
          </p>

          {/* Enhanced feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Award, title: 'Award-Winning Team', desc: '10+ years of proven excellence' },
              { icon: Clock, title: 'Rapid Delivery', desc: 'Projects completed on time, every time' },
              { icon: Sparkles, title: 'Premium Quality', desc: 'Enterprise-grade solutions for all clients' }
            ].map((feature, i) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur rounded-2xl mb-4">
                    <IconComponent animation="pulse" className="w-8 h-8 text-brand-300" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-brand-200 text-sm">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              href="#estimate"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white hover:bg-brand-50 text-brand-900 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-2xl inline-flex items-center justify-center gap-3">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3">
                Get Your Free Estimate
                <ArrowRight animation="pulse" className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-3">
              Let's Talk Strategy
              <ArrowRight animation="pulse" className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

         
        </motion.div>
      </div>
    </section>
  )
}
