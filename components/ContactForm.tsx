'use client'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

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

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
        <p className="text-slate-600">Tell us about your project, budget, and timeline. We’ll reply quickly.</p>
      </div>
      <div className="card p-6">
        {!sent ? (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Name"><input className="input" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></Field>
            <Field label="Email"><input className="input" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></Field>
            <Field label="Company"><input className="input" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/></Field>
            <Field label="Phone (optional)"><input className="input" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></Field>
            <Field label="Budget range"><input className="input" placeholder="e.g., CAD 10k–20k" value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}/></Field>
            <Field label="Timeline"><input className="input" placeholder="e.g., 6-8 weeks" value={form.timeline} onChange={e=>setForm({...form,timeline:e.target.value})}/></Field>
            <div className="col-span-2">
              <div className="label">Message</div>
              <textarea className="input min-h-32" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}></textarea>
            </div>
            <div className="col-span-2">
              <button onClick={submit} disabled={sending} className="btn-primary w-full flex items-center justify-center">
                {sending ? (<><Loader2 className="mr-2 animate-spin"/> Sending…</>) : 'Send message'}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <svg className="checkmark mx-auto mb-2" width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M20 7L9 18L4 13" stroke="rgb(var(--brand-600))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="font-semibold">Sent</div>
            <div className="text-sm text-slate-600">We will be in touch very soon.</div>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ children, label }: React.PropsWithChildren<{label:string}>) {
  return (
    <div>
      <div className="label">{label}</div>
      {children}
    </div>
  )
}
