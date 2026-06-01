'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from './data/posts';
import BlogCard from '@/components/BlogCard';

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-playfair text-forest-green mb-6">Our Garden Blog</h1>
          <p className="text-xl text-forest-green leading-relaxed">
            Discover expert tips, seasonal guides, and inspiring ideas for your garden
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-block bg-charcoal text-cream font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300"
          >
            Reach out today to learn about our Gardening Lessons!
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
