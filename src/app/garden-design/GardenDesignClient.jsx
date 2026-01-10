'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageComponent from '@/components/ImageComponent';

export default function GardenDesignClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-playfair text-teal-900 mb-6">High-End Garden Design Services in Marietta & Atlanta</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Transform your Marietta or Metro Atlanta property into a stunning, sustainable garden that reflects your style, enhances your lifestyle, and increases your home's value. Our expert garden designers specialize in creating unique pollinator gardens for high-end properties.
          </p>
        </motion.div>

        {/* Location Selector */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto px-4 py-8 text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Serving Metro Atlanta</h2>
          <p className="mb-6 text-gray-600">
            Custom garden design for your unique location and landscape
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['marietta', 'atlanta', 'roswell', 'alpharetta', 'sandy-springs'].map(city => (
              <Link
                key={city}
                href={`/garden-design/${city}`}
                className="px-5 py-2.5 bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 hover:shadow-md transition-all duration-300 font-medium"
              >
                {city === 'sandy-springs' 
                  ? 'Sandy Springs' 
                  : city.charAt(0).toUpperCase() + city.slice(1)}
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
            <ImageComponent
              src="https://res.cloudinary.com/di4phdven/image/upload/v1747228491/Garden_Design_xh5y5u.jpg"
              alt="High-end garden design services in Marietta and Atlanta by Gardening Thyme - professional landscape design featuring pollinator gardens"
              componentId="garden-design-hero"
              priority={true}
              quality={90}
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-playfair text-teal-800">Our Garden Design Process</h2>
            <p className="text-gray-700">
              We begin with a thorough on-site consultation at your property to understand your vision, lifestyle, and specific needs. Our expert designers then create a customized garden plan that harmoniously blends aesthetics with functionality, incorporating native Georgia plants and pollinator-friendly elements.
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
                <span>Personalized consultation and site analysis for your property</span>
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
                <span>Native Georgia plant selection and pollinator garden layout planning</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-teal-50 rounded-2xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-playfair text-teal-800 mb-8 text-center">Why Choose Our Garden Design Services</h2>
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
              <p className="text-gray-600">Professional designers with years of experience creating high-end garden landscapes throughout Georgia</p>
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
              <p className="text-gray-600">Eco-friendly garden solutions that conserve water and support Georgia's native pollinators and ecosystems</p>
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
              <p className="text-gray-600">Continuous guidance and maintenance recommendations for your garden projects, ensuring year-round beauty in Georgia's climate</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-playfair text-teal-800 mb-8">Ready to Transform Your Garden?</h2>
          <p className="text-xl text-gray-700 mb-6">
            Contact us today to schedule a consultation for your high-end garden design project.
          </p>
          <Link
            href="/contact"
            className="inline-block btn-primary-teal text-white font-semibold px-8 py-4 rounded-lg hover:btn-primary-teal-hover transition-colors duration-300"
          >
            Schedule Your Garden Design Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
