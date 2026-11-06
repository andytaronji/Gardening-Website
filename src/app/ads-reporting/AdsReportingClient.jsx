'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Home page for the "Gardening Thyme Ads Reporting" OAuth app registered in Google Cloud.
// Google's brand verification requires a public page that describes the app and links to
// the privacy policy. This page is intentionally not linked from the navigation, footer or
// sitemap: the tool is internal to Gardening Thyme LLC and is not offered to the public.

export default function AdsReportingClient() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-playfair text-forest-green mb-8 text-center">Gardening Thyme Ads Reporting</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-forest-green">
              Gardening Thyme Ads Reporting is an internal reporting tool built and used by Gardening Thyme LLC, a garden
              design and landscaping company in Marietta, Georgia. It is not offered to the public.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">What the tool does</h2>
            <p className="text-forest-green">
              The tool connects to our own Google Ads account through the Google Ads API and produces reports that help us
              plan and manage our advertising:
            </p>
            <ul className="list-disc pl-6 mb-6 text-forest-green">
              <li>
                <strong>Performance reports:</strong> which searches, days, hours, devices and cities produced clicks, calls
                and form submissions, and what each cost.
              </li>
              <li>
                <strong>Keyword research:</strong> monthly search volume, competition and bid estimates for the services we
                offer in the cities we serve, drawn from Google Ads Keyword Planner.
              </li>
              <li>
                <strong>Campaign planning:</strong> draft ad groups and keyword lists that we review and approve inside
                Google Ads before anything goes live.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">How it works</h2>
            <p className="text-forest-green">
              A member of our team signs in with our company Google account and grants the tool access to our Google Ads
              account. The tool reads reporting and keyword-planning data from that account and writes summaries into
              spreadsheets and documents that only our team can see. It makes changes to campaigns only when a team member
              explicitly runs that step and reviews the result.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Who uses it</h2>
            <p className="text-forest-green">
              Only Gardening Thyme LLC staff. The tool has no public sign-up, no customer-facing features and no third-party
              users.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Privacy</h2>
            <p className="text-forest-green">
              How the tool accesses, uses, stores and shares Google user data is described in the "Google User Data and the
              Gardening Thyme Ads Reporting Tool" section of our{' '}
              <a href="/privacy-policy" className="text-sage hover:text-forest-green transition-colors">Privacy Policy</a>.
            </p>

            <h2 className="text-2xl font-semibold text-forest-green mt-8 mb-4">Contact</h2>
            <p className="mb-6 text-forest-green">
              Gardening Thyme LLC<br />
              2588 Tritt Springs Trace NE, Marietta, GA 30062<br />
              Email: <a href="mailto:services@gardeningthyme.com" className="text-sage hover:text-forest-green transition-colors">services@gardeningthyme.com</a><br />
              Phone: <a href="tel:+14048617744" className="text-sage hover:text-forest-green transition-colors">(404) 861-7744</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
