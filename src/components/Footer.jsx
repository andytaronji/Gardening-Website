'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="navbar-bg-sage text-white py-12">
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
              <li><Link href="/" className="hover:text-teal-300 transition-colors">Home</Link></li>
              <li><Link href="/garden-design" className="hover:text-teal-300 transition-colors">Garden Design</Link></li>
              <li><Link href="/groundskeeping" className="hover:text-teal-300 transition-colors">Groundskeeping</Link></li>
              <li><Link href="/quarterly-cleanups" className="hover:text-teal-300 transition-colors">Quarterly Cleanups</Link></li>
              <li><Link href="/property-enhancement" className="hover:text-teal-300 transition-colors">Property Enhancement</Link></li>
              <li><Link href="/consultations/vegetable-garden" className="hover:text-teal-300 transition-colors">Vegetable Garden</Link></li>
              <li><Link href="/portfolio" className="hover:text-teal-300 transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-teal-300 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-teal-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Phone: <a href="tel:+14048617744" className="hover:text-teal-300 transition-colors">(404) 861-7744</a></p>
            <p className="mb-4">Email: <a href="mailto:services@gardeningthyme.com" className="hover:text-teal-300 transition-colors">services@gardeningthyme.com</a></p>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div className="border-t border-teal-700 mt-8 pt-8 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Gardening Thyme. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-teal-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
