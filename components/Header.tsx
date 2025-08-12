'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Calculator, Menu, X } from 'lucide-react'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#footprint', label: 'Footprint' },
  { href: '#services', label: 'Services' },
  { href: '#values', label: 'Vision & Values' },
  { href: '#clients', label: 'Clients' },
  { href: '#estimate', label: 'Estimate' },
  { href: '#contact', label: 'Contact' }
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="inline-block h-6 w-6 rounded-md bg-brand-600" />
          AZ Media
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-700 hover:text-brand-700 transition">{n.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#estimate" className="btn-ghost"><Calculator size={18} className="mr-2"/>Get a Quote</a>
          <a href="#contact" className="btn-primary"><PhoneCall size={18} className="mr-2"/>Book a Call</a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden btn-ghost"><Menu/></button>
      </div>

      {/* Mobile Sheet */}
      {open && (
        <motion.div
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 24, stiffness: 240 }}
          className="fixed inset-0 bg-black/40 md:hidden">
          <div className="ml-auto h-full w-80 bg-white p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="font-bold">AZ Media</div>
              <button className="btn-ghost" onClick={() => setOpen(false)}><X/></button>
            </div>
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-slate-800 hover:text-brand-700">{n.label}</a>
            ))}
            <a href="#estimate" onClick={() => setOpen(false)} className="btn-ghost mt-2"><Calculator size={18} className="mr-2"/>Get a Quote</a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary"><PhoneCall size={18} className="mr-2"/>Book a Call</a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
