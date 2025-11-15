import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/SmoothScroll'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap'
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'AZ Media — Design, Media & Tech Agency (Calgary)',
  description: 'Proudly Canadian agency based in Calgary. We build remarkable brands, marketing, and digital experiences.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'AZ Media — Calgary, Canada',
    description: 'Design, Media & Tech Agency',
    url: 'https://az-media.ca',
    siteName: 'AZ Media',
    locale: 'en_CA',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <GoogleAnalytics />
        <SmoothScroll/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
