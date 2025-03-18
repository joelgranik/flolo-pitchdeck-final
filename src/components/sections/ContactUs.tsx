'use client';

import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Atrium home page.png')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-48 pb-48">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Contact Us
        </h2>

        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-8">
            Interested in learning more about this investment opportunity? Contact us directly using the information below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:joel@floloholistic.com" className="text-gray-700 hover:text-primary">
                joel@floloholistic.com
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:(917) 439-9911" className="text-gray-700 hover:text-primary">
                (917) 439-9911
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700">
                39 West 56th Street, Penthouse, NYC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 