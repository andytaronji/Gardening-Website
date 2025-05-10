'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageComponent from './ImageComponent';
import { getPortfolioImage } from '../utils/imageUtils';

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive gardening services to help you create and maintain your perfect outdoor space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Garden Design Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-80 overflow-hidden group">
              <a 
                href="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1746893644/IMG_2465_ik43b7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <ImageComponent
                  src="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1746893644/IMG_2465_ik43b7"
                  alt="Garden Design Service"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  objectFit="cover"
                  className="h-full transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Garden Design</h3>
              <p className="text-gray-600 mb-4">
                Transform your outdoor space with our expert garden design services. We create beautiful, sustainable gardens
                that reflect your style and needs.
              </p>
              <Link
                href="/garden-design"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Groundskeeping Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-80 overflow-hidden group">
              <a 
                href="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1746894206/Garden_Design_CreepingJenny_gsgu3z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <ImageComponent
                  src="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1746894206/Garden_Design_CreepingJenny_gsgu3z"
                  alt="Groundskeeping Service"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  objectFit="cover"
                  className="h-full transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Groundskeeping</h3>
              <p className="text-gray-600 mb-4">
                Keep your garden looking its best with our professional groundskeeping services. Regular maintenance for a
                healthy, thriving garden.
              </p>
              <Link
                href="/groundskeeping"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Quarterly Cleanups Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-80 overflow-hidden group">
              <a 
                href="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1746894176/Sandra_Cleanup_After_3_sa4bn9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <ImageComponent
                  src="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto/v1746894176/Sandra_Cleanup_After_3_sa4bn9"
                  alt="Quarterly Cleanups Service"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  objectFit="cover"
                  className="h-full transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Quarterly Cleanups</h3>
              <p className="text-gray-600 mb-4">
                Seasonal garden cleanup services to prepare your garden for each season. Comprehensive care for year-round
                beauty.
              </p>
              <Link
                href="/quarterly-cleanups"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
