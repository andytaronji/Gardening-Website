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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-8 max-w-sm mx-auto text-lg leading-relaxed text-center"
              variants={fadeIn}
            >
              Have questions about our services? Ready to start your garden transformation? We'd love to hear from you.
            </motion.p>
            
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
          </div>

          {/* Contact Form */}
          <div>
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}
