'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, MapPin, Mail, Phone, Clock, CheckCircle, Award } from 'lucide-react'

export function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', message:'', budget:'', timeline:'' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function submit() {
    setSending(true)
    setSent(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const json = await res.json()
      if (json.ok) setSent(true)
    } catch (e) { console.error(e) }
    finally { setSending(false) }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'hello@az-media.ca',
      desc: 'Get a response within 4 hours'
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1 (403) 555-0123',
      desc: 'Mon-Fri, 9AM-6PM MST'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Calgary, Alberta',
      desc: 'Proudly serving Western Canada'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '< 24 Hours',
      desc: 'We respond to all inquiries quickly'
    }
  ]

  const benefits = [
    'Free 30-minute strategy consultation',
    'Custom project roadmap & timeline',
    'Transparent, competitive pricing',
    'Dedicated project manager assigned'
  ]

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Contact Info & Benefits */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-1">
        
        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <div className="space-y-6">
            {contactInfo.map((info, i) => {
              const IconComponent = info.icon
              return (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{info.label}</div>
                    <div className="text-brand-600 font-medium">{info.value}</div>
                    <div className="text-sm text-slate-600">{info.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* What You'll Get */}
        <div className="card p-6 bg-gradient-to-br from-brand-50 to-brand-100/50">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-brand-600" />
            <h4 className="font-semibold">What You'll Get:</h4>
          </div>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2">
        
        <div className="card p-8">
          {!sent ? (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full Name *">
                  <input 
                    className="input" 
                    value={form.name} 
                    onChange={e=>setForm({...form,name:e.target.value})}
                    placeholder="John Doe"
                    required
                  />
                </Field>
                <Field label="Email Address *">
                  <input 
                    className="input" 
                    type="email" 
                    value={form.email} 
                    onChange={e=>setForm({...form,email:e.target.value})}
                    placeholder="john@company.com"
                    required
                  />
                </Field>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Company Name">
                  <input 
                    className="input" 
                    value={form.company} 
                    onChange={e=>setForm({...form,company:e.target.value})}
                    placeholder="Your Company Inc."
                  />
                </Field>
                <Field label="Phone Number (Optional)">
                  <input 
                    className="input" 
                    value={form.phone} 
                    onChange={e=>setForm({...form,phone:e.target.value})}
                    placeholder="+1 (403) 555-0123"
                  />
                </Field>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Project Budget">
                  <select 
                    className="input"
                    value={form.budget} 
                    onChange={e=>setForm({...form,budget:e.target.value})}>
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                  </select>
                </Field>
                <Field label="Timeline">
                  <select 
                    className="input"
                    value={form.timeline} 
                    onChange={e=>setForm({...form,timeline:e.target.value})}>
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush job)</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months-plus">6+ months</option>
                  </select>
                </Field>
              </div>

              <Field label="Project Details *">
                <textarea 
                  className="input min-h-32" 
                  value={form.message} 
                  onChange={e=>setForm({...form,message:e.target.value})}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  rows={5}
                  required
                />
              </Field>

              <button 
                onClick={submit} 
                disabled={sending || !form.name || !form.email || !form.message} 
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                {sending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Your Message...
                  </>
                ) : (
                  <>
                    Send My Project Details
                    <Mail className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-slate-500 text-center">
                By submitting this form, you agree to receive communications from AZ Media. 
                We respect your privacy and never share your information.
              </p>
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for reaching out. Our team will review your project details and 
                get back to you within 24 hours with next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {setSent(false); setForm({ name:'', email:'', company:'', phone:'', message:'', budget:'', timeline:'' })}}
                  className="btn-ghost">
                  Send Another Message
                </button>
                <a href="#estimate" className="btn-primary">
                  Get Instant Estimate
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function Field({ children, label }: React.PropsWithChildren<{label:string}>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
      {children}
    </div>
  )
}
