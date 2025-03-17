import './globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'

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

export const metadata = {
  title: 'FloLo Holistic - Investment Opportunity',
  description: 'Join FloLo Holistic in shaping the future of wellness. A profitable NYC wellness center seeking strategic investment partners.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="bg-white">{children}</body>
    </html>
  )
} 