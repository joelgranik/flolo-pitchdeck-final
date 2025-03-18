import './globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import StyledComponentsRegistry from '../lib/registry'

// Font configuration
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
})

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4CAF50',
}

// Metadata for SEO
export const metadata: Metadata = {
  title: 'FloLo Holistic - Investment Opportunity',
  description: 'Join FloLo Holistic in shaping the future of wellness. A profitable NYC wellness center seeking strategic investment partners with $650K revenue and $64,591 net profit in 2024.',
  keywords: 'FloLo Holistic, wellness investment, NYC wellness center, holistic wellness, investment opportunity, acupuncture, floatation therapy, wellness business',
  authors: [{ name: 'Joel Granik', url: 'https://floloholistic.com' }],
  creator: 'Joel Granik',
  publisher: 'FloLo Holistic',
  metadataBase: new URL('https://floloholistic.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://floloholistic.com',
    title: 'FloLo Holistic - NYC Wellness Investment Opportunity',
    description: 'Invest in FloLo Holistic, a profitable NYC wellness center with $650K revenue. Seeking $100K-$150K investment for significant equity stake.',
    siteName: 'FloLo Holistic Investment',
    images: [
      {
        url: '/images/Logo Purple Landscape.png',
        width: 1200,
        height: 630,
        alt: 'FloLo Holistic Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FloLo Holistic - NYC Wellness Investment Opportunity',
    description: 'Invest in FloLo Holistic, a profitable NYC wellness center with $650K revenue. Seeking $100K-$150K investment for significant equity stake.',
    images: ['/images/Logo Purple Landscape.png'],
    creator: '@floloholistic',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          {/* Skip to content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
          >
            Skip to content
          </a>
          
          <main id="main-content">
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}