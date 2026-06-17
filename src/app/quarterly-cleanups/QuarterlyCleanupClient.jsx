'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function QuarterlyCleanupClient() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-forest-green mb-6">Quarterly Cleanup Services</h1>
          <p className="text-xl text-forest-green leading-relaxed">
            Keep your garden pristine year-round with our seasonal maintenance program
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-mist"
          >
            <Image
              src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:eco,f_auto,w_1200/v1747170894/Quarterly_Cleanup_pwdlis.jpg"
              alt="Professional quarterly garden cleanup services in Marietta and Atlanta"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={72}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-charcoal">Comprehensive Seasonal Care</h2>
            <p className="text-forest-green">
              Our quarterly cleanup service ensures your garden stays beautiful and healthy throughout the year. 
              We provide thorough maintenance aligned with each season's specific needs.
            </p>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Seasonal debris removal and garden bed cleanup</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Pruning and shaping of shrubs and small trees</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mulch refreshing and soil amendment</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-cloud rounded-[6px] p-8 md:p-12 mb-20 border border-mist"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">Seasonal Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4v16M4 20h16M4 4h16M4 12h16M12 4v16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Spring</h3>
              <p className="text-forest-green/70">Prepare your garden for new growth with spring cleanup and mulching</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Summer</h3>
              <p className="text-forest-green/70">Maintain garden health with trimming and pest management</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Fall</h3>
              <p className="text-forest-green/70">Prepare for winter with leaf removal and plant protection</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Winter</h3>
              <p className="text-forest-green/70">Protect your garden with winter maintenance and pruning</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-forest p-8 rounded-[6px] text-center">
            <h2 className="text-3xl font-semibold text-cream mb-4">Ready to Schedule Your Cleanup?</h2>
            <p className="text-lg text-cream/80 mb-6 max-w-3xl mx-auto">
              Contact us to schedule your seasonal garden cleanup and keep your property looking its best year-round.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-cloud text-forest font-semibold py-3 px-8 rounded-[4px] hover:bg-sage-tint transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
