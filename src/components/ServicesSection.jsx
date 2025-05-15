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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services in Marietta & the Metro Atlanta Area</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive high-end gardening services throughout Marietta and Metro Atlanta, including Alpharetta, Woodstock, and Vinings to help you create and maintain your perfect outdoor space.
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
                href="https://res.cloudinary.com/di4phdven/image/upload/v1747228711/gardendesignhomepage_z6bfth.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <ImageComponent
                  src="https://res.cloudinary.com/di4phdven/image/upload/v1747228711/gardendesignhomepage_z6bfth.jpg"
                  alt="High-end garden design service in Marietta and Atlanta area by Gardening Thyme"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  objectFit="cover"
                  className="h-full transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">High-End Garden Design</h3>
              <p className="text-gray-600 mb-4">
                Transform your Marietta or Metro Atlanta property with our expert garden design services. We create beautiful, sustainable pollinator gardens
                that reflect your style and enhance your home's value.
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
                  alt="Professional groundskeeping and garden maintenance services in Alpharetta and Marietta by Gardening Thyme"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  objectFit="cover"
                  className="h-full transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Estate Groundskeeping</h3>
              <p className="text-gray-600 mb-4">
                Keep your Alpharetta or Woodstock property looking its best with our professional groundskeeping services. We provide regular maintenance for large properties, ensuring a
                healthy, thriving garden landscape year-round.
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
                  alt="Seasonal garden cleanup services in Woodstock and Vinings by Gardening Thyme"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  objectFit="cover"
                  className="h-full transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Seasonal Garden Cleanups</h3>
              <p className="text-gray-600 mb-4">
                Our professional seasonal cleanup services in Vinings and East Cobb prepare your garden for each season. We provide comprehensive care for year-round
                beauty, ensuring your landscape looks pristine throughout the changing Georgia seasons.
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
