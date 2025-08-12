'use client'
import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Progress } from './Progress'
import { FEATURES, BASE, COMPLEXITY, estimateTotal, type ServiceKey } from '@/lib/pricing'
import { Check, Loader2 } from 'lucide-react'

type Info = {
  name: string
  email: string
  company?: string
  deliveryDate?: string
  projectName: string
}

export function Estimator() {
  const [step, setStep] = useState(0)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const [info, setInfo] = useState<Info>({ name: '', email: '', projectName: '' })
  const [service, setService] = useState<ServiceKey>('Marketing')
  const [items, setItems] = useState<Record<string, number>>({})
  const [complexity, setComplexity] = useState<typeof COMPLEXITY[number]['key']>('standard')

  const daysUntil = useMemo(() => {
    if (!info.deliveryDate) return 30
    const target = new Date(info.deliveryDate).getTime()
    const now = Date.now()
    const days = Math.max(0, Math.ceil((target - now) / (1000*60*60*24)))
    return days
  }, [info.deliveryDate])

  const estimate = useMemo(() => {
    return estimateTotal(service, items, complexity, daysUntil)
  }, [service, items, complexity, daysUntil])

  function setQty(key: string, next: number) {
    setItems(prev => {
      const n = Math.max(0, Math.floor(next))
      return { ...prev, [key]: n }
    })
  }

  async function submit() {
    setSending(true)
    setSent(false)
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          info,
          selection: { service, complexity, daysUntil },
          features: items,
          estimate
        })
      })
      const json = await res.json()
      if (json.ok) {
        setSent(true)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Estimate Your Cost</h2>
        <div className="text-sm text-slate-600">CAD • ±15% confidence</div>
      </div>
      <Progress step={step} />

      <div className="mt-6">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="grid md:grid-cols-2 gap-4">
              <Field label="Full name">
                <input className="input" value={info.name} onChange={e => setInfo({ ...info, name: e.target.value })} placeholder="Jane Doe" />
              </Field>
              <Field label="Email">
                <input className="input" type="email" value={info.email} onChange={e => setInfo({ ...info, email: e.target.value })} placeholder="jane@company.com" />
              </Field>
              <Field label="Company">
                <input className="input" value={info.company || ''} onChange={e => setInfo({ ...info, company: e.target.value })} placeholder="Company Inc." />
              </Field>
              <Field label="Preferred delivery date">
                <input className="input" type="date" value={info.deliveryDate || ''} onChange={e => setInfo({ ...info, deliveryDate: e.target.value })} />
              </Field>
              <Field label="Project name" className="md:col-span-2">
                <input className="input" value={info.projectName} onChange={e => setInfo({ ...info, projectName: e.target.value })} placeholder="Website redesign" />
              </Field>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <div className="grid md:grid-cols-3 gap-3">
                {(['Marketing','Web & Digital Solutions','Media & Branding'] as ServiceKey[]).map(s => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`card p-4 text-left hover:-translate-y-1 transition ${service===s ? 'ring-2 ring-brand-400' : ''}`}>
                    <div className="font-semibold">{s}</div>
                    <div className="text-xs text-slate-600 mt-1">Base ${BASE[s]}</div>
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <div className="label">Complexity</div>
                <div className="flex flex-wrap gap-2">
                  {COMPLEXITY.map(c => (
                    <button key={c.key} onClick={() => setComplexity(c.key)}
                      className={`btn ${complexity===c.key ? 'bg-brand-600 text-white' : 'btn-ghost'}`}>
                      {c.label} ×{c.factor.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <div className="grid gap-4">
                {FEATURES[service].map(f => (
                  <div key={f.key} className="grid grid-cols-1 md:grid-cols-5 items-center gap-3 p-3 rounded-xl border border-black/10">
                    <div className="md:col-span-3">
                      <div className="font-medium">{f.label}</div>
                      <div className="text-xs text-slate-600">${f.unit}{f.qty ? ' × qty' : ''}</div>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-end gap-2">
                      {f.qty ? (
                        <div className="flex items-center gap-2">
                          <button className="btn-ghost" onClick={() => setQty(f.key, (items[f.key] || 0) - 1)}>-</button>
                          <input className="input w-16 text-center" value={items[f.key] || 0} onChange={e => setQty(f.key, Number(e.target.value || 0))} />
                          <button className="btn-ghost" onClick={() => setQty(f.key, (items[f.key] || 0) + 1)}>+</button>
                        </div>
                      ) : (
                        <button className={`btn ${items[f.key] ? 'bg-brand-600 text-white' : 'btn-ghost'}`}
                          onClick={() => setQty(f.key, items[f.key] ? 0 : 1)}>
                          {items[f.key] ? 'Remove' : 'Add'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white border border-black/10">
                  <div className="font-semibold mb-2">Summary</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>Service: {service}</li>
                    <li>Complexity: {complexity}</li>
                    <li>Urgency (days): {daysUntil}</li>
                    <li>Base: ${estimate.base}</li>
                    <li>Subtotal: ${estimate.subtotal}</li>
                    <li>Complexity ×{estimate.complexity.toFixed(2)}</li>
                    <li>Urgency ×{estimate.urgency.toFixed(2)}</li>
                    <li className="font-semibold">Estimated Total (CAD): ${estimate.total}</li>
                  </ul>
                  <button onClick={() => window.print()} className="btn-ghost mt-3">Print / Save PDF</button>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/10">
                  {!sent ? (
                    <div>
                      <div className="font-semibold mb-2">Submit your request</div>
                      <p className="text-sm text-slate-600 mb-3">We’ll email this estimate and details to our team.</p>
                      <button
                        onClick={submit}
                        disabled={sending}
                        className="btn-primary w-full flex items-center justify-center">
                        {sending ? (<><Loader2 className="mr-2 animate-spin"/> Sending…</>) : 'Submit your request now'}
                      </button>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={() => setStep(s => Math.max(0, s - 1))} className="btn-ghost">Back</button>
        {step < 3 ? (
          <button
            onClick={() => setStep(s => Math.min(3, s + 1))}
            className="btn-primary">
            Next
          </button>
        ) : null}
      </div>
    </div>
  )
}

function Field({ children, label, className }: React.PropsWithChildren<{label: string, className?: string}>) {
  return (
    <div className={className}>
      <div className="label">{label}</div>
      {children}
    </div>
  )
}
