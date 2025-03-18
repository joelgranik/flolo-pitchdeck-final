'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'
import { useState } from 'react'
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

const chartData = {
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
      type: 'linear' as const,
      beginAtZero: true,
      ticks: {
        callback: function(value: string | number) {
          return `$${value}T`
        },
      },
    },
  },
}

interface ChartContent {
  type: 'chart'
  title: string
  description: string
}

interface BulletContent {
  type: 'bullets'
  title: string
  points: string[]
}

interface MarketCard {
  name: string
  description: string
  icon: string
  content: ChartContent | BulletContent
}

const marketCards: MarketCard[] = [
  {
    name: 'Growing Market',
    description: 'Global wellness market valued at $4.4 trillion and rising',
    icon: '📈',
    content: {
      type: 'chart',
      title: 'Global Wellness Market Growth',
      description: 'Steady growth in the wellness sector from 2020-2024'
    }
  },
  {
    name: 'NYC Advantage',
    description: 'Prime location in health-conscious Manhattan market',
    icon: '🗽',
    content: {
      type: 'bullets',
      title: '',
      points: [
        'Large, affluent, health-conscious population',
        'High stress levels create demand for wellness services',
        'Dense urban environment ideal for wellness center',
        'Strong market for corporate wellness programs',
        'Growing demand for holistic health solutions'
      ]
    }
  },
  {
    name: 'Post-Pandemic Surge',
    description: 'Increased demand for mental and physical wellness services',
    icon: '🌟',
    content: {
      type: 'bullets',
      title: '',
      points: [
        'Greater focus on mental health and stress reduction',
        'Increased awareness of immune system health',
        'Rising demand for holistic wellness solutions',
        'Growing interest in preventative health practices',
        'Surge in corporate wellness programs'
      ]
    }
  },
  {
    name: 'Comprehensive Offering',
    description: 'Multiple revenue streams under one roof',
    icon: '🏢',
    content: {
      type: 'bullets',
      title: 'Our Comprehensive Services',
      points: [
        '30 yoga and meditation classes weekly',
        'Popular venue for all kinds of events and gatherings',
        'A wide variety of non-practitioner healing rooms'
      ]
    }
  }
]

export default function MarketOpportunity() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <SectionWrapper id="market" className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Market Opportunity
        </h2>
        <p className="text-lg text-gray-600">
          FloLo is positioned at the intersection of multiple growing wellness trends, backed by strong
          market fundamentals and increasing demand.
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-8">
        {marketCards.map((card, index) => (
          <div key={card.name} className="relative">
            <motion.div
              className="p-6 rounded-lg bg-white hover:bg-primary/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="font-semibold mb-2">{card.name}</h3>
              <p className="text-sm text-gray-600">
                {card.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
              className="mt-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                {card.content.title && (
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {card.content.title}
                  </h3>
                )}
                {card.content.type === 'chart' ? (
                  <div className="w-full h-[300px]">
                    <Bar options={chartOptions} data={chartData} />
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {card.content.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
        {/* Market Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {marketCards.map((card, index) => (
            <motion.div
              key={card.name}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 relative ${
                activeCard === index
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-primary/5'
              }`}
              onClick={(e) => setActiveCard(index)}
              whileHover={{ scale: activeCard === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="font-semibold mb-2">{card.name}</h3>
              <p className={`text-sm ${
                activeCard === index ? 'text-white/90' : 'text-gray-600'
              }`}>
                {card.description}
              </p>
              {/* Click indicator */}
              <div className={`absolute top-4 right-4 ${
                activeCard === index ? 'text-white' : 'text-primary'
              } animate-pulse`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {marketCards[activeCard].content.title && (
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {marketCards[activeCard].content.title}
              </h3>
            )}
            {marketCards[activeCard].content.type === 'chart' ? (
              <div className="w-full h-[400px]">
                <Bar options={chartOptions} data={chartData} />
              </div>
            ) : (
              <ul className="space-y-4">
                {marketCards[activeCard].content.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
} 