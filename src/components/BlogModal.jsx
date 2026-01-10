'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageComponent from './ImageComponent';

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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative h-[400px] w-full">
              <ImageComponent
                src={post.image}
                useRandomImage={!post.image}
                alt={post.title}
                priority={true}
                quality={90}
                aspectRatio="16/9"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                <span className="text-teal-600 font-bold">{post.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-gray-700">{post.author}</p>
                <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">{post.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full"
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
