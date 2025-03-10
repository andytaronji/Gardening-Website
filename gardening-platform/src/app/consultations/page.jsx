'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConsultationsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 -mt-24 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Gardening Thyme Consultations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your outdoor space with expert guidance from our experienced garden designers.
          </p>
        </motion.div>
      
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image 
                src="/images/consultations/garden-design-1.jpg" 
                alt="Beautiful garden with colorful flowers" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Transform Your Outdoor Space</h2>
              <p className="text-gray-600 leading-relaxed">
                Our expert garden designers will work with you to create a beautiful, functional outdoor space 
                that reflects your personal style and meets your specific needs. We consider factors such as soil conditions, 
                sunlight exposure, and local climate to ensure your garden thrives year-round.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image 
                src="/images/consultations/garden-design-2.jpg" 
                alt="Sustainable garden design" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Sustainable Garden Solutions</h2>
              <p className="text-gray-600 leading-relaxed">
                We specialize in eco-friendly garden designs that conserve water, support local wildlife, 
                and reduce the need for chemical fertilizers and pesticides. Our sustainable approaches 
                create healthier, more resilient gardens that thrive naturally.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image 
                src="/images/consultations/garden-design-3.jpg" 
                alt="Garden consultation process" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Consultation Process</h2>
              <p className="text-gray-600 leading-relaxed">
                Starting with an on-site visit, we assess your space and discuss your goals, preferences, and budget. 
                We then create a customized design plan including plant selections, hardscape elements, and detailed 
                implementation guidelines.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image 
                src="/images/consultations/video-consultation.jpg" 
                alt="Virtual garden consultation" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Video Course Consultations</h2>
              <p className="text-gray-600 leading-relaxed">
                Connect with our expert gardeners virtually and receive personalized advice for your garden projects. 
                Our online sessions include interactive design reviews, plant selection guidance, and detailed 
                follow-up materials.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Ready to Transform Your Garden?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a consultation today and take the first step toward creating the garden of your dreams.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
