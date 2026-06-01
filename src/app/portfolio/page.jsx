'use client';

import { portfolioSchema } from './schema';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../data/portfolio';
import Image from 'next/image';
import Script from 'next/script';

export default function PortfolioPage() {
  const jsonLd = portfolioSchema;
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedItem(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setSelectedItem(null);
    }

    if (selectedItem) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-cream">
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
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
          <p className="text-sm text-forest-green/60 mt-4">Click any image to learn more about the project</p>
        </motion.div>

        {/* 4-column image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl"
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={75}
              />
              {/* Hover overlay with title */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-300 flex items-end">
                <div className="w-full p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-cream text-sm font-semibold line-clamp-1">{item.title}</p>
                  <p className="text-cream/70 text-xs">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-8">
            Ready for Your Gardening, Maintenance, or Irrigation Project?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-charcoal text-cream font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full bg-cream rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 z-50 bg-charcoal/70 hover:bg-charcoal rounded-full p-1.5 transition-all duration-200"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full h-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/logo.png'; }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-sage/20 text-forest-green text-sm font-medium px-3 py-1 rounded-full border border-sage/30">
                    {selectedItem.category}
                  </span>
                  <span className="text-forest-green/60 text-sm">{selectedItem.location}</span>
                </div>
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-3">
                  {selectedItem.title}
                </h2>
                <p className="text-forest-green/80 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
