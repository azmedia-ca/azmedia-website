import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold mb-4">
            <span className="inline-block h-6 w-6 rounded-md bg-brand-600" />
            AZ Media
          </div>
          <p className="text-sm text-slate-600">Proudly Canadian • Calgary, AB</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-brand-700">About</a></li>
            <li><a href="#services" className="hover:text-brand-700">Services</a></li>
            <li><a href="#values" className="hover:text-brand-700">Vision & Values</a></li>
            <li><a href="#clients" className="hover:text-brand-700">Clients</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={16}/> info@az-media.ca</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Calgary, Alberta</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +1 (403) 000-0000</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <div className="flex gap-3 text-slate-600">
            <a href="#" aria-label="Facebook" className="hover:text-brand-700"><Facebook/></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-brand-700"><Linkedin/></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand-700"><Instagram/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} AZ Media. All rights reserved.
      </div>
    </footer>
  )
}
