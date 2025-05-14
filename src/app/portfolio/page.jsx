'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../data/portfolio';
import ImageComponent from '@/components/ImageComponent';
import Image from 'next/image';

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const modalRef = useRef(null);

  // Function to handle clicking outside the modal to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedImage(null);
      }
    }

    // Add event listener when modal is open
    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  // Function to open the modal with the selected image
  const openModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // All items will have the modal functionality
  const isClickable = () => true;

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
            Explore some of our property transformations across Georgia
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
              <div 
                className="relative h-64 cursor-pointer"
                onClick={() => openModal(item.image, item.title)}
              >
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
                  objectFit={item.objectFit || "cover"}
                  quality={75}
                  className="transition-transform duration-300 hover:scale-105"
                />
                {isClickable() && (
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div 
            ref={modalRef}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 z-50 bg-white bg-opacity-75 rounded-full p-1 hover:bg-opacity-100 transition-all duration-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal title */}
            <div className="absolute top-0 left-0 right-0 bg-white bg-opacity-75 p-2 text-center z-40">
              <h3 className="text-xl font-playfair text-green-800">{selectedTitle}</h3>
            </div>
            
            {/* Image container - using a simpler img tag approach */}
            <div className="w-full h-[80vh] flex items-center justify-center p-4 pt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  console.error("Error loading image:", selectedImage);
                  e.target.src = "/images/logo.png"; // Fallback image
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
