'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ImageComponent from './ImageComponent';

export default function FeaturedProjectSection() {
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
      className="py-20 bg-[#f5f5f7]"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-green-800 mb-12"
          variants={variants}
        >
          Featured Project
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            variants={variants}
          >
            <ImageComponent 
              src="/images/new/landscape-3.jpg"
              alt="Featured garden project"
              useRandomImage={false}
              componentId="featured-project"
              priority={true}
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              objectFit="cover"
            />
          </motion.div>
          <motion.div variants={variants}>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">Riverside Retreat</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This stunning riverside garden was transformed from an overlooked space into a peaceful retreat that takes full advantage of its natural setting. We incorporated native plants, sustainable materials, and created distinct zones for relaxation, dining, and entertaining.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The design includes a series of terraced gardens that lead down to the water, a natural stone patio, and carefully selected plantings that provide year-round interest while requiring minimal maintenance.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Sustainable Design</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Native Plants</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Waterfront</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Low Maintenance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
