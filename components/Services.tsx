'use client'
import { motion } from 'framer-motion'
import { Megaphone, MonitorSmartphone, Palette, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Strategic Marketing',
    desc: 'Data-driven campaigns that amplify your brand and accelerate growth across all channels.',
    points: [
      { name: 'Social Media Strategy', highlight: true },
      { name: 'Content Marketing', highlight: false },
      { name: 'Email Automation', highlight: false },
      { name: 'Paid Advertising', highlight: true },
      { name: 'SEO & Analytics', highlight: false }
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    featured: false,
    price: 'From $2,500/mo'
  },
  {
    icon: MonitorSmartphone,
    title: 'Web & Digital Solutions',
    desc: 'Premium websites and applications engineered for performance, scalability, and results.',
    points: [
      { name: 'Next.js Development', highlight: true },
      { name: 'E-commerce Platforms', highlight: true },
      { name: 'Custom Integrations', highlight: false },
      { name: 'Performance Optimization', highlight: false },
      { name: 'Mobile-First Design', highlight: false }
    ],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
    featured: true,
    price: 'From $5,000'
  },
  {
    icon: Palette,
    title: 'Brand & Creative',
    desc: 'Distinctive visual identities and compelling content that captivate and convert.',
    points: [
      { name: 'Brand Identity Design', highlight: true },
      { name: 'Motion Graphics', highlight: false },
      { name: 'Professional Photography', highlight: false },
      { name: 'Marketing Materials', highlight: false },
      { name: 'Brand Guidelines', highlight: true }
    ],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
    featured: false,
    price: 'From $3,000'
  }
]

export function Services() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl -z-10" />
      
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Megaphone className="w-4 h-4" />
          Our Services
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Full-Service Digital 
          <span className="block text-brand-600">Excellence</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          From strategic marketing to cutting-edge development, we provide comprehensive 
          digital solutions that drive measurable business growth.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const IconComponent = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative">
              
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`card overflow-hidden h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 ${
                service.featured ? 'ring-2 ring-brand-200 shadow-xl' : ''
              }`}>
                
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${service.bgColor} p-8 relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-4 text-white`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{service.desc}</p>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                  <div className="absolute bottom-4 right-8 w-8 h-8 bg-white/30 rounded-full blur-lg" />
                </div>

                {/* Service details */}
                <div className="p-8">
                  <div className="space-y-3 mb-8">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                          point.highlight ? 'text-brand-600' : 'text-slate-400'
                        }`} />
                        <span className={point.highlight ? 'font-medium text-slate-900' : 'text-slate-600'}>
                          {point.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">{service.price}</div>
                    <a
                      href="#estimate"
                      className="group/cta inline-flex items-center gap-2 bg-slate-900 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className={`h-1 bg-gradient-to-r ${service.color}`} />
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          )
        })}
      </div>

      {/* CTA section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16">
        <div className="card p-8 bg-gradient-to-r from-brand-50 to-brand-100/50">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored digital strategy 
            that perfectly fits your goals and budget.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  )
}
