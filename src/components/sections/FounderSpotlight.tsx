'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'

const milestones = [
  {
    year: '1990s',
    title: 'Early Entrepreneurship',
    description: 'Started first business ventures',
  },
  {
    year: '2000s',
    title: 'Legal & Religious Studies',
    description: 'Graduated from Cardozo Law School and studied to become a rabbi',
  },
  {
    year: '2012',
    title: 'Holistic Journey',
    description: 'Became a licensed acupuncturist',
  },
  {
    year: '2015',
    title: 'FloLo Founded',
    description: 'Established NYC\'s first dedicated float center',
  },
  {
    year: '2024',
    title: 'Growth Milestone',
    description: 'Achieved $650K annual revenue',
  },
]

const expertise = [
  {
    area: 'Entrepreneurship',
    years: '30+',
    icon: '🚀',
  },
  {
    area: 'Acupuncture',
    years: '12+',
    icon: '🌿',
  },
  {
    area: 'Wellness Industry',
    years: '10+',
    icon: '🧘',
  },
]

export default function FounderSpotlight() {
  return (
    <SectionWrapper id="team" className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Meet Our Founder
        </h2>
        <p className="text-lg text-gray-600">
          Joel Granik brings decades of entrepreneurial experience and holistic
          wellness expertise to FloLo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Founder Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Joel Granik</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              A visionary entrepreneur with a unique blend of business acumen and
              holistic wellness expertise, Joel has dedicated his career to making
              wellness accessible to all.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.area}
                  className="text-center p-4 bg-primary/5 rounded-lg"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-primary">{item.years}</div>
                  <div className="text-sm text-gray-600">{item.area}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vision & Mission
            </h3>
            <p className="text-gray-600 mb-6">
              Joel's mission is to create a comprehensive wellness sanctuary bridging
              mind, body, and community, making holistic health accessible to all New
              Yorkers.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Proven track record of success</span>
            </div>
          </motion.div>
        </div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Professional Journey
          </h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                {index !== milestones.length - 1 && (
                  <div className="absolute h-full w-0.5 bg-primary/20 left-[19px] top-8" />
                )}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="text-primary font-semibold text-sm">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {milestone.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {milestone.description}
                    </div>
                    <div className="text-xs text-gray-500">{milestone.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
} 