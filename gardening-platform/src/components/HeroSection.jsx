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
      className="relative h-[100vh] w-full flex items-center justify-center"
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
            style={{ objectFit: 'cover', objectPosition: 'center' }}
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
    </motion.section>
  );
}
