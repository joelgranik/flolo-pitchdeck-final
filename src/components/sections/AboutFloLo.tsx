'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'
import { useState } from 'react'
import Image from 'next/image'

const services = [
  {
    name: 'Floatation Therapy',
    description: 'Experience deep relaxation in our state-of-the-art sensory deprivation tanks.',
    icon: '🌊',
    image: '/images/d7d9b8_a1d54011ecf743b5965edad40fb87954~mv2.gif'
  },
  {
    name: 'Cold Plunge & Steam Room',
    description: 'Invigorating cold therapy for recovery and immune system boost.',
    icon: '❄️',
    image: '/images/plunge%20room.jpeg'
  },
  {
    name: 'Infrared Sauna',
    description: 'Deep healing heat therapy for detoxification and relaxation.',
    icon: '🔥',
    image: '/images/Infrared.png'
  },
  {
    name: 'Salt Cave',
    description: 'Therapeutic salt therapy for respiratory health and relaxation.',
    icon: '🧂',
    image: '/images/salt%20cave.png'
  },
  {
    name: 'Yoga',
    description: 'Group and private yoga sessions for mind-body balance.',
    icon: '🧘',
    image: '/images/yoga.jpg'
  },
  {
    name: 'Acupuncture',
    description: 'Traditional Chinese medicine for holistic healing and wellness.',
    icon: '🌿',
    image: '/images/Acupuncture_Collage.webp'
  },
  {
    name: 'Massage & Cupping',
    description: 'Therapeutic massage treatments for relaxation and recovery.',
    icon: '👐',
    image: '/images/cupping.webp'
  },
  {
    name: 'Event Rentals',
    description: 'Private space rentals for wellness events and corporate retreats.',
    icon: '🏢',
    image: '/images/atrium-concert.png'
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

      {/* Mobile Layout */}
      <div className="md:hidden">
        {services.map((service, index) => (
          <div key={service.name} className="mb-8">
            <motion.div
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                activeService === index
                  ? 'bg-primary text-white shadow-lg'
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
            
            {activeService === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-[250px] relative rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
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

        {/* Service Image Display */}
        <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] relative rounded-lg overflow-hidden"
          >
            <Image
              src={services[activeService].image}
              alt={services[activeService].name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-xl font-bold text-white">
                {services[activeService].name}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}