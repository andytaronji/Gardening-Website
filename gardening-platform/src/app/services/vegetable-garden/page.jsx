'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    src: '/images/portfolio/placeholder1.jpg',
    alt: 'Garden Planning',
    description: 'Our expert garden planning services help you create the perfect vegetable garden layout. We consider sunlight, soil conditions, and your specific preferences to maximize your garden\'s potential.'
  },
  {
    id: 2,
    src: '/images/portfolio/placeholder2.jpg',
    alt: 'Soil Preparation',
    description: 'Proper soil preparation is crucial for a successful vegetable garden. We test and amend your soil to create the optimal growing environment for your chosen vegetables.'
  },
  {
    id: 3,
    src: '/images/portfolio/placeholder3.jpg',
    alt: 'Planting & Maintenance',
    description: 'From seed to harvest, we provide comprehensive planting and maintenance services. Our team ensures your vegetable garden receives the care it needs to thrive throughout the growing season.'
  },
  {
    id: 4,
    src: '/images/portfolio/placeholder4.jpg',
    alt: 'Harvest & Season Extension',
    description: 'Maximize your garden\'s productivity with our harvest and season extension services. We help you extend the growing season and implement techniques to increase your vegetable yields.'
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

export default function VegetableGardenPage() {
  return (
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
  );
} 