'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    isError: false,
    message: '',
    showStatus: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { value: '', label: 'Select a service (optional)' },
    { value: 'garden-design', label: 'Garden Design' },
    { value: 'groundskeeping', label: 'Groundskeeping' },
    { value: 'quarterly-cleanups', label: 'Quarterly Cleanups' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear status message when user starts typing again
    if (status.showStatus) {
      setStatus({
        isError: false,
        message: '',
        showStatus: false
      });
    }
  };

  const validateForm = () => {
    // Basic validation
    if (!formData.name.trim()) {
      setStatus({
        isError: true,
        message: 'Please enter your name',
        showStatus: true
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      setStatus({
        isError: true,
        message: 'Please enter your email address',
        showStatus: true
      });
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        isError: true,
        message: 'Please enter a valid email address',
        showStatus: true
      });
      return false;
    }
    
    if (!formData.subject.trim()) {
      setStatus({
        isError: true,
        message: 'Please enter a subject',
        showStatus: true
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      setStatus({
        isError: true,
        message: 'Please enter your message',
        showStatus: true
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ 
      isError: false, 
      message: 'Sending message...', 
      showStatus: true 
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setStatus({
        isError: false,
        message: 'Thank you for your message! We will get back to you soon.',
        showStatus: true
      });
      
      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {'send_to': 'AW-11312192738/9imTCMqd3cgaEOK5iZIq'});
      }
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        isError: true,
        message: error.message || 'There was an error sending your message. Please try again.',
        showStatus: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-medium text-[#1d1d1f] mb-4">Contact Gardening Thyme</h1>
          <p className="text-lg text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            Whether you're dreaming of a vibrant garden or need expert maintenance, we're here to help your outdoor space thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
        >
          {status.showStatus && status.message && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 px-4 py-3 rounded-lg text-sm font-medium ${
                status.isError 
                  ? 'bg-red-50 text-red-800 border border-red-100' 
                  : 'bg-green-50 text-green-800 border border-green-100'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-8 pb-3 text-base border-b border-[#86868b] bg-transparent focus:outline-none focus:border-[#1d1d1f] transition-colors placeholder-transparent"
                  placeholder="Name"
                  required
                  disabled={isSubmitting}
                />
                <label 
                  htmlFor="name"
                  className="absolute top-2 left-4 text-xs text-[#86868b] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs"
                >
                  Name
                </label>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-8 pb-3 text-base border-b border-[#86868b] bg-transparent focus:outline-none focus:border-[#1d1d1f] transition-colors placeholder-transparent"
                  placeholder="Email"
                  required
                  disabled={isSubmitting}
                />
                <label 
                  htmlFor="email"
                  className="absolute top-2 left-4 text-xs text-[#86868b] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs"
                >
                  Email
                </label>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="relative"
              >
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-8 pb-3 text-base border-b border-[#86868b] bg-transparent focus:outline-none focus:border-[#1d1d1f] transition-colors placeholder-transparent"
                  placeholder="Phone (optional)"
                  disabled={isSubmitting}
                />
                <label 
                  htmlFor="phone"
                  className="absolute top-2 left-4 text-xs text-[#86868b] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs"
                >
                  Phone (optional)
                </label>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-8 pb-3 text-base border-b border-[#86868b] bg-transparent focus:outline-none focus:border-[#1d1d1f] transition-colors appearance-none"
                  disabled={isSubmitting}
                >
                  {serviceTypes.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <label 
                  htmlFor="serviceType"
                  className="absolute top-2 left-4 text-xs text-[#86868b]"
                >
                  Service Type
                </label>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="relative"
            >
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="peer w-full px-4 pt-8 pb-3 text-base border-b border-[#86868b] bg-transparent focus:outline-none focus:border-[#1d1d1f] transition-colors placeholder-transparent"
                placeholder="Subject"
                required
                disabled={isSubmitting}
              />
              <label 
                htmlFor="subject"
                className="absolute top-2 left-4 text-xs text-[#86868b] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs"
              >
                Subject
              </label>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="peer w-full px-4 pt-8 pb-3 text-base border-b border-[#86868b] bg-transparent focus:outline-none focus:border-[#1d1d1f] transition-colors placeholder-transparent resize-none"
                placeholder="Message"
                required
                disabled={isSubmitting}
              ></textarea>
              <label 
                htmlFor="message"
                className="absolute top-2 left-4 text-xs text-[#86868b] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs"
              >
                Message
              </label>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-800 text-white font-medium py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="space-y-2 text-[#86868b]">
            <p className="text-sm">
              <a href="mailto:taronjiandrew@gmail.com" className="hover:text-green-600 transition-colors">
                taronjiandrew@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+14048617744" className="hover:text-green-600 transition-colors">
                404-861-7744
              </a>
            </p>
            <p className="text-sm">Marietta, Roswell, Alpharetta, Woodstock, Smyrna / Vinings</p>
            <p className="text-sm">Mon - Fri: 9am - 5pm</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
