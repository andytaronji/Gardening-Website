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
      className="py-24 bg-forest"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.p className="eyebrow mb-4 text-center" style={{ color: 'var(--gt-sage)' }} variants={variants}>
            Free Consultation
          </motion.p>
          <motion.h2
            className="text-4xl text-cloud mb-4 text-center"
            variants={variants}
          >
            Ready to Transform Your Garden?
          </motion.h2>
          <motion.p
            className="text-lg text-cloud/80 mb-8 max-w-2xl mx-auto text-center"
            variants={variants}
          >
            Book a consultation with our expert garden designers and take the first step toward creating the garden of your dreams.
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={variants}
          >
            <Link href="/contact" className="inline-block bg-cloud text-forest font-semibold text-sm py-3.5 px-7 rounded-[4px] border border-cloud hover:bg-sage-tint hover:border-sage-tint transition-all duration-300">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
