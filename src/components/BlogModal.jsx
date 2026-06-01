'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const BlogModal = ({ post, onClose }) => {
  if (!post) return null;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-sage/10"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-cream bg-charcoal/60 hover:bg-charcoal rounded-full p-2 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative h-[400px] w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
                quality={90}
              />
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center mr-3 border border-sage/30">
                <span className="text-sage font-bold">{post.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-forest-green font-medium">{post.author}</p>
                <p className="text-forest-green/60 text-sm">{formatDate(post.date)}</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-4">{post.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-cream text-charcoal text-xs px-3 py-1 rounded-full border border-sage/20"
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
    </AnimatePresence>
  );
};

export default BlogModal;
