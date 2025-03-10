'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Add metadata for vegetable garden services page
export const metadata = {
  title: 'Professional Vegetable Garden Design & Installation | Atlanta Area',
  description: 'Expert vegetable garden design and installation services in Marietta, Roswell & Atlanta. Custom raised beds, irrigation systems, and organic gardening solutions.',
  keywords: ['vegetable garden design', 'raised bed installation', 'organic gardening Atlanta', 'edible garden design', 'kitchen garden installation', 'Marietta vegetable gardens'],
  alternates: {
    canonical: '/services/vegetable-garden'
  }
}

// Add JSON-LD structured data for service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Vegetable Garden Design & Installation',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Gardening Thyme',
    'areaServed': ['Marietta', 'Roswell', 'Alpharetta', 'Woodstock', 'Smyrna', 'Vinings']
  },
  'description': 'Professional vegetable garden design and installation services including raised beds, irrigation systems, and organic gardening solutions.',
  'serviceType': 'Garden Design and Installation',
  'offers': {
    '@type': 'Offer',
    'priceSpecification': {
      '@type': 'PriceSpecification',
      'priceCurrency': 'USD',
      'price': '500-5000'
    }
  }
}

const images = [
// ... rest of existing code ...
] 

export default function VegetableGardenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-800 mb-6">Vegetable Garden Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the joy and satisfaction of growing your own fresh, organic vegetables. Our expert services help you create and maintain a thriving vegetable garden that provides fresh produce throughout the season.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">{image.alt}</h3>
                <p className="text-gray-600 leading-relaxed">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Ready to Start Your Vegetable Garden?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to begin planning your perfect vegetable garden and start growing your own fresh produce.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Growing
          </a>
        </motion.div>
      </div>
    </>
  );
} 