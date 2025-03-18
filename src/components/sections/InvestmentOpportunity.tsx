'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const InvestmentOpportunity = () => {
  const investmentDetails = {
    useOfFunds: [
      'Secure a new lease',
      'Upgrade the space',
      'Marketing and brand awareness',
      'Working capital'
    ]
  };

  return (
    <section id="investment" className="section bg-gray-50">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Investment Opportunity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Use of Funds */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Use of Funds</h3>
            <ul className="space-y-3">
              {investmentDetails.useOfFunds.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Investment Summary</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2v2m0 16v2"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Investment Ask:</div>
                  <div>$100,000 - $150,000</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Equity Offering:</div>
                  <div>Significant stake with board representation</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-semibold">Expected Returns:</div>
                  <div>ROI within 12-18 months</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvestmentOpportunity; 