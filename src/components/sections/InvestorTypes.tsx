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
          Types of Investors
        </h2>
        <p className="text-lg text-gray-600">
          FloLo welcomes various types of investors who can contribute to our growth
          and success.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Investor Type Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
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

        {/* Investment Summary */}
        <div className="space-y-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Investment Summary
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2v2m0 16v2"
                  />
                </svg>
                <div>
                  <span className="font-semibold">Investment Ask:</span>
                  <br />
                  $100,000 - $150,000
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                <div>
                  <span className="font-semibold">Equity Offering:</span>
                  <br />
                  Significant stake with board representation
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <div>
                  <span className="font-semibold">Expected Returns:</span>
                  <br />
                  ROI within 12-18 months
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-primary/5 p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-900 mb-2">
              Next Steps
            </h4>
            <p className="text-gray-600 mb-4">
              Interested in learning more? Schedule a meeting to discuss investment
              opportunities.
            </p>
            <a href="#contact" className="button-primary w-full text-center">
              Schedule Discussion
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
} 