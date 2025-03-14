'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
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
        <div className="bg-green-50 p-8 rounded-lg shadow-md">
          <motion.h2 
            className="text-3xl font-semibold text-green-800 mb-4 text-center"
            variants={variants}
          >
            Ready to Transform Your Garden?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto text-center"
            variants={variants}
          >
            Book a consultation with our expert garden designers and take the first step toward creating the garden of your dreams.
          </motion.p>
          <motion.div 
            className="flex justify-center"
            variants={variants}
          >
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Contact Us Today!
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
