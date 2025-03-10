'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogModal({ post, isOpen, onClose }) {
  const modalRef = useRef(null);
  
  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Close modal when pressing Escape key
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
        ref={modalRef}
      >
        <div className="relative h-[60vh]">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            style={{ objectFit: 'cover' }}
            priority
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all z-10"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
            <span className="text-sm text-green-600">{post.author}</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{post.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            className="prose prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
