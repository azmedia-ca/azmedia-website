'use client'
import { motion } from 'framer-motion'
import { TimelineDemo } from './myTimeline'
import { CheckCircle, Zap, Target } from 'lucide-react'

export function About() {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Target },
    { label: 'Projects Delivered', value: '320+', icon: CheckCircle },
    { label: 'Client Retention', value: '92%', icon: Zap },
  ]
  
  const highlights = [
    'Strategic brand positioning that drives results',
    'Award-winning creative design and development',
    'Data-driven marketing campaigns with proven ROI',
    'Full-service digital solutions under one roof'
  ]

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-lg font-medium mb-6">
            <Zap className="w-4 h-4" />
            About AZ Media
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Calgary's Most 
            <span className="block text-brand-600">Trusted Digital Partner</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We're not just another agency. We're your strategic partner in digital transformation, 
            combining <strong className="text-slate-800">10+ years of expertise</strong> with cutting-edge innovation 
            to deliver results that matter.
          </p>

          {/* Key highlights */}
          <div className="space-y-4 mb-10">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{highlight}</span>
              </motion.div>
            ))}
          </div>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group">
                  
                  <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-2xl mb-3 group-hover:bg-brand-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand-600" />
                    </div>
                    <div className="text-3xl font-bold text-brand-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-brand-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative">
          
          {/* Premium decoration around timeline */}
          <div className="absolute -inset-6 bg-gradient-to-r from-brand-50/50 to-transparent rounded-3xl" />
          
          <div className="relative">
            <TimelineDemo />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
