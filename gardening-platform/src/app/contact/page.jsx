import React from 'react';

export default function ContactPage() {
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
                <strong>Email:</strong> info@gardeningthyme.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 123 Garden Street, Plantville, GP 12345
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Hours:</strong> Monday - Friday: 9am - 5pm
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
