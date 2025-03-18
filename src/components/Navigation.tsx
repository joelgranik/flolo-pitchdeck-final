'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Remove Contact Us from the sections array
const sections = [
  { id: 'about', label: 'About FloLo' },
  { id: 'market', label: 'Market Opportunity' },
  { id: 'why-invest', label: 'Why Invest' },
  { id: 'video-section', label: 'Client Content' },
  { id: 'team', label: 'Founder Spotlight' },
  { id: 'financials', label: 'Financial Performance' },
  { id: 'investment', label: 'Investment Opportunity' },
  { id: 'investor-types', label: 'Investor Profile' }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{ backgroundColor: '#160749' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="#" className="cursor-pointer">
                <Image
                  src="/images/Logo Purple Landscape.png"
                  alt="FloLo Logo"
                  width={180}
                  height={42}
                  className="h-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  {section.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden"
              style={{ backgroundColor: '#160749' }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-3 py-2 text-white hover:text-gray-200 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.label}
                  </Link>
                ))}
                <div className="px-3 py-2 flex justify-center">
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/images/Logo Purple Landscape.png"
                      alt="FloLo Logo"
                      width={140}
                      height={33}
                      className="h-auto"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}