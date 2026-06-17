'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GardenDesignLocationClient({ locationData }) {
  const { city, areaDescription, neighborhoods, localFeatures, gardenConsiderations } = locationData;

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-forest-green mb-6">
            High-End Garden Design Services in {city}
          </h1>
          <p className="text-xl text-forest-green leading-relaxed">
            Transform your {city} property into a stunning, sustainable garden that reflects your style and enhances your lifestyle. Our expert garden designers specialize in creating unique pollinator gardens for high-end properties in {areaDescription}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-mist"
          >
            <Image
              src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:eco,f_auto,w_1200/v1747228491/Garden_Design_xh5y5u.jpg"
              alt={`High-end garden design services in ${city} by Gardening Thyme - professional landscape design featuring pollinator gardens`}
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={72}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-charcoal">
              Garden Design Process in {city}
            </h2>
            <p className="text-forest-green">
              We begin with a thorough on-site consultation at your {city} property to understand your vision, lifestyle, and specific needs. Our expert designers create customized garden plans that harmoniously blend aesthetics with functionality, incorporating native Georgia plants and pollinator-friendly elements perfect for {city}'s unique conditions.
            </p>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalized consultation and site analysis for {city} properties</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom high-end garden design plans and 2D visualizations</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="bg-cloud rounded-[6px] p-8 md:p-12 mb-20 border border-mist"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-6 text-center">
            Specialized {city} Garden Design Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Local Knowledge</h3>
              <p className="text-forest-green mb-4">{localFeatures}</p>
              {neighborhoods.length > 0 && (
                <div className="text-sm text-forest-green/70">
                  <strong className="text-charcoal">Serving neighborhoods including:</strong> {neighborhoods.join(', ')}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Garden Considerations</h3>
              <p className="text-forest-green">{gardenConsiderations}</p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-cloud rounded-[6px] p-8 md:p-12 mb-20 border border-mist"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">
            Why Choose Our {city} Garden Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Expert Design</h3>
              <p className="text-forest-green/70">Professional designers with years of experience creating high-end garden landscapes throughout {city} and Georgia</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Sustainable Gardens</h3>
              <p className="text-forest-green/70">Eco-friendly garden solutions that conserve water and support {city}'s native pollinators and ecosystems</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Ongoing Support</h3>
              <p className="text-forest-green/70">Continuous guidance and maintenance recommendations for your {city} garden projects</p>
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
          <div className="bg-forest p-8 rounded-[6px] text-center">
            <h2 className="text-3xl font-semibold text-cream mb-4">
              Ready to Transform Your {city} Garden?
            </h2>
            <p className="text-lg text-cream/80 mb-6 max-w-3xl mx-auto">
              Contact us today to schedule a consultation for your high-end garden design project in {city}.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-cloud text-forest font-semibold py-3 px-8 rounded-[4px] hover:bg-sage-tint transition-all duration-300"
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
