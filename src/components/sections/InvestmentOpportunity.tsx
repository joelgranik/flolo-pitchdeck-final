'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const InvestmentOpportunity = () => {
  const investmentDetails = {
    totalRaise: '$2.5M',
    minInvestment: '$25,000',
    valuation: '$10M',
    equity: '20%',
    useOfFunds: [
      'Expansion to 3 new locations',
      'Technology platform development',
      'Marketing and brand awareness',
      'Working capital',
      'Team expansion'
    ]
  };

  return (
    <section id="investment" className="section bg-gray-50">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Investment Opportunity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Investment Terms</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium">Total Raise:</span>
                <span className="block text-2xl text-primary">{investmentDetails.totalRaise}</span>
              </li>
              <li>
                <span className="font-medium">Minimum Investment:</span>
                <span className="block text-2xl text-primary">{investmentDetails.minInvestment}</span>
              </li>
              <li>
                <span className="font-medium">Valuation:</span>
                <span className="block text-2xl text-primary">{investmentDetails.valuation}</span>
              </li>
              <li>
                <span className="font-medium">Equity Offered:</span>
                <span className="block text-2xl text-primary">{investmentDetails.equity}</span>
              </li>
            </ul>
          </div>
          
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
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-primary text-lg"
        >
          Request Investment Details
        </motion.button>
      </motion.div>
    </section>
  );
};

export default InvestmentOpportunity; 