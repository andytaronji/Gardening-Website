'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageComponent from './ImageComponent';
import { getFallbackImage } from '@/utils/imageUtils';

export default function BlogCard({ post }) {
  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Determine the category based on post tags
  const getImageCategory = (tags) => {
    if (!tags || tags.length === 0) return null;
    
    const tag = tags[0].toLowerCase();
    if (tag.includes('garden') || tag.includes('design')) return 'garden';
    if (tag.includes('clean') || tag.includes('maintenance')) return 'cleanup';
    if (tag.includes('vegetable') || tag.includes('herb')) return 'vegetable';
    if (tag.includes('season') || tag.includes('plant')) return 'seasonal';
    
    return null;
  };

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <motion.div 
        className="bg-[#f5f5f7] rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-full">
          <ImageComponent 
            src={post.image || getFallbackImage()}
            alt={post.title} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            aspectRatio="16/9"
            objectFit="cover"
            priority={false}
            quality={90}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
            <span className="text-sm text-green-600">{post.author}</span>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center">
            Read more 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
