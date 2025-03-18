import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';

export default function FloatImage() {
  return (
    <SectionWrapper id="float-image" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative"
      >
        <Image
          src="/images/Man with shades.png"
          alt="Float therapy experience"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-xl"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <div className="inline-block bg-black/50 backdrop-blur-sm px-8 py-4 rounded-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Zero Gravity Dry Flotation Experience
            </h2>
            <p className="text-lg md:text-xl text-primary font-semibold mt-2">
              Only @ FloLo Holistic
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
} 