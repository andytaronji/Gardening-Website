'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    src: '/images/portfolio/placeholder1.jpg',
    alt: 'Professional Groundskeeping',
    description: 'Our professional groundskeeping services ensure your property maintains its pristine appearance year-round. We handle everything from lawn maintenance to seasonal care, creating an environment that enhances your property\'s value and appeal.'
  },
  {
    id: 2,
    src: '/images/portfolio/placeholder2.jpg',
    alt: 'Lawn Care Excellence',
    description: 'Expert lawn care is at the heart of our groundskeeping services. We utilize state-of-the-art equipment and proven techniques to keep your lawn healthy, green, and beautiful throughout every season.'
  },
  {
    id: 3,
    src: '/images/portfolio/placeholder3.jpg',
    alt: 'Seasonal Maintenance',
    description: 'Our seasonal maintenance programs are tailored to address the specific needs of your property as they change throughout the year. From spring cleanup to winter preparation, we\'ve got you covered.'
  },
  {
    id: 4,
    src: '/images/portfolio/placeholder4.jpg',
    alt: 'Detail-Oriented Care',
    description: 'We pride ourselves on attention to detail in every aspect of groundskeeping. From precise edging to careful pruning, our team ensures every corner of your property receives expert care and attention.'
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

export default function GroundskeepingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-6">Professional Groundskeeping Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the difference professional groundskeeping can make. Our comprehensive services keep your property looking its best throughout the year.
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
        <h2 className="text-3xl font-bold text-green-800 mb-6">Ready to Transform Your Property?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact us today to discuss your groundskeeping needs and receive a customized maintenance plan.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
} 