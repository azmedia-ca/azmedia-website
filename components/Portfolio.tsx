'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { TrendingUp, Users } from '@/components/icons/AnimatedIcons'
import { Calendar } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  client: string
  category: 'Marketing' | 'Web & Digital' | 'Media & Branding'
  description: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  image: string
  tags: string[]
  duration: string
  teamSize: number
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

const caseStudies: CaseStudy[] = [
  {
    id: 'tech-startup-rebrand',
    title: 'Complete Brand Transformation',
    client: 'TechFlow Solutions',
    category: 'Media & Branding',
    description: 'A complete rebrand for a Calgary tech startup, including new identity, website, and marketing materials.',
    challenge: 'Client had outdated branding that didn\'t reflect their innovative solutions and was losing potential clients to competitors.',
    solution: 'Created a modern, tech-forward brand identity with clean typography, dynamic logo, and cohesive digital presence.',
    results: [
      { metric: 'Brand Recognition', value: '340%', improvement: 'increase' },
      { metric: 'Lead Generation', value: '180%', improvement: 'boost' },
      { metric: 'Website Conversions', value: '220%', improvement: 'growth' }
    ],
    image: '/images/portfolio/techflow-preview.jpg',
    tags: ['Brand Identity', 'Logo Design', 'Website', 'Marketing Materials'],
    duration: '6 weeks',
    teamSize: 4,
    testimonial: {
      quote: 'AZ Media transformed our entire business presence. The new brand has opened doors we never thought possible.',
      author: 'Sarah Chen',
      position: 'CEO, TechFlow Solutions'
    }
  },
  {
    id: 'restaurant-digital-campaign',
    title: 'Digital Marketing Campaign',
    client: 'Bella Vista Restaurant',
    category: 'Marketing',
    description: 'Multi-channel digital marketing campaign to increase reservations and brand awareness for a high-end Calgary restaurant.',
    challenge: 'Restaurant was struggling with low visibility and declining reservations post-pandemic.',
    solution: 'Developed integrated social media strategy, Google Ads campaigns, and influencer partnerships focused on Calgary food scene.',
    results: [
      { metric: 'Reservations', value: '290%', improvement: 'increase' },
      { metric: 'Social Engagement', value: '450%', improvement: 'growth' },
      { metric: 'Online Reviews', value: '380%', improvement: 'boost' }
    ],
    image: '/images/portfolio/bellavista-preview.jpg',
    tags: ['Social Media', 'Google Ads', 'Influencer Marketing', 'Content Creation'],
    duration: '3 months',
    teamSize: 3,
    testimonial: {
      quote: 'Our restaurant went from empty tables to fully booked weekends. The team understood our vision perfectly.',
      author: 'Marco Rossi',
      position: 'Owner, Bella Vista Restaurant'
    }
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform Development',
    client: 'Mountain Gear Co.',
    category: 'Web & Digital',
    description: 'Custom e-commerce platform with advanced inventory management and customer personalization features.',
    challenge: 'Growing outdoor gear retailer needed scalable e-commerce solution to handle increased online demand.',
    solution: 'Built custom Next.js e-commerce platform with advanced filtering, personalization, and seamless checkout experience.',
    results: [
      { metric: 'Online Sales', value: '520%', improvement: 'increase' },
      { metric: 'Page Speed', value: '75%', improvement: 'improvement' },
      { metric: 'Customer Retention', value: '160%', improvement: 'growth' }
    ],
    image: '/images/portfolio/mountaingear-preview.jpg',
    tags: ['Next.js', 'E-commerce', 'Custom Development', 'Performance Optimization'],
    duration: '4 months',
    teamSize: 5,
    testimonial: {
      quote: 'The platform they built scaled with our rapid growth. Technical excellence meets beautiful design.',
      author: 'David Kim',
      position: 'Founder, Mountain Gear Co.'
    }
  }
]

const categories = ['All', 'Marketing', 'Web & Digital', 'Media & Branding']

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

  const filteredCases = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory)

  return (
    <div>
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
          <TrendingUp animation="pulse" className="w-4 h-4 text-brand-600" />
          Portfolio & Results
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Proven Success Stories{' '}
          <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            That Deliver Results
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Real projects, real results. See how we've transformed Calgary businesses with strategic 
          digital solutions that drive <strong className="text-brand-600">measurable growth and ROI</strong>.
        </p>
      </div>

      {/* Enhanced Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                : 'bg-white/80 backdrop-blur hover:bg-brand-50 text-slate-700 border border-slate-200 hover:border-brand-200'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredCases.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer h-full"
            onClick={() => setSelectedCase(study)}
          >
            <div className="card overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:ring-2 group-hover:ring-brand-200 h-full flex flex-col">
              {/* Enhanced image with better placeholder */}
              <div className="h-56 bg-gradient-to-br from-brand-100 via-brand-50 to-brand-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 text-xs bg-white/95 backdrop-blur text-brand-700 px-3 py-1.5 rounded-full font-medium shadow-sm">
                    {study.category}
                  </span>
                </div>
                
                {/* Results preview badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-green-500/90 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {study.results[0].value} ROI
                  </span>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/95 backdrop-blur rounded-xl p-2 shadow-sm">
                    <div className="text-xs text-slate-600 font-medium">{study.duration}</div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-brand-700 transition-colors">{study.title}</h3>
                    <p className="text-brand-600 font-semibold">{study.client}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Users animation="pulse" className="w-3 h-3" />
                    {study.teamSize}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed flex-1">{study.description}</p>
                
                {/* Enhanced Results Preview */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {study.results.slice(0, 3).map((result, idx) => (
                    <div key={idx} className="text-center p-3 bg-slate-50 rounded-lg group-hover:bg-brand-50 transition-colors">
                      <div className="text-xl font-bold text-brand-600 mb-1">{result.value}</div>
                      <div className="text-xs text-slate-600 font-medium">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Tags preview */}
                <div className="flex flex-wrap gap-1">
                  {study.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 2 && (
                    <span className="text-xs text-slate-500">+{study.tags.length - 2} more</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedCase(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">{selectedCase.title}</h3>
                  <p className="text-brand-600 font-medium">{selectedCase.client}</p>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Project Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedCase.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users animation="pulse" className="w-4 h-4" />
                  {selectedCase.teamSize} team members
                </div>
                <div className="inline-block bg-brand-100 text-brand-700 px-2 py-1 rounded-full">
                  {selectedCase.category}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-3">The Challenge</h4>
                  <p className="text-slate-600">{selectedCase.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Our Solution</h4>
                  <p className="text-slate-600">{selectedCase.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp animation="pulse" className="w-5 h-5 text-brand-600" />
                  Results & Impact
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedCase.results.map((result, idx) => (
                    <div key={idx} className="card p-4 text-center">
                      <div className="text-2xl font-bold text-brand-600 mb-1">{result.value}</div>
                      <div className="text-sm text-slate-600">{result.improvement}</div>
                      <div className="text-xs text-slate-500 mt-1">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {selectedCase.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedCase.testimonial && (
                <div className="card p-6 bg-brand-50/50">
                  <blockquote className="text-slate-700 italic mb-4">
                    "{selectedCase.testimonial.quote}"
                  </blockquote>
                  <div className="font-medium text-slate-900">
                    {selectedCase.testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600">
                    {selectedCase.testimonial.position}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}