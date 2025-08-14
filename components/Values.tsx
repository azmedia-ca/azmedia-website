'use client'
import { motion } from 'framer-motion'
import { 
  Award, 
  Shield, 
  Lightbulb, 
  HandHeart, 
  Zap, 
  Leaf,
  Heart 
} from 'lucide-react'

const values = [
  { 
    title: 'Quality Excellence', 
    desc: 'Pixel-perfect craft and rigorous reviews ensure every deliverable exceeds expectations.',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  { 
    title: 'Unwavering Integrity', 
    desc: 'Transparency, honesty, and accountability in every client relationship and project.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50'
  },
  { 
    title: 'Bold Innovation', 
    desc: 'Cutting-edge solutions and creative thinking that push boundaries and deliver results.',
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50'
  },
  { 
    title: 'True Partnership', 
    desc: 'Your success is our success. We invest in long-term relationships and mutual growth.',
    icon: HandHeart,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50'
  },
  { 
    title: 'Lightning Speed', 
    desc: 'Agile methodology and focused execution that delivers results without compromising quality.',
    icon: Zap,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50'
  },
  { 
    title: 'Sustainable Growth', 
    desc: 'Future-proof solutions built for scalability, efficiency, and long-term value.',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  }
]

export function Values() {
  return (
    <div className="relative">
      {/* Background decorations */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-200/20 rounded-full blur-3xl -z-10" />
      
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Heart className="w-4 h-4" />
          Our Core Values
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Drives Our
          <span className="block text-brand-600">Excellence</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          These aren't just words on a wall—they're the principles that guide every decision, 
          every project, and every relationship we build.
        </p>
      </div>

      {/* Values grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, i) => {
          const IconComponent = value.icon
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative">
              
              <div className="card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${value.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16">
        <div className="card p-8 bg-gradient-to-r from-brand-50 to-brand-100/50 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the AZ Media Difference?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our values aren't just promises—they're commitments we live by every single day. 
            Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#estimate"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Your Project
              <Award className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-200 text-slate-700 hover:text-brand-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Let's Talk Values
              <Heart className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
