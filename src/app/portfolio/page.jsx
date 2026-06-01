'use client';

import { portfolioSchema } from './schema';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../data/portfolio';
import Image from 'next/image';
import Script from 'next/script';

export default function PortfolioPage() {
  const jsonLd = portfolioSchema;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedImage(null);
      }
    }

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  const openModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const isClickable = () => true;

  return (
    <div className="min-h-screen bg-cream">
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-forest-green mb-6">Our Portfolio</h1>
          <p className="text-xl text-forest-green leading-relaxed">
            Explore our garden maintenance, drip irrigation systems, Japanese maple installations, 
            native plantings, and property enhancements across Georgia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-sage/10"
            >
              <div 
                className="relative h-64 cursor-pointer"
                onClick={() => openModal(item.image, item.title)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  quality={75}
                />
                {isClickable() && (
                  <div className="absolute inset-0 bg-charcoal/0 hover:bg-charcoal/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-10 h-10 text-cream" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-sage/20 text-forest-green text-sm font-medium px-3 py-1 rounded-full border border-sage/30">
                    {item.category}
                  </span>
                  <span className="text-forest-green/60 text-sm ml-4">{item.location}</span>
                </div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  {item.title}
                </h2>
                <p className="text-forest-green/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-8">Ready for Your Gardening, Maintenance, or Irrigation Project?</h2>
          <a
            href="/contact"
            className="inline-block bg-charcoal text-cream font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4">
          <div 
            ref={modalRef}
            className="relative max-w-4xl w-full max-h-[90vh] bg-cream rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 z-50 bg-charcoal/70 hover:bg-charcoal rounded-full p-1.5 transition-all duration-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal title */}
            <div className="absolute top-0 left-0 right-0 bg-cream/80 p-2 text-center z-40">
              <h3 className="text-xl font-serif text-charcoal">{selectedTitle}</h3>
            </div>
            
            {/* Image container */}
            <div className="w-full h-[80vh] flex items-center justify-center p-4 pt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  console.error("Error loading image:", selectedImage);
                  e.target.src = "/images/logo.png";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
