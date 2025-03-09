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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 -mt-24 pt-32 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-800"
        >
          Contact Gardening Thyme
        </motion.h1>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6 text-center">Get in Touch</h2>
              <p className="text-gray-700 mb-8 text-center text-lg">
                Have questions about our services or need gardening advice? We're here to help!
                Fill out the form or use our contact information to reach out to us.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-center">Contact Information</h3>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-700 mb-4 text-center text-lg"
                >
                  <strong>Email:</strong> services@gardeningthyme.com
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-700 mb-4 text-center text-lg"
                >
                  <strong>Phone:</strong> 508-932-4056
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-700 mb-4 text-center text-lg"
                >
                  <strong>Service Areas:</strong> Marietta, Roswell, Alpharetta, Woodstock, Smyrna / Vinings, and more surrounding areas!
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-700 mb-4 text-center text-lg"
                >
                  <strong>Hours:</strong> Monday - Friday: 9am - 5pm
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6">Send Us a Message</h2>
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
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    placeholder="Subject"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    placeholder="Your message"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  disabled={status.isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ${status.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status.isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
