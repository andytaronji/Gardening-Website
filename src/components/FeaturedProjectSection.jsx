'use client';

import React from 'react';
import Image from 'next/image';
import { LazyMotionSection, LazyMotionH2, LazyMotionDiv, fadeInUpVariants } from '../utils/lazyMotion';

export default function FeaturedProjectSection() {
  return (
    <LazyMotionSection 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUpVariants}
      className="py-20 bg-paper"
    >
      <div className="container mx-auto px-4">
        <p className="eyebrow text-center mb-4">Selected Work</p>
        <LazyMotionH2
          className="text-4xl text-center text-forest-green mb-12"
          variants={fadeInUpVariants}
        >
          Featured Project
        </LazyMotionH2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <LazyMotionDiv
            className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-mist"
            variants={fadeInUpVariants}
          >
            <Image 
              src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_1200/v1768076475/Featured_Project_utgj7g.jpg"
              alt="Natural Stream Solutions - Dry Creek Bed with Pollinating Flowers"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
          </LazyMotionDiv>
          <LazyMotionDiv variants={fadeInUpVariants}>
            <h3 className="text-3xl font-semibold text-forest-green mb-4">Natural Stream Solutions</h3>
            <p className="text-forest-green mb-6 leading-relaxed">
              Natural irrigation solutions include man-made dry creek beds to combat terraced and severely inclined yards.
              
              Streams made from colorful river rock add a beautiful touch to your yard and can be built around pollinating flowers to attract butterflies, hummingbirds, bees, and also support local ecosystems!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-sage-tint text-forest px-3 py-1 rounded-[4px] text-sm font-medium">Sustainable Design</span>
              <span className="bg-sage-tint text-forest px-3 py-1 rounded-[4px] text-sm font-medium">Native Plants</span>
              <span className="bg-sage-tint text-forest px-3 py-1 rounded-[4px] text-sm font-medium">Natural Stream</span>
              <span className="bg-sage-tint text-forest px-3 py-1 rounded-[4px] text-sm font-medium">Low Maintenance</span>
            </div>
          </LazyMotionDiv>
        </div>
      </div>
    </LazyMotionSection>
  );
}
