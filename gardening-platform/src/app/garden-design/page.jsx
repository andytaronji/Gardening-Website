'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function GardenDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/landscape-design.jpg"
            alt="Beautiful Garden Design"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Garden Design Excellence</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transform your outdoor space into a stunning sanctuary with our expert garden design services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-center text-green-800 mb-16"
          >
            Our Design Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Initial Consultation",
                description: "We begin with a thorough consultation to understand your vision, preferences, and the unique characteristics of your space."
              },
              {
                title: "Custom Design Creation",
                description: "Our expert designers create detailed plans that blend aesthetics with functionality, considering factors like climate and maintenance."
              },
              {
                title: "Material Selection",
                description: "We carefully select high-quality materials and plants that complement your design and thrive in your specific environment."
              },
              {
                title: "2D Visualization",
                description: "Experience your garden before it's built with our advanced 2D visualization technology."
              },
              {
                title: "Expert Implementation",
                description: "Our skilled team brings your design to life with precision and attention to detail."
              },
              {
                title: "Ongoing Support",
                description: "We provide maintenance guidance and support to ensure your garden continues to flourish."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-green-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-green-800 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg md:text-xl mb-8">
            Let's create a garden that reflects your style and enhances your lifestyle.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </motion.section>
    </div>
  );
} 