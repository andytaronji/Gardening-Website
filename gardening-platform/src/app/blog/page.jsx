'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from './data/posts';
import BlogCard from '../../components/BlogCard';
import BlogModal from '../../components/BlogModal';
import SearchBar from '../../components/SearchBar';

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

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8 text-green-800"
      >
        Gardening Thyme Blog
      </motion.h1>
      
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onClick={() => openModal(post)} 
            />
          ))}
        </motion.div>
      )}

      {isModalOpen && selectedPost && (
        <BlogModal 
          post={selectedPost} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}
