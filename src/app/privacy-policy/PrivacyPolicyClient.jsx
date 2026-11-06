'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-playfair text-forest-green mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-forest-green/70">Last Updated: November 6, 2026</p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Introduction</h2>
            <p className="text-forest-green">
              Gardening Thyme ("we," "our," or "us") respects your privacy and is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services. Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that
              you have read, understood, and agree to be bound by this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Information We Collect</h2>
            <p className="text-forest-green">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li>Fill out and submit contact forms</li>
              <li>Request information about our services</li>
              <li>Subscribe to our communications</li>
              <li>Correspond with us by phone, email, or otherwise</li>
            </ul>
            <p className="text-forest-green">
              The personal information we may collect includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Information about your property or gardening needs</li>
            </ul>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Automatically Collected Information</h2>
            <p className="text-forest-green">
              When you visit our website, we may automatically collect certain information about your device and usage patterns.
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Access times and dates</li>
              <li>Pages viewed</li>
            </ul>
            <p className="text-forest-green">
              We use Vercel Analytics to help us understand how visitors interact with our website. Vercel Analytics collects
              information anonymously and reports website trends without identifying individual visitors.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-forest-green">
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you administrative information, such as updates, security alerts, and support messages</li>
              <li>Personalize your experience on our website</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Protect against, identify, and prevent fraud and other unlawful activity</li>
            </ul>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Disclosure of Your Information</h2>
            <p className="text-forest-green">
              We may share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services for us or on our behalf.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Google User Data and the Gardening Thyme Ads Reporting Tool</h2>
            <p className="text-forest-green">
              Gardening Thyme LLC operates an internal tool,{' '}
              <a href="/ads-reporting" className="text-sage hover:text-forest-green transition-colors">Gardening Thyme Ads Reporting</a>,
              that connects to our own Google Ads account through the Google Ads API. This section describes how that tool
              handles Google user data. It applies only to the Google accounts of our own staff who authorize the tool; it
              does not involve data from website visitors or customers.
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li>
                <strong>What the tool accesses:</strong> When a staff member authorizes the tool, it requests the Google Ads
                scope (https://www.googleapis.com/auth/adwords). Through it the tool reads advertising performance reports,
                keyword research data from Google Ads Keyword Planner, and campaign settings for the Gardening Thyme LLC
                Google Ads account. It may also create or edit campaigns, ad groups, keywords and ads in that account when a
                staff member runs that step and reviews the result.
              </li>
              <li>
                <strong>How we use it:</strong> We use this data only to measure and plan our own advertising: to see which
                searches, days, hours, devices and cities produce calls and form submissions, to research keywords and bid
                estimates for our services and service areas, and to draft and manage our own campaigns. We do not use it
                to build profiles of individuals, for advertising to anyone other than through our own Google Ads account,
                or for any purpose unrelated to our business.
              </li>
              <li>
                <strong>How we store it:</strong> Reports and summaries derived from this data are stored in Google Workspace
                files (Google Sheets, Docs and Drive) owned by Gardening Thyme LLC and accessible only to our staff, and in
                temporary processing environments that are cleared when the work is done. Access credentials are stored
                privately and are never published or shared.
              </li>
              <li>
                <strong>How we share it:</strong> We do not sell this data and do not share it with third parties. It may be
                processed by service providers we use to run the tool, such as cloud computing and AI services, solely to
                produce our reports, and only under terms that prohibit any other use. We do not transfer Google user data
                to data brokers, advertising networks or other businesses.
              </li>
              <li>
                <strong>Human access and AI:</strong> Only Gardening Thyme LLC staff read this data. We do not use Google user
                data obtained through the tool to develop, improve or train artificial intelligence or machine learning
                models, other than personalized use within our own account.
              </li>
              <li>
                <strong>Retention and deletion:</strong> Derived reports are kept for as long as they are useful for planning
                our advertising and deleted when they are not. A staff member can revoke the tool's access at any time at{' '}
                <a href="https://myaccount.google.com/permissions" className="text-sage hover:text-forest-green transition-colors" rel="noopener noreferrer" target="_blank">myaccount.google.com/permissions</a>,
                after which the tool can no longer read or change account data.
              </li>
              <li>
                <strong>Limited use:</strong> Our use and transfer of information received from Google APIs adheres to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-sage hover:text-forest-green transition-colors" rel="noopener noreferrer" target="_blank">Google API Services User Data Policy</a>,
                including the Limited Use requirements.
              </li>
            </ul>
            <p className="text-forest-green">
              Questions about this section can be sent to the contact details in the "Contact Us" section below.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Data Security</h2>
            <p className="text-forest-green">
              We implement reasonable precautions and follow industry best practices to protect your personal information and ensure
              that it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Your Rights</h2>
            <p className="text-forest-green">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-forest-green">
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Children's Privacy</h2>
            <p className="text-forest-green">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from
              children under 13. If you are a parent or guardian and believe your child has provided us with personal information,
              please contact us, and we will delete such information from our files.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-forest-green">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy
              on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Contact Us</h2>
            <p className="text-forest-green">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-6 text-forest-green">
              Gardening Thyme<br />
              Email: <a href="mailto:services@gardeningthyme.com" className="text-sage hover:text-forest-green transition-colors">services@gardeningthyme.com</a><br />
              Phone: <a href="tel:+14048617744" className="text-sage hover:text-forest-green transition-colors">(404) 861-7744</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
