'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'
import { useState } from 'react'

const investorTypes = [
  {
    title: 'Financial Investors',
    description: 'Looking for profitable, mission-driven businesses',
    benefits: [
      'Strong ROI potential',
      'Proven business model',
      'Clear exit strategy',
    ],
    icon: '💼',
  },
  {
    title: 'Strategic Wellness Partners',
    description: 'Wellness practitioners seeking to expand their reach',
    benefits: [
      'Access to established clientele',
      'Shared resources and facilities',
      'Cross-promotion opportunities',
    ],
    icon: '🧘',
  },
  {
    title: 'Retail Businesses',
    description: 'Wellness product brands looking for physical presence',
    benefits: [
      'Direct access to target market',
      'Brand visibility',
      'Product testing opportunities',
    ],
    icon: '🏪',
  },
  {
    title: 'Healthcare Professionals',
    description: 'Medical practitioners interested in holistic wellness',
    benefits: [
      'Integrated care opportunities',
      'Wellness-focused environment',
      'Professional network expansion',
    ],
    icon: '👨‍⚕️',
  },
  {
    title: 'Impact Investors',
    description: 'Seeking both financial returns and community impact',
    benefits: [
      'Community health improvement',
      'Sustainable business model',
      'Social impact metrics',
    ],
    icon: '🌱',
  },
]

export default function InvestorTypes() {
  const [activeType, setActiveType] = useState(0)

  return (
    <SectionWrapper id="investor-types">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Investor Profile
        </h2>
        <p className="text-lg text-gray-600">
          FloLo welcomes various types of investors who can contribute to our growth
          and success.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Investor Type Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {investorTypes.map((type, index) => (
            <motion.div
              key={type.title}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                activeType === index
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-primary/5'
              }`}
              onClick={() => setActiveType(index)}
              whileHover={{ scale: activeType === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className={`text-sm mb-4 ${
                activeType === index ? 'text-white/90' : 'text-gray-600'
              }`}>
                {type.description}
              </p>
              <ul className="space-y-2">
                {type.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex items-center text-sm ${
                      activeType === index ? 'text-white/90' : 'text-gray-500'
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 mr-2 flex-shrink-0 ${
                        activeType === index ? 'text-white' : 'text-primary'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
} 