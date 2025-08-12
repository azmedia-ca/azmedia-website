'use client'
import { motion } from 'framer-motion'
import { Megaphone, MonitorSmartphone, Palette } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Marketing',
    desc: 'Campaigns, content, and analytics that drive growth.',
    points: ['Social & content', 'Email & automation', 'Paid media', 'Analytics']
  },
  {
    icon: MonitorSmartphone,
    title: 'Web & Digital Solutions',
    desc: 'High-performance sites and apps with senior-level polish.',
    points: ['Next.js + SEO', 'E‑commerce', 'Integrations', 'Performance']
  },
  {
    icon: Palette,
    title: 'Media & Branding',
    desc: 'Distinctive identities and media that stand out.',
    points: ['Logos & guidelines', 'Motion & video', 'Photography', 'Templates']
  }
]

export function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-6 hover:-translate-y-1 transition">
            <s.icon className="text-brand-700 mb-3" />
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {s.points.map(p => <li key={p}>• {p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
