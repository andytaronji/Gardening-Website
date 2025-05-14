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
              src="https://res.cloudinary.com/di4phdven/image/upload/v1747229592/Screenshot_2025-05-14_093253_c1yke9.png"
              alt="Natural Stream Solutions"
              useRandomImage={false}
              componentId="featured-project"
              priority={true}
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              objectFit="cover"
            />
          </motion.div>
          <motion.div variants={variants}>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">Natural Stream Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Natural irrigation solutions include man-made dry creek beds to combat terraced and severely inclined yards.
              
              Streams made from colorful river rock add a beautiful touch to your yard and can be built around pollinating flowers to attract butterflies, hummingbirds, bees, and also support local ecosystems!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Sustainable Design</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Native Plants</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Natural Stream</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Low Maintenance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
