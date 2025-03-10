'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Add JSON-LD structured data for service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Quarterly Cleanup Services',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Gardening Thyme',
    'areaServed': ['Marietta', 'Roswell', 'Alpharetta', 'Woodstock', 'Smyrna', 'Vinings']
  },
  'description': 'Comprehensive quarterly cleanup services tailored to each season. From spring preparation to winter protection, we ensure your property maintains its beauty year-round.',
  'serviceType': 'Property Maintenance',
  'offers': {
    '@type': 'Offer',
    'priceSpecification': {
      '@type': 'PriceSpecification',
      'priceCurrency': 'USD',
      'price': '300-2500'
    }
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Quarterly Cleanup Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Spring Cleanup',
          'description': 'Remove winter debris, prune dead branches, and prepare garden beds for new growth'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Summer Maintenance',
          'description': 'Manage weeds, trim hedges, and ensure proper irrigation during peak growing season'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Fall Cleanup',
          'description': 'Remove fallen leaves, protect sensitive plants, and clean out garden beds for winter'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Winter Preparation',
          'description': 'Wrap delicate plants, apply winter mulch, and perform final maintenance tasks'
        }
      }
    ]
  }
}

const images = [
  {
    id: 1,
    src: '/images/portfolio/placeholder1.jpg',
    alt: 'Spring Cleanup',
    description: 'Our spring cleanup service prepares your property for the growing season. We remove winter debris, prune dead branches, and prepare garden beds for new growth.'
  },
  {
    id: 2,
    src: '/images/portfolio/placeholder2.jpg',
    alt: 'Summer Maintenance',
    description: 'Summer maintenance focuses on keeping your property looking its best during peak growing season. We manage weeds, trim hedges, and ensure proper irrigation.'
  },
  {
    id: 3,
    src: '/images/portfolio/placeholder3.jpg',
    alt: 'Fall Cleanup',
    description: 'Our comprehensive fall cleanup service prepares your property for winter. We remove fallen leaves, protect sensitive plants, and clean out garden beds.'
  },
  {
    id: 4,
    src: '/images/portfolio/placeholder4.jpg',
    alt: 'Winter Preparation',
    description: 'Winter preparation services ensure your property is protected during the cold months. We wrap delicate plants, apply winter mulch, and perform final maintenance tasks.'
  }
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function QuarterlyCleanupPage() {
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
          <h1 className="text-4xl font-bold text-green-800 mb-6">Quarterly Cleanup Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your property pristine throughout the year with our seasonal cleanup services. We provide comprehensive care tailored to each season\'s unique requirements.
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
          <h2 className="text-3xl font-bold text-green-800 mb-6">Ready for Year-Round Beauty?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your quarterly cleanup services today and ensure your property looks its best in every season.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Schedule Now
          </a>
        </motion.div>
      </div>
    </>
  );
} 