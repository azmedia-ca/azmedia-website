'use client'
import React, { useMemo, useState } from 'react'
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
        <h2 className="text-xl font-bold">Estimate Your Cost</h2>
        <div className="text-sm text-slate-600">CAD • ±15% confidence</div>
      </div>
      <Progress step={step} />

      {/* Fixed height container for consistent sizing */}
      <div className="mt-6 min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-4">
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
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div 
              key="step1" 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-brand-700">Choose Your Service</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {(['Marketing','Web & Digital Solutions','Media & Branding'] as ServiceKey[]).map(s => (
                      <motion.button
                        key={s}
                        onClick={() => setService(s)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={`card px-3 py-2 text-left transition-all duration-200 ${
                          service===s 
                            ? 'ring-2 ring-brand-400 bg-brand-50 shadow-lg' 
                            : 'hover:shadow-md hover:border-brand-200'
                        }`}>
                        <div className="font-semibold text-slate-800">{s}</div>
                        <div className="text-sm text-brand-600 mt-1 font-medium">Base ${BASE[s]}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-brand-700">Project Complexity</h3>
                  <div className="flex flex-wrap gap-2">
                    {COMPLEXITY.map(c => (
                      <motion.button 
                        key={c.key} 
                        onClick={() => setComplexity(c.key)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.95 }}
                        className={`btn transition-all duration-200 ${
                          complexity===c.key 
                            ? 'bg-brand-600 text-white shadow-lg' 
                            : 'btn-ghost hover:bg-brand-50 hover:border-brand-300'
                        }`}>
                        {c.label} ×{c.factor.toFixed(2)}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2" 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1">
              <h3 className="font-semibold text-lg mb-4 text-brand-700">Select Features & Add-ons</h3>
              <div className="grid gap-3 max-h-[300px] overflow-y-auto pr-2">
                {FEATURES[service].map(f => (
                  <motion.div 
                    key={f.key} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: FEATURES[service].indexOf(f) * 0.05 }}
                    className={`grid grid-cols-1 md:grid-cols-5 items-center gap-3 px-3 py-2 rounded-xl border transition-all duration-200 ${
                      items[f.key] ? 'border-brand-300 bg-brand-50 shadow-sm' : 'border-slate-200 hover:border-brand-200 hover:bg-slate-50'
                    }`}>
                    <div className="md:col-span-3">
                      <div className="font-medium text-slate-800">{f.label}</div>
                      <div className="text-sm text-brand-600 font-medium">${f.unit}{f.qty ? ' × qty' : ''}</div>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-end gap-2">
                      {f.qty ? (
                        <div className="flex items-center gap-2">
                          <motion.button 
                            className="btn-ghost w-6 h-6 p-0 flex items-center justify-center text-sm" 
                            onClick={() => setQty(f.key, (items[f.key] || 0) - 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            -
                          </motion.button>
                          <input 
                            className="input w-12 text-center text-xs h-6" 
                            value={items[f.key] || 0} 
                            onChange={e => setQty(f.key, Number(e.target.value || 0))} 
                          />
                          <motion.button 
                            className="btn-ghost w-6 h-6 p-0 flex items-center justify-center text-sm" 
                            onClick={() => setQty(f.key, (items[f.key] || 0) + 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            +
                          </motion.button>
                        </div>
                      ) : (
                        <motion.button 
                          className={`btn ${items[f.key] ? 'bg-brand-600 text-white shadow-md' : 'btn-ghost hover:bg-brand-50'}`}
                          onClick={() => setQty(f.key, items[f.key] ? 0 : 1)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}>
                          {items[f.key] ? 'Remove' : 'Add'}
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3" 
              initial={{ opacity: 0, y: 12 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 flex flex-col justify-center">
              <h3 className="font-semibold text-lg mb-4 text-brand-700">Review & Submit</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="px-4 py-3 rounded-xl bg-gradient-to-br from-brand-50 to-white border border-brand-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}>
                  <div className="font-semibold mb-3 text-brand-700 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-600 text-white rounded-full text-xs flex items-center justify-center">✓</span>
                    Project Summary
                  </div>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex justify-between"><span>Service:</span><span className="font-medium">{service}</span></li>
                    <li className="flex justify-between"><span>Complexity:</span><span className="font-medium capitalize">{complexity}</span></li>
                    <li className="flex justify-between"><span>Timeline:</span><span className="font-medium">{daysUntil} days</span></li>
                    <li className="flex justify-between border-t pt-2"><span>Base Price:</span><span className="font-medium">${estimate.base}</span></li>
                    <li className="flex justify-between"><span>Features Subtotal:</span><span className="font-medium">${estimate.subtotal}</span></li>
                    <li className="flex justify-between"><span>Complexity Multiplier:</span><span className="font-medium">×{estimate.complexity.toFixed(2)}</span></li>
                    <li className="flex justify-between"><span>Urgency Multiplier:</span><span className="font-medium">×{estimate.urgency.toFixed(2)}</span></li>
                    <li className="flex justify-between font-semibold text-lg text-brand-700 border-t pt-2">
                      <span>Total (CAD):</span><span>${estimate.total}</span>
                    </li>
                  </ul>
                  <motion.button 
                    onClick={() => window.print()} 
                    className="btn-ghost mt-3 w-full h-8"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}>
                    📄 Save as PDF
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}>
                  {!sent ? (
                    <div className="h-full flex flex-col justify-center">
                      <div className="font-semibold mb-3 text-slate-800">Submit Your Request</div>
                      <p className="text-sm text-slate-600 mb-4">We'll email this estimate to our team and get back to you within 24 hours.</p>
                      <motion.button
                        onClick={submit}
                        disabled={sending}
                        className="btn-primary w-full flex items-center justify-center h-8"
                        whileHover={!sending ? { scale: 1.01 } : {}}
                        whileTap={!sending ? { scale: 0.98 } : {}}>
                        {sending ? (
                          <><Loader2 className="mr-2 animate-spin"/> Sending…</>
                        ) : (
                          <>🚀 Submit Request</>
                        )}
                      </motion.button>
                    </div>
                  ) : (
                    <motion.div 
                      className="text-center h-full flex flex-col justify-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}>
                      <motion.svg 
                        className="checkmark mx-auto mb-3" 
                        width="64" 
                        height="64" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}>
                        <path d="M20 7L9 18L4 13" stroke="rgb(var(--brand-600))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                      <div className="font-semibold text-brand-700 text-lg">Request Sent!</div>
                      <div className="text-sm text-slate-600 mt-1">We'll be in touch within 24 hours.</div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <motion.button 
          onClick={() => setStep(s => Math.max(0, s - 1))} 
          className="btn-ghost disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={step === 0}
          whileHover={step > 0 ? { scale: 1.01 } : {}}
          whileTap={step > 0 ? { scale: 0.98 } : {}}>
          ← Back
        </motion.button>
        
        <div className="text-sm text-slate-500 font-medium">
          Step {step + 1} of 4
        </div>
        
        {step < 3 ? (
          <motion.button
            onClick={() => setStep(s => Math.min(3, s + 1))}
            className="btn-primary"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}>
            Next →
          </motion.button>
        ) : (
          <div className="w-16"></div>
        )}
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