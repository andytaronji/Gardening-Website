'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotionDiv, LazyMotionSection, fadeInUpVariants } from '../utils/lazyMotion';
import { getPortfolioImage } from '../utils/imageUtils';

export default function ServicesSection() {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <LazyMotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-forest-green mb-4">Our Services in Marietta & the Metro Atlanta Area</h2>
          <p className="text-lg text-forest-green max-w-2xl mx-auto">
            We offer comprehensive high-end gardening services throughout Marietta and Metro Atlanta, including Alpharetta, Woodstock, and Vinings to help you create and maintain your perfect outdoor space.
          </p>
        </LazyMotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Garden Design Service */}
          <LazyMotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-80 overflow-hidden group">
              <a 
                href="https://res.cloudinary.com/di4phdven/image/upload/v1747228711/gardendesignhomepage_z6bfth.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
                aria-label="View full-size garden design image"
              >
                <Image
                  src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_700/v1747228711/gardendesignhomepage_z6bfth.jpg"
                  alt="High-end garden design service in Marietta and Atlanta area by Gardening Thyme"
                  fill
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  quality={85}
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-forest-green mb-3">High-End Garden Design</h3>
              <p className="text-forest-green mb-4">
                Transform your Marietta or Metro Atlanta property with our expert garden design services. We create beautiful, sustainable pollinator gardens
                that reflect your style and enhance your home's value.
              </p>
              <Link
                href="/garden-design"
                className="inline-block bg-charcoal text-cream px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </LazyMotionDiv>

          {/* Groundskeeping Service */}
          <LazyMotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-80 overflow-hidden group">
              <a 
                href="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1768073385/Estate_Groundskeeping_pwha5o.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
                aria-label="View full-size groundskeeping image"
              >
                <Image
                  src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_700/v1768073385/Estate_Groundskeeping_pwha5o.jpg"
                  alt="Professional groundskeeping and garden maintenance services in Alpharetta and Marietta by Gardening Thyme"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  quality={85}
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-forest-green mb-3">Estate Groundskeeping</h3>
              <p className="text-forest-green mb-4">
                Keep your Alpharetta or Woodstock property looking its best with our professional groundskeeping services. We provide regular maintenance for large properties, ensuring a
                healthy, thriving garden landscape year-round.
              </p>
              <Link
                href="/groundskeeping"
                className="inline-block bg-charcoal text-cream px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </LazyMotionDiv>

          {/* Quarterly Cleanups Service */}
          <LazyMotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-80 overflow-hidden group">
              <a 
                href="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1768072927/IMG_3482__1_w3clrx.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
                aria-label="View full-size seasonal garden cleanup image"
              >
                <Image
                  src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_700/v1768072927/IMG_3482__1_w3clrx.jpg"
                  alt="Seasonal garden cleanup services in Woodstock and Vinings by Gardening Thyme"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  quality={85}
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-forest-green mb-3">Seasonal Garden Cleanups</h3>
              <p className="text-forest-green mb-4">
                Our professional seasonal cleanup services in Vinings and East Cobb prepare your garden for each season. We provide comprehensive care for year-round
                beauty, ensuring your landscape looks pristine throughout the changing Georgia seasons.
              </p>
              <Link
                href="/quarterly-cleanups"
                className="inline-block bg-charcoal text-cream px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </LazyMotionDiv>
        </div>
      </div>
    </section>
  );
}
