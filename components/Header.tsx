'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { PhoneCall, Calculator, Menu, X } from 'lucide-react'

const nav = [
  { href: '#home', label: 'Home' },
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
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="AZ Media home">
          <Image
            src="/images/small_logo.png"
            alt="AZ Media"
            width={36}
            height={36}
            className="h-10 w-10"
          /> AZ Media
          <span className="sr-only">AZ Media</span>
        </Link>

        <LayoutGroup>
          <nav
            className="hidden md:flex items-center gap-2 text-sm"
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-slate-700 hover:text-brand-700 rounded-xl px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30"
                onMouseEnter={() => setHovered(n.href)}
                onFocus={() => setHovered(n.href)}
                onBlur={() => setHovered(null)}
              >
                {hovered === n.href && (
                  <motion.span layoutId="navHover" className="absolute inset-0 rounded-xl bg-slate-100 pointer-events-none z-0"
                    transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 1 }} />
                )}
                <span className="relative z-10">{n.label}</span>
              </a>
            ))}
          </nav>
        </LayoutGroup>

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
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 text-slate-800 hover:text-brand-700 hover:bg-slate-100 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30">{n.label}</a>
            ))}
            <a href="#estimate" onClick={() => setOpen(false)} className="btn-ghost mt-2"><Calculator size={18} className="mr-2"/>Get a Quote</a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary"><PhoneCall size={18} className="mr-2"/>Book a Call</a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
