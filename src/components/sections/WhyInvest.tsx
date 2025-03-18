'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'

const reasons = [
  {
    title: 'Proven Track Record',
    description: '10+ years of successful operation with consistent growth',
    icon: '📈',
    details: [
      'Profitable in 2024',
      'Strong customer retention',
      'Established brand presence',
    ],
  },
  {
    title: 'Prime NYC Location',
    description: 'Strategic Midtown Manhattan presence with high foot traffic',
    icon: '🗽',
    details: [
      'Affluent customer base',
      'Business district proximity',
      'Excellent accessibility',
    ],
  },
  {
    title: 'Market Growth',
    description: 'Operating in the expanding $4.4T wellness industry',
    icon: '💹',
    details: [
      'Post-pandemic wellness focus',
      'Growing health consciousness',
      'Strong market fundamentals',
    ],
  },
  {
    title: 'Multiple Revenue Streams',
    description: 'Diversified services creating stable income',
    icon: '💰',
    details: [
      'Wellness Services',
      'Healing Rooms',
      'Retail Products',
      'Venue Rentals'
    ],
  },
]

const highlights = [
  {
    stat: '$650K',
    label: '2024 Revenue',
  },
  {
    stat: '9.6%',
    label: 'Net Profit Margin',
  },
  {
    stat: '$1M+',
    label: '2027 Target',
  },
  {
    stat: '30%+',
    label: 'Annual Growth',
  },
]

export default function WhyInvest() {
  return (
    <SectionWrapper id="why-invest" className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Invest in FloLo?
        </h2>
        <p className="text-lg text-gray-600">
          A unique opportunity to join NYC's premier wellness center with proven
          profitability and strong growth potential.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {item.stat}
            </div>
            <div className="text-gray-600">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Investment Reasons */}
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 mb-4">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm text-gray-500">
                      <svg
                        className="h-4 w-4 text-primary mr-2 flex-shrink-0"
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
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
} 