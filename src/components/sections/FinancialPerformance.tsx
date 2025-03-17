'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const actualData = {
  labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
  datasets: [
    {
      label: 'Revenue',
      data: [150000, 165000, 170000, 165000],
      borderColor: '#4CAF50',
      backgroundColor: '#4CAF50',
    },
    {
      label: 'Net Profit',
      data: [15000, 16500, 17000, 16091],
      borderColor: '#2196F3',
      backgroundColor: '#2196F3',
    },
  ],
}

const projectedData = {
  labels: ['2024', '2025', '2026', '2027'],
  datasets: [
    {
      label: 'Projected Revenue',
      data: [650000, 850000, 950000, 1000000],
      borderColor: '#4CAF50',
      backgroundColor: '#4CAF50',
    },
    {
      label: 'Projected Net Profit',
      data: [64591, 85000, 95000, 100000],
      borderColor: '#2196F3',
      backgroundColor: '#2196F3',
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => `$${value.toLocaleString()}`,
      },
    },
  },
}

export default function FinancialPerformance() {
  const [showProjected, setShowProjected] = useState(false)

  return (
    <SectionWrapper id="financials" className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Financial Performance
        </h2>
        <p className="text-lg text-gray-600">
          FloLo Holistic has demonstrated strong financial performance, with
          significant growth potential ahead.
        </p>
      </div>

      {/* Chart Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              !showProjected
                ? 'bg-primary text-white'
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setShowProjected(false)}
          >
            2024 Actual
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              showProjected
                ? 'bg-primary text-white'
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setShowProjected(true)}
          >
            Future Projections
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-16">
        <Line
          options={chartOptions}
          data={showProjected ? projectedData : actualData}
        />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl font-bold text-primary mb-2">$650K</div>
          <div className="text-gray-600">2024 Revenue</div>
          <div className="text-sm text-gray-500 mt-2">
            Steady growth across all services
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl font-bold text-secondary mb-2">9.6%</div>
          <div className="text-gray-600">Net Profit Margin</div>
          <div className="text-sm text-gray-500 mt-2">
            Strong profitability in competitive market
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl font-bold text-accent mb-2">30%+</div>
          <div className="text-gray-600">Projected Growth</div>
          <div className="text-sm text-gray-500 mt-2">
            Expected annual growth rate through 2027
          </div>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Detailed financial statements available upon request
        </p>
      </div>
    </SectionWrapper>
  )
} 