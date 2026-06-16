'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotionDiv } from '@/utils/lazyMotion';
import { getFallbackImage } from '@/utils/imageUtils';

export default function BlogCard({ post, priority = false }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <LazyMotionDiv 
        className="bg-white rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-sage/10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={post.image || getFallbackImage()}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            quality={70}
            priority={priority}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-forest-green/60">{formatDate(post.date)}</span>
            <span className="text-sm text-sage">{post.author}</span>
          </div>
          <h3 className="text-xl font-semibold text-charcoal mb-2">{post.title}</h3>
          <p className="text-forest-green/70 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-cream text-charcoal text-xs px-2 py-1 rounded-full border border-sage/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sage hover:text-forest-green font-semibold inline-flex items-center transition-colors duration-200">
            Read more 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </LazyMotionDiv>
    </Link>
  );
}
