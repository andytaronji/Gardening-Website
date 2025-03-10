'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from './data/posts';
import BlogCard from '../../components/BlogCard';
import BlogModal from '../../components/BlogModal';
import SearchBar from '../../components/SearchBar';

// Add JSON-LD structured data for blog
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  'name': 'Gardening Thyme Blog',
  'description': 'Expert gardening tips, seasonal advice, and sustainable practices to help your garden thrive.',
  'publisher': {
    '@type': 'Organization',
    'name': 'Gardening Thyme',
    'logo': {
      '@type': 'ImageObject',
      'url': '/images/logo.png'
    }
  },
  'blogPost': blogPosts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.image,
    'datePublished': post.date,
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'keywords': post.tags.join(', '),
    'url': `/blog/${post.slug}`
  }))
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter posts based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPosts(blogPosts);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery]);

  // Open modal with selected post
  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-800 mb-6">Our Garden Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover gardening tips, seasonal advice, and expert insights to help your garden thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </motion.div>

        {filteredPosts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-lg text-gray-600 my-12"
          >
            No blog posts found matching your search criteria.
          </motion.p>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="h-full"
              >
                <BlogCard 
                  post={post} 
                  onClick={() => openModal(post)} 
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {isModalOpen && selectedPost && (
            <BlogModal 
              post={selectedPost} 
              isOpen={isModalOpen} 
              onClose={closeModal} 
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
