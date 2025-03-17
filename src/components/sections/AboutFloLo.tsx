'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'
import { useState } from 'react'

const services = [
  {
    name: 'Floatation Therapy',
    description: 'Experience deep relaxation in our state-of-the-art sensory deprivation tanks.',
    icon: '🌊',
  },
  {
    name: 'Acupuncture',
    description: 'Traditional Chinese medicine for holistic healing and wellness.',
    icon: '🌿',
  },
  {
    name: 'Massage',
    description: 'Therapeutic massage treatments for relaxation and recovery.',
    icon: '👐',
  },
  {
    name: 'Yoga',
    description: 'Group and private yoga sessions for mind-body balance.',
    icon: '🧘',
  },
  {
    name: 'Infrared Sauna',
    description: 'Deep healing heat therapy for detoxification and relaxation.',
    icon: '🔥',
  },
  {
    name: 'Cold Plunge',
    description: 'Invigorating cold therapy for recovery and immune system boost.',
    icon: '❄️',
  },
]

export default function AboutFloLo() {
  const [activeService, setActiveService] = useState(0)

  return (
    <SectionWrapper id="about" className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About FloLo Holistic
        </h2>
        <p className="text-lg text-gray-600">
          Established in 2015 as NYC's first sensory deprivation center, FloLo has
          evolved into a comprehensive wellness sanctuary in the heart of Manhattan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                activeService === index
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-primary/5'
              }`}
              onClick={() => setActiveService(index)}
              whileHover={{ scale: activeService === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="font-semibold mb-2">{service.name}</h3>
              <p className={`text-sm ${
                activeService === index ? 'text-white/90' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="font-semibold text-gray-900">2015</div>
              <p className="text-gray-600">Founded as NYC's first dedicated float center</p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="font-semibold text-gray-900">2018</div>
              <p className="text-gray-600">Expanded services to include acupuncture and massage</p>
            </div>
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="font-semibold text-gray-900">2021</div>
              <p className="text-gray-600">Added yoga studio and infrared sauna</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="font-semibold text-gray-900">2024</div>
              <p className="text-gray-600">Achieved $650K revenue milestone</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
} 