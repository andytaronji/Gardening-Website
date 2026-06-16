'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const vegetableGardenImages = [
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_1200,c_fill,g_auto/v1768052394/Garden_Beds_with_Full_Drip_Irrigation_vxpker",
    alt: "Garden beds with full drip irrigation system"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_1200,c_fill,g_auto/v1768052394/Drip_In_Action_bwre1o",
    alt: "Drip irrigation system in action"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_1200,c_fill,g_auto/v1768052397/Raised_bed_Drip_Irrigation_Edible_Garden_e9ddnm",
    alt: "Raised bed drip irrigation edible garden"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_1200,c_fill,g_auto/v1768052395/Healthy_Edibles_ickibt",
    alt: "Healthy edible garden plants"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_1200,c_fill,g_auto/v1768052386/Amazing_Okra_lonct2",
    alt: "Amazing okra vegetable garden"
  }
];

export default function VegetableGardenClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Defer the carousel (extra slides + rotation) until after window load so it
  // never competes with the LCP hero image. Before activation only slide 0 mounts.
  const [activated, setActivated] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const start = () => {
      const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
      idle(() => setActivated(true));
    };

    if (document.readyState === 'complete') {
      start();
    } else {
      window.addEventListener('load', start, { once: true });
      return () => window.removeEventListener('load', start);
    }
  }, []);

  useEffect(() => {
    if (!activated) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vegetableGardenImages.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activated, currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-forest-green mb-6">Vegetable Garden Design</h1>
          <p className="text-xl text-forest-green leading-relaxed">
            Create your own sustainable food garden with our expert design and maintenance services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              {vegetableGardenImages.map((image, index) => {
                // Until the carousel activates, only the LCP slide (0) mounts so
                // the other hero images don't steal bandwidth from it.
                if (!activated && index !== 0) return null;
                return (
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
                      quality={72}
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-4">
              {vegetableGardenImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="w-3 h-3 transition-all duration-300"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-charcoal ${
                      index === currentSlide
                        ? 'bg-charcoal'
                        : 'bg-transparent hover:bg-charcoal/30'
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-charcoal">Fresh From Your Garden</h2>
            <p className="text-forest-green">
              Experience the joy and satisfaction of growing your own organic vegetables. Our expert team 
              will help you design and maintain a thriving vegetable garden that suits your space and needs.
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
                <span>Custom garden bed design and installation</span>
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
                <span>Seasonal planting schedules</span>
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
                <span>Organic soil preparation and maintenance</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-20 shadow-sm"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Plan</h3>
              <p className="text-forest-green/70">Design your ideal garden layout and select seasonal crops</p>
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
              <h3 className="text-xl font-semibold text-charcoal mb-2">Prepare</h3>
              <p className="text-forest-green/70">Build raised beds and prepare nutrient-rich soil</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Grow</h3>
              <p className="text-forest-green/70">Plant and maintain your thriving vegetable garden</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-charcoal p-8 rounded-2xl shadow-md text-center">
            <h2 className="text-3xl font-semibold text-cream mb-4">Start Your Garden Today</h2>
            <p className="text-lg text-cream/80 mb-6 max-w-3xl mx-auto">
              Contact us to design and create your custom vegetable garden with expert guidance every step of the way.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-cream text-charcoal font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg"
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
