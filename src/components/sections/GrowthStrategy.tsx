'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const fundAllocationData = {
  labels: ['New Lease', 'Facility Upgrades', 'Marketing', 'Contingency'],
  datasets: [
    {
      data: [50000, 50000, 30000, 20000],
      backgroundColor: [
        '#4CAF50',
        '#2196F3',
        '#8D6E63',
        '#9E9E9E',
      ],
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}

const strategies = [
  {
    title: 'Secure Prime Location',
    description: 'New lease in Midtown Manhattan to maximize accessibility and visibility',
    icon: '🏢',
    details: [
      'High foot traffic area',
      'Close to business districts',
      'Excellent public transport access',
    ],
  },
  {
    title: 'Enhance Facilities',
    description: 'Upgrade and expand our wellness offerings',
    icon: '⭐',
    details: [
      'New float tanks',
      'Sauna enhancements',
      'Wellness lounge creation',
    ],
  },
  {
    title: 'Marketing Push',
    description: 'Targeted digital campaigns and community events',
    icon: '📱',
    details: [
      'Social media campaigns',
      'Corporate wellness partnerships',
      'Community wellness events',
    ],
  },
  {
    title: 'Strategic Partnerships',
    description: 'Collaborate with complementary wellness providers',
    icon: '🤝',
    details: [
      'Mental health professionals',
      'Wellness product brands',
      'Corporate wellness programs',
    ],
  },
]

export default function GrowthStrategy() {
  return (
    <SectionWrapper id="growth">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Growth Strategy
        </h2>
        <p className="text-lg text-gray-600">
          Our comprehensive plan to reach $1M+ in revenue by leveraging strategic
          investments and partnerships.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Fund Allocation Chart */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Investment Allocation
          </h3>
          <div className="max-w-sm mx-auto">
            <Doughnut options={chartOptions} data={fundAllocationData} />
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            Total Investment Ask: $100,000 - $150,000
          </div>
        </div>

        {/* Growth Strategies */}
        <div className="space-y-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{strategy.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {strategy.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-gray-500">
                        <svg
                          className="h-4 w-4 text-primary mr-2"
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
      </div>

    </SectionWrapper>
  )
} 