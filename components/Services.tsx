'use client'
import { motion } from 'framer-motion'
import { Marketing, Development, Design, ArrowRight, CheckCircle } from '@/components/icons/AnimatedIcons'
import { Megaphone } from 'lucide-react'

const services = [
  {
    icon: Marketing,
    title: 'Strategic Marketing',
    desc: 'Data-driven campaigns that amplify your brand and accelerate growth across all channels.',
    points: [
      { name: 'Social Media Strategy', highlight: true },
      { name: 'Content Marketing', highlight: true },
      { name: 'Email Automation', highlight: true },
      { name: 'Paid Advertising', highlight: true },
      { name: 'SEO & Analytics', highlight: true }
    ],
    gradientFrom: 'from-accent-rose',
    gradientTo: 'to-accent-amber',
    bgGradient: 'from-rose-50 to-orange-50',
    iconBg: 'bg-gradient-to-br from-rose-500 to-orange-500',
    accentColor: 'text-rose-600'
  },
  {
    icon: Development,
    title: 'Web & Digital Solutions',
    desc: 'Premium websites and applications engineered for performance, scalability, and results.',
    points: [
      { name: 'Next.js Development', highlight: true },
      { name: 'E-commerce Platforms', highlight: true },
      { name: 'Custom Integrations', highlight: true },
      { name: 'Performance Optimization', highlight: true },
      { name: 'Mobile-First Design', highlight: true }
    ],
    gradientFrom: 'from-accent-emerald',
    gradientTo: 'to-accent-cyan',
    bgGradient: 'from-emerald-50 to-cyan-50',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-cyan-500',
    accentColor: 'text-emerald-600'
  },
  {
    icon: Design,
    title: 'Brand & Creative',
    desc: 'Distinctive visual identities and compelling content that captivate and convert.',
    points: [
      { name: 'Brand Identity Design', highlight: true },
      { name: 'Motion Graphics', highlight: true },
      { name: 'Professional Photography', highlight: true },
      { name: 'Marketing Materials', highlight: true },
      { name: 'Brand Guidelines', highlight: true }
    ],
    gradientFrom: 'from-accent-violet',
    gradientTo: 'to-brand-500',
    bgGradient: 'from-violet-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-violet-500 to-indigo-500',
    accentColor: 'text-violet-600'
  }
]

export function Services() {
  return (
    <div className="relative">
      
      {/* Section header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-700 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
          <Megaphone className="w-4 h-4 text-brand-600" />
          Our Services
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Full-Service Digital{' '}
          <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From strategic marketing to cutting-edge development, we provide comprehensive 
          digital solutions that drive <strong className="text-brand-600">measurable business growth</strong>.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid lg:grid-cols-3 gap-10">
        {services.map((service, i) => {
          const IconComponent = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className="group relative">
              
              <div className="card-premium overflow-hidden h-full transition-all duration-300 hover:shadow-2xl flex flex-col">
                
                {/* Header */}
                <div className={`bg-gradient-to-br ${service.bgGradient} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent animation="pulse" className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>

                {/* Service details */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    {service.points.map((point, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle 
                          animation="pulse" 
                          className={`w-5 h-5 flex-shrink-0 transition-colors ${
                            point.highlight 
                              ? `${service.accentColor}` 
                              : 'text-slate-400'
                          }`} 
                        />
                        <span className={point.highlight 
                          ? 'font-semibold text-slate-900' 
                          : 'text-slate-600'
                        }>
                          {point.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href="#estimate"
                      className={`group/cta inline-flex items-center gap-2 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} hover:shadow-lg text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full justify-center hover:scale-105`}>
                      Get Started
                      <ArrowRight animation="pulse" className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          )
        })}
      </div>

      {/* CTA section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20">
        <div className="card-premium p-10 bg-gradient-to-br from-brand-50 via-white to-brand-100/30 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-brand-200/30 to-brand-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-brand-300/20 to-brand-200/30 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">
              Need a <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Custom Solution?</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every business is unique. Let's discuss how we can create a tailored digital strategy 
              that perfectly fits your <strong className="text-brand-600">goals and budget</strong>.
            </p>
            <a 
              href="#contact"
              className="btn-primary px-8 py-3">
              Schedule a Consultation
              <ArrowRight animation="pulse" className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
