'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ExecutiveSummary() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="home">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Reception.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section relative z-10"
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-6"
        >
          Invest in FloLo Holistic:
          <br />
          <span className="text-primary">NYC's Wellness Growth Opportunity</span>
        </motion.h1>

        <motion.div
          variants={childVariants}
          className="prose prose-lg max-w-3xl mb-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg"
        >
          <p className="text-xl text-gray-800">
            FloLo Holistic, NYC's premier holistic wellness center, is{' '}
            <span className="font-semibold text-primary">profitable</span> with{' '}
            <span className="font-semibold">~$650,000</span> in 2024 revenue and{' '}
            <span className="font-semibold">$64,591</span> in net profit.
          </p>
          <p className="text-lg mt-4 text-gray-800">
            We're seeking <span className="font-semibold">$100,000–$150,000</span> to
            secure a new lease, enhance our space, and boost marketing—driving revenue
            to <span className="font-semibold">$1M+</span> within the next 12–18
            months.
          </p>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://floloholistic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            View FloLoHolistic.com
          </a>
          <a
            href="#about"
            className="button-secondary"
          >
            Discover FloLo
          </a>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          variants={containerVariants}
          className="mt-16"
        >
          {/* Desktop view - three separate cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            <motion.div
              variants={childVariants}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="text-3xl font-bold text-primary mb-2">$650K</div>
              <div className="text-gray-600">2024 Revenue</div>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="text-3xl font-bold text-secondary mb-2">9.6%</div>
              <div className="text-gray-600">Net Profit Margin</div>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="text-3xl font-bold text-accent mb-2">$1M+</div>
              <div className="text-gray-600">2027 Revenue Target</div>
            </motion.div>
          </div>

          {/* Mobile view - combined card */}
          <motion.div
            variants={childVariants}
            className="md:hidden bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="text-gray-600">2024 Revenue:</div>
                <div className="text-xl font-bold text-primary">$650K</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-gray-600">Net Profit Margin:</div>
                <div className="text-xl font-bold text-secondary">9.6%</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-gray-600">2027 Target:</div>
                <div className="text-xl font-bold text-accent">$1M+</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
} 