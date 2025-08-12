export type ServiceKey = 'Marketing' | 'Web & Digital Solutions' | 'Media & Branding'

export const BASE: Record<ServiceKey, number> = {
  'Marketing': 900,
  'Web & Digital Solutions': 1800,
  'Media & Branding': 1200
}

export const FEATURES: Record<ServiceKey, {key: string, label: string, unit: number, qty?: boolean}[]> = {
  'Marketing': [
    { key: 'social_kit', label: 'Social media kit', unit: 300 },
    { key: 'content_calendar', label: 'Content calendar', unit: 280 },
    { key: 'paid_ads', label: 'Paid ads setup', unit: 700 },
    { key: 'mgmt_platform', label: 'Monthly management (per platform)', unit: 240, qty: true },
    { key: 'blog_piece', label: 'Blog article (per piece)', unit: 180, qty: true },
    { key: 'email_campaign', label: 'Email campaign (per send)', unit: 260, qty: true },
    { key: 'analytics', label: 'Analytics dashboard', unit: 320 }
  ],
  'Web & Digital Solutions': [
    { key: 'extra_pages', label: 'Extra pages', unit: 220, qty: true },
    { key: 'cms', label: 'CMS', unit: 650 },
    { key: 'ecommerce', label: 'E‑commerce', unit: 1250 },
    { key: 'seo', label: 'SEO setup', unit: 450 },
    { key: 'perf', label: 'Performance hardening', unit: 350 },
    { key: 'integration', label: 'Third‑party integration', unit: 280, qty: true },
    { key: 'tokens', label: 'Design system tokens', unit: 400 }
  ],
  'Media & Branding': [
    { key: 'logo', label: 'Logo package', unit: 850 },
    { key: 'guidelines', label: 'Brand guidelines', unit: 750 },
    { key: 'stationery', label: 'Stationery kit', unit: 260 },
    { key: 'templates', label: 'Social templates', unit: 320 },
    { key: 'photoshoot', label: 'Photoshoot (per hour)', unit: 160, qty: true },
    { key: 'video_min', label: 'Video edit (per minute)', unit: 220, qty: true },
    { key: 'motion_logo', label: 'Motion logo', unit: 480 }
  ]
}

export const COMPLEXITY = [
  { key: 'basic', label: 'Basic', factor: 1.00 },
  { key: 'standard', label: 'Standard', factor: 1.15 },
  { key: 'advanced', label: 'Advanced', factor: 1.35 },
  { key: 'premium', label: 'Premium', factor: 1.55 }
] as const

export function urgencyFactor(days: number) {
  if (days <= 6) return 1.40
  if (days <= 13) return 1.20
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
