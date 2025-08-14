'use client'
import { motion } from 'framer-motion'
import { Building2, Users, Star, TrendingUp } from 'lucide-react'

const clients = [
  { name: 'TechFlow Solutions', industry: 'Technology', logo: 'TF' },
  { name: 'Bella Vista Restaurant', industry: 'Hospitality', logo: 'BV' },
  { name: 'Mountain Gear Co.', industry: 'E-commerce', logo: 'MG' },
  { name: 'Calgary Medical Center', industry: 'Healthcare', logo: 'CM' },
  { name: 'Alpine Construction', industry: 'Construction', logo: 'AC' },
  { name: 'Northstar Consulting', industry: 'Professional Services', logo: 'NS' },
  { name: 'Prairie Energy Ltd.', industry: 'Energy', logo: 'PE' },
  { name: 'Riverstone Capital', industry: 'Finance', logo: 'RC' }
]

const testimonials = [
  {
    quote: "AZ Media transformed our entire digital presence. ROI increased 340% in 6 months.",
    author: "Sarah Chen",
    position: "CEO, TechFlow Solutions",
    avatar: "SC"
  },
  {
    quote: "From empty tables to fully booked weekends. Their marketing strategy is exceptional.",
    author: "Marco Rossi",
    position: "Owner, Bella Vista Restaurant", 
    avatar: "MR"
  },
  {
    quote: "The e-commerce platform they built scaled perfectly with our rapid growth.",
    author: "David Kim",
    position: "Founder, Mountain Gear Co.",
    avatar: "DK"
  }
]

const stats = [
  { number: '50+', label: 'Happy Clients', icon: Building2 },
  { number: '98%', label: 'Satisfaction Rate', icon: Star },
  { number: '320+', label: 'Projects Delivered', icon: TrendingUp },
  { number: '10+', label: 'Years Experience', icon: Users }
]

export function Clients() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl -z-10" />
      
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Building2 className="w-4 h-4" />
          Client Success Stories
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by Calgary's
          <span className="block text-brand-600">Leading Businesses</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          From startups to established enterprises, we've helped businesses across 
          Calgary achieve remarkable digital transformation and growth.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => {
          const IconComponent = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 group-hover:bg-brand-200 rounded-2xl mb-3 transition-colors">
                <IconComponent className="w-6 h-6 text-brand-600" />
              </div>
              <div className="text-3xl font-bold text-brand-600 mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          )
        })}
      </div>

      {/* Client logos marquee */}
      <div className="card p-8 mb-16 overflow-hidden">
        <h3 className="text-xl font-semibold text-center mb-8">Proudly Serving Calgary Businesses</h3>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="flex gap-12 py-4 whitespace-nowrap">
              {[...clients, ...clients].map((client, i) => (
                <div key={i} className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm">
                    {client.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{client.name}</div>
                    <div className="text-xs text-slate-500">{client.industry}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group">
            
            <div className="card p-8 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-slate-700 mb-6 leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16">
        <div className="card p-8 bg-gradient-to-r from-brand-50 to-brand-100/50">
          <h3 className="text-2xl font-bold mb-4">Join Calgary's Most Successful Businesses</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Ready to achieve the same remarkable results? Let's discuss how we can transform 
            your digital presence and drive unprecedented growth.
          </p>
          <a 
            href="#estimate"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Start Your Success Story
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  )
}
