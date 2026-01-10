'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-playfair text-teal-900 mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">Last Updated: May 14, 2025</p>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Introduction</h2>
            <p>
              Gardening Thyme ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services. Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that 
              you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fill out and submit contact forms</li>
              <li>Request information about our services</li>
              <li>Subscribe to our communications</li>
              <li>Correspond with us by phone, email, or otherwise</li>
            </ul>
            <p>
              The personal information we may collect includes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Information about your property or gardening needs</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Automatically Collected Information</h2>
            <p>
              When you visit our website, we may automatically collect certain information about your device and usage patterns. 
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Access times and dates</li>
              <li>Pages viewed</li>
            </ul>
            <p>
              We use Vercel Analytics to help us understand how visitors interact with our website. Vercel Analytics collects 
              information anonymously and reports website trends without identifying individual visitors.
            </p>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you administrative information, such as updates, security alerts, and support messages</li>
              <li>Personalize your experience on our website</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Protect against, identify, and prevent fraud and other unlawful activity</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Disclosure of Your Information</h2>
            <p>
              We may share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services for us or on our behalf.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Data Security</h2>
            <p>
              We implement reasonable precautions and follow industry best practices to protect your personal information and ensure 
              that it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed. However, no method of 
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from 
              children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us, and we will delete such information from our files.
            </p>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-semibold text-teal-800 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-6">
              Gardening Thyme<br />
              Email: <a href="mailto:services@gardeningthyme.com" className="text-teal-600 hover:text-teal-800 transition-colors">services@gardeningthyme.com</a><br />
              Phone: <a href="tel:+14048617744" className="text-teal-600 hover:text-teal-800 transition-colors">(404) 861-7744</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
