'use client';

import React, { useState } from 'react';

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Contact Gardening Thyme</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions about our services or need gardening advice? We're here to help!
              Fill out the form or use our contact information to reach out to us.
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> services@gardeningthyme.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> 508-932-4056
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Service Areas:</strong> Marietta, Roswell, Alpharetta, Woodstock, Smyrna / Vinings, and more surrounding areas!
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Hours:</strong> Monday - Friday: 9am - 5pm
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Send Us a Message</h2>
            {status.message && (
              <div className={`p-4 rounded-md mb-4 ${status.isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status.isSubmitting}
                className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ${status.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {status.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
