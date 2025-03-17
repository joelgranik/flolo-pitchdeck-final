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
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50" id="home">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#4CAF50_1px,transparent_1px)] [background-size:16px_16px]" />
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
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Invest in FloLo Holistic:
          <br />
          <span className="text-primary">NYC's Wellness Growth Opportunity</span>
        </motion.h1>

        <motion.div
          variants={childVariants}
          className="prose prose-lg text-gray-600 max-w-3xl mb-8"
        >
          <p className="text-xl">
            FloLo Holistic, NYC's premier holistic wellness center, is{' '}
            <span className="font-semibold text-primary">profitable</span> with{' '}
            <span className="font-semibold">~$650,000</span> in 2024 revenue and{' '}
            <span className="font-semibold">$64,591</span> in net profit.
          </p>
          <p className="text-lg mt-4">
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
            href="#invest"
            className="button-primary"
          >
            Learn More About Investing
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
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
        </motion.div>
      </motion.div>
    </section>
  )
} 