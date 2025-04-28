'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../data/portfolio';
import ImageComponent from '@/components/ImageComponent';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-playfair text-green-900 mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Explore our collection of beautiful garden transformations across Georgia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <ImageComponent
                  src={item.image}
                  alt={item.title}
                  useRandomImage={!item.image}
                  componentId={`portfolio-item-${item.id}`}
                  category={item.category.toLowerCase().includes('garden') ? 'garden' : 
                            item.category.toLowerCase().includes('vegetable') ? 'vegetable' : 
                            item.category.toLowerCase().includes('maintenance') ? 'cleanup' : 
                            'seasonal'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  objectFit="cover"
                  quality={75}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{item.location}</span>
                </div>
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
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
          <h2 className="text-3xl font-playfair text-green-800 mb-8">Ready to Transform Your Garden?</h2>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
} 