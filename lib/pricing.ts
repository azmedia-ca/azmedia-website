export type ServiceKey = 'Digital Marketing' | 'Web & Digital Solutions' | 'Media & Branding'

export const BASE: Record<ServiceKey, number> = {
  'Digital Marketing': 5000,
  'Web & Digital Solutions': 7500,
  'Media & Branding': 6500
}

export const FEATURES: Record<ServiceKey, {key: string, label: string, unit: number, qty?: boolean}[]> = {
  'Digital Marketing': [
    { key: 'social_kit', label: 'Social media kit', unit: 1500 },
    { key: 'content_calendar', label: 'Content calendar', unit: 1200 },
    { key: 'paid_ads', label: 'Paid ads setup', unit: 2500 },
    { key: 'mgmt_platform', label: 'Monthly management (per platform)', unit: 1300, qty: true },
    { key: 'blog_piece', label: 'Blog article (per piece)', unit: 200, qty: true },
    { key: 'email_campaign', label: 'Email campaign (per send)', unit: 3000, qty: true },
    { key: 'analytics', label: 'Analytics dashboard', unit: 1500 }
  ],
  'Web & Digital Solutions': [
    { key: 'extra_pages', label: 'Extra pages', unit: 800, qty: true },
    { key: 'cms', label: 'CMS', unit: 3000 },
    { key: 'ecommerce', label: 'E‑commerce', unit: 10000 },
    { key: 'seo', label: 'SEO setup', unit: 2500 },
    { key: 'perf', label: 'Performance hardening', unit: 500 },
    { key: 'integration', label: 'Third‑party integration', unit: 3000, qty: true },
    { key: 'tokens', label: 'Design system tokens', unit: 800 }
  ],
  'Media & Branding': [
    { key: 'logo', label: 'Logo package', unit: 1500 },
    { key: 'guidelines', label: 'Brand guidelines', unit: 1500 },
    { key: 'stationery', label: 'Stationery kit', unit: 1300 },
    { key: 'templates', label: 'Social templates', unit: 3000 },
    { key: 'photoshoot', label: 'Photoshoot (per hour)', unit: 500, qty: true },
    { key: 'video_min', label: 'Video edit (per minute)', unit: 2500, qty: true },
    { key: 'motion_logo', label: 'Motion logo', unit: 3000 }
  ]
}

export const COMPLEXITY = [
  { key: 'basic', label: 'Basic', factor: 1.00 },
  { key: 'standard', label: 'Standard', factor: 1.15 },
  { key: 'advanced', label: 'Advanced', factor: 1.35 },
  { key: 'premium', label: 'Premium', factor: 1.55 }
] as const

export function urgencyFactor(days: number) {
  if (days <= 10) return 1.80
  if (days <= 20) return 1.20
  return 1.00
}

export function estimateTotal(service: ServiceKey, items: Record<string, number>, complexityKey: typeof COMPLEXITY[number]['key'], daysUntil: number) {
  const base = BASE[service]
  const features = FEATURES[service]
  let subtotal = base
  for (const f of features) {
    const qty = items[f.key] || 0
    if (qty > 0) subtotal += f.unit * qty
  }
  const c = COMPLEXITY.find(c => c.key === complexityKey)?.factor ?? 1
  const u = urgencyFactor(daysUntil)
  const total = Math.round(subtotal * c * u)
  return { base, subtotal, complexity: c, urgency: u, total }
}
