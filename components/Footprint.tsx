'use client'
import { motion } from 'framer-motion'

export function Footprint() {
  const cities = [
    { name: 'Calgary', x: 28, y: 30 },
    { name: 'Toronto', x: 42, y: 28 },
    { name: 'Vancouver', x: 22, y: 31 },
    { name: 'London', x: 63, y: 24 },
    { name: 'Dubai', x: 75, y: 34 },
    { name: 'Singapore', x: 86, y: 48 }
  ]
  return (
    <div className="card p-8 relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-6">Our Global Footprint</h2>
      <p className="text-slate-600 mb-6">Headquartered in Calgary, collaborating with teams worldwide.</p>
      <div className="relative aspect-[2/1] w-full bg-gradient-to-tr from-brand-50 to-white rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          {/* Simple dotted world map placeholder */}
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <defs>
              <pattern id="dots" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
                <circle cx="0.5" cy="0.5" r="0.15" fill="rgba(0,0,0,0.05)" />
              </pattern>
            </defs>
            <rect width="100" height="50" fill="url(#dots)"/>
          </svg>
        </div>
        {cities.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="absolute -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-brand-600 shadow-card"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              title={c.name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
