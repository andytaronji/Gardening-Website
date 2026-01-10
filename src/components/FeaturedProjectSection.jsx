'use client';

import React from 'react';
import ImageComponent from './ImageComponent';
import { LazyMotionSection, LazyMotionH2, LazyMotionDiv, fadeInUpVariants } from '../utils/lazyMotion';

export default function FeaturedProjectSection() {
  return (
    <LazyMotionSection 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUpVariants}
      className="py-20 bg-[#f5f5f7]"
    >
      <div className="container mx-auto px-4">
        <LazyMotionH2 
          className="text-4xl font-bold text-center text-teal-800 mb-12"
          variants={fadeInUpVariants}
        >
          Featured Project
        </LazyMotionH2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <LazyMotionDiv 
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            variants={fadeInUpVariants}
          >
            <ImageComponent 
              src="https://res.cloudinary.com/di4phdven/image/upload/v1768076475/Featured_Project_utgj7g.jpg"
              alt="Natural Stream Solutions - Dry Creek Bed with Pollinating Flowers"
              useRandomImage={false}
              componentId="featured-project"
              priority={false}
              quality={70}
              sizes="(max-width: 768px) 100vw, 50vw"
              objectFit="cover"
              width={800}
              height={600}
            />
          </LazyMotionDiv>
          <LazyMotionDiv variants={fadeInUpVariants}>
            <h3 className="text-3xl font-semibold text-teal-700 mb-4">Natural Stream Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Natural irrigation solutions include man-made dry creek beds to combat terraced and severely inclined yards.
              
              Streams made from colorful river rock add a beautiful touch to your yard and can be built around pollinating flowers to attract butterflies, hummingbirds, bees, and also support local ecosystems!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Sustainable Design</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Native Plants</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Natural Stream</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Low Maintenance</span>
            </div>
          </LazyMotionDiv>
        </div>
      </div>
    </LazyMotionSection>
  );
}
