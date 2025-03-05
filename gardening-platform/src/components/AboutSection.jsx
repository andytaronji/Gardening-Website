'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-green-800 mb-6"
            variants={variants}
          >
            About Gardening Thyme
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 leading-relaxed"
            variants={variants}
          >
            At Gardening Thyme, we believe that a well-designed garden is more than just plants and flowers—it's a sanctuary, a place of beauty and tranquility that enhances your life and property. Our team of passionate garden designers combines horticultural expertise with artistic vision to create outdoor spaces that reflect your personal style and meet your practical needs.
          </motion.p>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            variants={variants}
          >
            Whether you're looking to transform a small urban balcony or design a sprawling estate garden, we approach each project with the same dedication to quality, sustainability, and timeless design. We take the time to understand your vision and bring it to life with meticulous attention to detail.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
