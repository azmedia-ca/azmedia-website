'use client'
export function Progress({ step }: { step: number }) {
  const pct = (step / 3) * 100
  return (
    <div className="h-2 bg-black/10 rounded-full overflow-hidden">
      <div className="h-full bg-brand-600" style={{ width: pct + '%' }} />
    </div>
  )
}
