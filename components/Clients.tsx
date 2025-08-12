'use client'
import { motion } from 'framer-motion'

const clients = ['Acme Co','Northpeak','Polar Labs','Riverwave','SummitX','Skyline']

export function Clients() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Our Clients</h2>
      <div className="card p-6">
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-16 py-2 whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="text-slate-600">{c}</div>
            ))}
          </motion.div>
        </div>
        <div className="mt-6 text-sm text-slate-600">Trusted by startups and enterprises globally.</div>
      </div>
    </div>
  )
}
