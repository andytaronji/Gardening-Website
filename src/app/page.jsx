'use client';

import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';

// Add metadata for the home page
export const metadata = {
  title: 'Professional Garden Design & Maintenance Services | Marietta, Atlanta Area',
  description: 'Transform your outdoor space with expert garden design, maintenance, and consultation services in Marietta, Roswell, Alpharetta, and surrounding areas. Specializing in vegetable gardens, landscape design, and property enhancement.',
  keywords: ['garden design Marietta', 'landscaping Atlanta', 'vegetable garden installation', 'garden maintenance', 'property enhancement', 'garden consultation', 'organic gardening'],
  alternates: {
    canonical: '/'
  }
}

// Add JSON-LD structured data for the organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Gardening Thyme',
  'description': 'Professional garden design and maintenance services in the greater Atlanta area.',
  'url': 'https://gardeningthyme.com',
  'logo': 'https://gardeningthyme.com/logo.png',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Marietta',
    'addressRegion': 'GA',
    'addressCountry': 'US'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '508-932-4056',
    'contactType': 'customer service',
    'email': 'services@gardeningthyme.com',
    'areaServed': ['Marietta', 'Roswell', 'Alpharetta', 'Woodstock', 'Smyrna', 'Vinings'],
    'availableLanguage': ['English']
  },
  'sameAs': [
    'https://facebook.com/gardeningthyme',
    'https://instagram.com/gardeningthyme'
  ]
}

// Add WebSite structured data
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Gardening Thyme',
  'url': 'https://gardeningthyme.com',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': 'https://gardeningthyme.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
      </div>
    </>
  );
} 