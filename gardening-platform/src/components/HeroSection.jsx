'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative h-full w-full">
          <Image 
            src="/images/consultations/garden-design-1.jpg" 
            alt="Beautiful garden landscape" 
            fill
            sizes="100vw"
            priority
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-cursive text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Gardening Thyme
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Where beautiful gardens grow and time stands still
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link href="/consultations" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            Explore Our Services
          </Link>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.section>
  );
}
