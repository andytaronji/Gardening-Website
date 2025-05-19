'use client';

import React from 'react';
import Link from 'next/link';
import ImageComponent from './ImageComponent';
import { LazyMotionDiv, fadeInUpVariants } from '../utils/lazyMotion';
import { getPortfolioImage } from '../utils/imageUtils';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] bg-gray-900">
      <div className="absolute inset-0 z-0">
        <ImageComponent
          src="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200/v1746893645/front_Page_wm3lfv"
          alt="High-end garden design and landscaping in Atlanta area by Gardening Thyme"
          priority={true}
          quality={70}
          sizes="100vw"
          objectFit="cover"
          className="h-full"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <LazyMotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            High-end garden design and maintenance services in Marietta, Alpharetta, Vinings, and more. Specializing in pollinator gardens and unique designs for your perfect outdoor sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us!
            </Link>
          </div>
        </LazyMotionDiv>
      </div>
    </section>
  );
}
