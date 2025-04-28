'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
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
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-[#f5f5f7] p-8 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">
              "The team at Gardening Thyme transformed our backyard from a barren wasteland into a beautiful, functional space that we use every day. Their attention to detail and knowledge of plants is exceptional."
            </p>
            <div className="font-semibold text-gray-800">Sarah Johnson</div>
            <div className="text-gray-500 text-sm">Residential Client</div>
          </motion.div>

          <motion.div 
            className="bg-[#f5f5f7] p-8 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">
              "We hired Gardening Thyme to redesign our commercial property landscaping, and the results have been outstanding. Our customers frequently comment on how beautiful the entrance to our business is now."
            </p>
            <div className="font-semibold text-gray-800">Michael Chen</div>
            <div className="text-gray-500 text-sm">Business Owner</div>
          </motion.div>

          <motion.div 
            className="bg-[#f5f5f7] p-8 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">
              "The garden design that Gardening Thyme created for us has completely transformed our outdoor living experience. They listened to our needs and created a space that's both beautiful and functional."
            </p>
            <div className="font-semibold text-gray-800">Emily Rodriguez</div>
            <div className="text-gray-500 text-sm">Homeowner</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
