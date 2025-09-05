'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-cursive mb-4">Gardening Thyme</h3>
            <p className="mb-4">Professional garden design and maintenance services in Marietta, Georgia.</p>
            <p>Serving: East Cobb, Marietta, Roswell, Alpharetta, Milton, Buckhead, Atlanta, and surrounding areas</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-300 transition-colors">Home</Link></li>
              <li><Link href="/garden-design" className="hover:text-green-300 transition-colors">Garden Design</Link></li>
              <li><Link href="/groundskeeping" className="hover:text-green-300 transition-colors">Groundskeeping</Link></li>
              <li><Link href="/quarterly-cleanups" className="hover:text-green-300 transition-colors">Quarterly Cleanups</Link></li>
              <li><Link href="/property-enhancement" className="hover:text-green-300 transition-colors">Property Enhancement</Link></li>
              <li><Link href="/consultations/vegetable-garden" className="hover:text-green-300 transition-colors">Vegetable Garden</Link></li>
              <li><Link href="/portfolio" className="hover:text-green-300 transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-green-300 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-green-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Phone: <a href="tel:+14048617744" className="hover:text-green-300 transition-colors">(404) 861-7744</a></p>
            <p className="mb-4">Email: <a href="mailto:services@gardeningthyme.com" className="hover:text-green-300 transition-colors">services@gardeningthyme.com</a></p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/gardeningthyme" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit our Facebook page"
                className="hover:text-green-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com/gardeningthyme" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit our Instagram page"
                className="hover:text-green-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Gardening Thyme. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-green-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
