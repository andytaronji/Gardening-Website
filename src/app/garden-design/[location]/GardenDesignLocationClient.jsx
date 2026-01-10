'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageComponent from '@/components/ImageComponent';

export default function GardenDesignLocationClient({ locationData }) {
  const { city, areaDescription, neighborhoods, localFeatures, gardenConsiderations } = locationData;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-playfair text-teal-900 mb-6">
            High-End Garden Design Services in {city}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Transform your {city} property into a stunning, sustainable garden that reflects your style and enhances your lifestyle. Our expert garden designers specialize in creating unique pollinator gardens for high-end properties in {areaDescription}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
            <ImageComponent
              src="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_auto:eco,w_1200/v1747228491/Garden_Design_xh5y5u.jpg"
              alt={`High-end garden design services in ${city} by Gardening Thyme - professional landscape design featuring pollinator gardens`}
              componentId={`garden-design-hero-${city.toLowerCase()}`}
              priority={true}
              quality={85}
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-playfair text-teal-800">
              Garden Design Process in {city}
            </h2>
            <p className="text-gray-700">
              We begin with a thorough on-site consultation at your {city} property to understand your vision, lifestyle, and specific needs. Our expert designers create customized garden plans that harmoniously blend aesthetics with functionality, incorporating native Georgia plants and pollinator-friendly elements perfect for {city}'s unique conditions.
            </p>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center space-x-3 text-gray-700"
              >
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalized consultation and site analysis for {city} properties</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-center space-x-3 text-gray-700"
              >
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom high-end garden design plans and 2D visualizations</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center space-x-3 text-gray-700"
              >
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Native Georgia plant selection optimized for {city}'s climate</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Location-Specific Information */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-playfair text-teal-800 mb-6 text-center">
            Specialized {city} Garden Design Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Local Knowledge</h3>
              <p className="text-gray-700 mb-4">{localFeatures}</p>
              {neighborhoods.length > 0 && (
                <div className="text-sm text-gray-600">
                  <strong>Serving neighborhoods including:</strong> {neighborhoods.join(', ')}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Garden Considerations</h3>
              <p className="text-gray-700">{gardenConsiderations}</p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-teal-50 rounded-2xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-playfair text-teal-800 mb-8 text-center">
            Why Choose Our {city} Garden Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Expert Design</h3>
              <p className="text-gray-600">Professional designers with years of experience creating high-end garden landscapes throughout {city} and Georgia</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Sustainable Gardens</h3>
              <p className="text-gray-600">Eco-friendly garden solutions that conserve water and support {city}'s native pollinators and ecosystems</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous guidance and maintenance recommendations for your {city} garden projects</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-teal-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-teal-800 mb-4 text-center">
              Ready to Transform Your {city} Garden?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto text-center">
              Contact us today to schedule a consultation for your high-end garden design project in {city}.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="btn-primary-teal hover:btn-primary-teal-hover text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Schedule Your {city} Garden Design Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
