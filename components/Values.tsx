'use client'
import { motion } from 'framer-motion'

const values = [
  { title: 'Quality', desc: 'Pixel-perfect craft and rigorous reviews.'},
  { title: 'Integrity', desc: 'Clarity, honesty, and accountability.'},
  { title: 'Innovation', desc: 'Curiosity and purposeful exploration.'},
  { title: 'Partnership', desc: 'We succeed when you do.'},
  { title: 'Speed', desc: 'Focused sprints and momentum.'},
  { title: 'Sustainability', desc: 'Efficient, durable solutions.'}
]

export function Values() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Vision & Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="card p-6 hover:-translate-y-1 transition">
            <div className="font-semibold">{v.title}</div>
            <p className="text-sm text-slate-600 mt-1">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
