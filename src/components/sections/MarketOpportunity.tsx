'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const marketData = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Global Wellness Market (Trillion USD)',
      data: [3.7, 4.0, 4.2, 4.4, 4.7],
      backgroundColor: '#4CAF50',
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Global Wellness Market Growth',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => `$${value}T`,
      },
    },
  },
}

const advantages = [
  {
    title: 'Growing Market',
    description: 'Global wellness market valued at $4.4 trillion and rising',
    icon: '📈',
  },
  {
    title: 'NYC Advantage',
    description: 'Prime location in health-conscious Manhattan market',
    icon: '🗽',
  },
  {
    title: 'Post-Pandemic Surge',
    description: 'Increased demand for mental and physical wellness services',
    icon: '🌟',
  },
  {
    title: 'Comprehensive Offering',
    description: 'Multiple revenue streams under one roof',
    icon: '🏢',
  },
]

export default function MarketOpportunity() {
  return (
    <SectionWrapper id="market">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Market Opportunity
        </h2>
        <p className="text-lg text-gray-600">
          FloLo is positioned at the intersection of multiple growing wellness trends,
          backed by strong market fundamentals and increasing demand.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Market Size Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Bar options={chartOptions} data={marketData} />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 gap-6">
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.title}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl">{advantage.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NYC Market Focus */}
      <div className="bg-primary/5 rounded-lg p-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why NYC is the Perfect Market
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 text-primary flex-shrink-0"
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
              <span>Large, affluent, health-conscious population</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 text-primary flex-shrink-0"
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
              <span>High stress levels create demand for wellness services</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 text-primary flex-shrink-0"
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
              <span>Strong corporate wellness program potential</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
} 