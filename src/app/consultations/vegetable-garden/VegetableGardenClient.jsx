'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const vegetableGardenImages = [
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768052394/Garden_Beds_with_Full_Drip_Irrigation_vxpker",
    alt: "Garden beds with full drip irrigation system"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768052394/Drip_In_Action_bwre1o",
    alt: "Drip irrigation system in action"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768052397/Raised_bed_Drip_Irrigation_Edible_Garden_e9ddnm",
    alt: "Raised bed drip irrigation edible garden"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768052395/Healthy_Edibles_ickibt",
    alt: "Healthy edible garden plants"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768052386/Amazing_Okra_lonct2",
    alt: "Amazing okra vegetable garden"
  }
];

export default function VegetableGardenClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start a new timer
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vegetableGardenImages.length);
    }, 5000); // 5 seconds

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSlide]); // Restart timer when currentSlide changes

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Timer will automatically restart due to useEffect dependency
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-playfair text-teal-900 mb-6">Vegetable Garden Design</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Create your own sustainable food garden with our expert design and maintenance services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              {/* Drip Irrigation Slideshow */}
              {vegetableGardenImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                    quality={70}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-2">
              {vegetableGardenImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-teal-600 border-teal-600'
                      : 'bg-transparent border-teal-600 hover:bg-teal-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-playfair text-teal-800">Fresh From Your Garden</h2>
            <p className="text-gray-700">
              Experience the joy and satisfaction of growing your own organic vegetables. Our expert team 
              will help you design and maintain a thriving vegetable garden that suits your space and needs.
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
                <span>Custom garden bed design and installation</span>
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
                <span>Seasonal planting schedules</span>
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
                <span>Organic soil preparation and maintenance</span>
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
          <h2 className="text-3xl font-playfair text-teal-800 mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Plan</h3>
              <p className="text-gray-600">Design your ideal garden layout and select seasonal crops</p>
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
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Prepare</h3>
              <p className="text-gray-600">Build raised beds and prepare nutrient-rich soil</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Grow</h3>
              <p className="text-gray-600">Plant and maintain your thriving vegetable garden</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-teal-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-teal-800 mb-4 text-center">Start Your Garden Today</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto text-center">
              Contact us to design and create your custom vegetable garden with expert guidance every step of the way.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="btn-primary-teal hover:btn-primary-teal-hover text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
