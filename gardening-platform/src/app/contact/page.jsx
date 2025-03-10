'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', isError: false, isSubmitting: true });
    console.log('Submitting form...', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response received:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        message: 'Message sent successfully! We will get back to you soon.',
        isError: false,
        isSubmitting: false
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        message: error.message || 'Failed to send message. Please try again.',
        isError: true,
        isSubmitting: false
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 -mt-16">
      <motion.div
        variants={fadeIn}
        className="bg-[#fafaf8] p-12 rounded-lg shadow-lg max-w-6xl w-full my-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="pr-4">
            <motion.h1 
              className="text-4xl font-bold text-green-800 mb-6 text-center"
              variants={fadeIn}
            >
              Let's Create Something Beautiful
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-8 max-w-sm mx-auto text-lg leading-relaxed text-center"
              variants={fadeIn}
            >
              Whether you're dreaming of a vibrant garden or need expert maintenance, we're here to help your outdoor space thrive.
            </motion.p>
            
            <div className="mt-12 bg-green-50/50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-6 text-center">How to Reach Us</h3>
              <motion.div 
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">services@gardeningthyme.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg">508-932-4056</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg text-center">Marietta, Roswell, Alpharetta, <br/>Woodstock, Smyrna / Vinings</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg">Mon - Fri: 9am - 5pm</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-green-700 mb-6">Share Your Vision</h2>
              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-md mb-6 ${status.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}
                >
                  {status.message}
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-gray-700 mb-1 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="What can we help you with?"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your garden dreams..."
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  disabled={status.isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ${status.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} shadow-sm hover:shadow-md`}
                >
                  {status.isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
