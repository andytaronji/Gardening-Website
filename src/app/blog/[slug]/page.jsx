'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/posts';
import ImageComponent from '@/components/ImageComponent';
import { notFound } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  const { slug } = params;
  
  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If no post is found, show 404
  if (!post) {
    notFound();
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-[400px] w-full">
            <ImageComponent
              src={post.image}
              alt={post.title}
              priority={true}
              quality={90}
              aspectRatio="16/9"
              objectFit="cover"
            />
          </div>
          
          <div className="p-8">
            {/* Author and Date */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <span className="text-green-600 font-bold">{post.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-gray-700">{post.author}</p>
                <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{post.title}</h1>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Content */}
            <div
              className="prose prose-green max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
        
        {/* Related Posts or CTA could go here */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Reach out today to learn about our Gardening Lessons!
          </Link>
        </div>
      </div>
    </div>
  );
}
