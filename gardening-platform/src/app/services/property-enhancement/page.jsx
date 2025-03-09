'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    src: '/images/portfolio/placeholder1.jpg',
    alt: 'Landscape Design',
    description: 'Transform your outdoor space with our expert landscape design services. We create beautiful, functional landscapes that enhance your property\'s aesthetic appeal and value.'
  },
  {
    id: 2,
    src: '/images/portfolio/placeholder2.jpg',
    alt: 'Hardscaping Features',
    description: 'Add character to your property with our custom hardscaping solutions. From patios and walkways to retaining walls and water features, we bring your vision to life.'
  },
  {
    id: 3,
    src: '/images/portfolio/placeholder3.jpg',
    alt: 'Garden Beds & Borders',
    description: 'Enhance your property with professionally designed and installed garden beds and borders. We select plants that thrive in your specific environment and create year-round interest.'
  },
  {
    id: 4,
    src: '/images/portfolio/placeholder4.jpg',
    alt: 'Lighting & Irrigation',
    description: 'Complete your landscape with professional lighting and irrigation systems. We design and install efficient solutions that highlight your property\'s beauty while ensuring proper plant care.'
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

export default function PropertyEnhancementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-6">Property Enhancement Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Elevate your property\'s beauty and functionality with our comprehensive enhancement services. We combine artistic design with practical solutions to create outdoor spaces you\'ll love.
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
        <h2 className="text-3xl font-bold text-green-800 mb-6">Ready to Enhance Your Property?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact us today to discuss your property enhancement project and receive a personalized consultation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Start Your Project
        </a>
      </motion.div>
    </div>
  );
} 