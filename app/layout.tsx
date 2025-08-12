import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
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
  openGraph: {
    title: 'AZ Media — Calgary, Canada',
    description: 'Design, Media & Tech Agency',
    url: 'https://az-media.ca',
    siteName: 'AZ Media',
    locale: 'en_CA',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
