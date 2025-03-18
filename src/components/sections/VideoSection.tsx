import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const videos = [
  '/videos/flolo-video.mp4',
  '/videos/flolo-video2.mp4',
  '/videos/flolo-video3.mp4',
  '/videos/flolo-video4.mp4'
];

export default function VideoSection() {
  return (
    <SectionWrapper id="video-section" className="py-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Client Generated Content
        </h2>
        <p className="text-lg text-gray-600">
          Real experiences shared by our community
        </p>
      </motion.div>

      {/* Videos Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((videoSrc, index) => (
            <div key={videoSrc} className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social Media Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">6,000+</div>
            <div className="text-lg text-gray-600">Instagram Followers</div>
            <div className="text-sm text-gray-500">@floloholistic</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">25,000+</div>
            <div className="text-lg text-gray-600">Client Database</div>
            <div className="text-sm text-gray-500">Active Email Subscribers</div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
} 