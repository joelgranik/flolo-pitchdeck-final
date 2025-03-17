'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  id: string
  className?: string
  noPadding?: boolean
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  noPadding = false,
}: SectionWrapperProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id={id}
      className={`relative ${noPadding ? '' : 'py-16 md:py-24'} ${className}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className={noPadding ? '' : 'section'}
      >
        {children}
      </motion.div>
    </section>
  )
} 