'use client'
import { motion } from 'framer-motion'
import { TimelineDemo } from './myTimeline'

export function About() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Delivered', value: '320+' },
    { label: 'Client Retention', value: '92%' },
  ]
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">About AZ Media</h2>
        <p className="mt-4 text-slate-600">
          We’re a Calgary-based team blending strategy, design, media, and modern engineering. Our work is
          clean, performant, and crafted with intention — every interaction earns trust.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card p-4 text-center">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-slate-600">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <TimelineDemo />
      
    </div>
  )
}
