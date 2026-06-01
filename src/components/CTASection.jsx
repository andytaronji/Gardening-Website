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
      className="py-20 bg-charcoal"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-semibold text-cream mb-4 text-center"
            variants={variants}
          >
            Ready to Transform Your Garden?
          </motion.h2>
          <motion.p 
            className="text-lg text-cream/80 mb-6 max-w-3xl mx-auto text-center"
            variants={variants}
          >
            Book a consultation with our expert garden designers and take the first step toward creating the garden of your dreams.
          </motion.p>
          <motion.div 
            className="flex justify-center"
            variants={variants}
          >
            <Link href="/contact" className="bg-cream text-charcoal font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg">
              Contact Us Today!
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
