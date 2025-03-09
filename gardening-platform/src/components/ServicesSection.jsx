'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-green-800 mb-12"
          variants={itemVariants}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="relative h-60">
              <Image 
                src="/images/consultations/garden-design-1.jpg" 
                alt="Garden Design" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Garden Design</h3>
              <p className="text-gray-600 mb-4">
                Professional garden design consultations to transform your outdoor space into a beautiful oasis that reflects your personal style and meets your practical needs.
              </p>
              <Link href="/garden-design" className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center">
                Learn more 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="relative h-60">
              <Image 
                src="/images/consultations/garden-design-2.jpg" 
                alt="Plant Care" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Groundskeeping</h3>
              <p className="text-gray-600 mb-4">
                Expert advice on plant selection, care, maintenance, and troubleshooting to ensure your garden thrives year-round with minimal effort.
              </p>
              <Link href="/services/groundskeeping" className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center">
                Learn more 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="relative h-60">
              <Image 
                src="/images/consultations/garden-design-3.jpg" 
                alt="Seasonal Maintenance" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Quarterly Cleanups</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive seasonal maintenance services to keep your garden looking its best throughout the year, from spring planting to winter protection.
              </p>
              <Link href="/services/quarterly-cleanup" className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center">
                Learn more 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
