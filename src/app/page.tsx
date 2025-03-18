'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ExecutiveSummary from '@/components/sections/ExecutiveSummary'
import AboutFloLo from '@/components/sections/AboutFloLo'
import MarketOpportunity from '@/components/sections/MarketOpportunity'
import FinancialPerformance from '@/components/sections/FinancialPerformance'
// import GrowthStrategy from '@/components/sections/GrowthStrategy'
import WhyInvest from '@/components/sections/WhyInvest'
import InvestorTypes from '@/components/sections/InvestorTypes'
import FounderSpotlight from '@/components/sections/FounderSpotlight'
import InvestmentOpportunity from '@/components/sections/InvestmentOpportunity'
import ContactUs from '@/components/sections/ContactUs'
import Navigation from '@/components/Navigation'
import FloatImage from '@/components/sections/FloatImage'
import VideoSection from '@/components/sections/VideoSection'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      <ExecutiveSummary />
      <AboutFloLo />
      <MarketOpportunity />
      <FloatImage />
      <WhyInvest />
      <VideoSection />
      <InvestorTypes />
      <FounderSpotlight />
      <FinancialPerformance />
      <InvestmentOpportunity />
      <ContactUs />
    </main>
  )
} 