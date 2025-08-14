'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { PhoneCall, Calculator, Menu, X } from 'lucide-react'

const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-200/30 shadow-sm">
      <div className="container flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="AZ Media home">
          <div className="relative">
            <Image
              src="/images/small_logo.png"
              alt="AZ Media"
              width={40}
              height={40}
              className="h-11 w-11 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
            AZ Media
          </span>
          <span className="sr-only">AZ Media</span>
        </Link>

        <LayoutGroup>
          <nav
            className="hidden md:flex items-center gap-1 text-sm"
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-slate-600 hover:text-brand-700 rounded-xl px-4 py-2.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                onMouseEnter={() => setHovered(n.href)}
                onFocus={() => setHovered(n.href)}
                onBlur={() => setHovered(null)}
              >
                {hovered === n.href && (
                  <motion.span 
                    layoutId="navHover" 
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-50 to-brand-100/80 pointer-events-none z-0"
                    transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 1 }} 
                  />
                )}
                <span className="relative z-10">{n.label}</span>
              </a>
            ))}
          </nav>
        </LayoutGroup>

        <div className="hidden md:flex items-center gap-3">
          <a href="#estimate" className="btn-ghost text-sm">
            <Calculator size={16} className="mr-2"/>
            Get a Quote
          </a>
          <a href="#contact" className="btn-primary text-sm">
            <PhoneCall size={16} className="mr-2"/>
            Book a Call
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden btn-ghost p-2">
          <Menu size={20}/>
        </button>
      </div>

      {/* Mobile Sheet */}
      {open && (
        <motion.div
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 24, stiffness: 240 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-50">
          <div className="ml-auto h-full w-80 bg-white/95 backdrop-blur-md p-6 flex flex-col gap-4 border-l border-brand-200/30">
            <div className="flex items-center justify-between pb-4 border-b border-brand-100">
              <div className="font-bold text-lg bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                AZ Media
              </div>
              <button className="btn-ghost p-2" onClick={() => setOpen(false)}>
                <X size={20}/>
              </button>
            </div>
            {nav.map(n => (
              <a 
                key={n.href} 
                href={n.href} 
                onClick={() => setOpen(false)} 
                className="px-4 py-3 text-slate-700 hover:text-brand-700 hover:bg-brand-50 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 font-medium"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-brand-100 space-y-3">
              <a href="#estimate" onClick={() => setOpen(false)} className="btn-ghost w-full justify-start">
                <Calculator size={18} className="mr-3"/>Get a Quote
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-start">
                <PhoneCall size={18} className="mr-3"/>Book a Call
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
