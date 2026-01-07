import React from 'react';
import GardenDesignLocationClient from './GardenDesignLocationClient';
import { getLocationData } from './locationData';
import { generateFAQSchema } from './faqSchema';

// Generate static paths for all locations
export async function generateStaticParams() {
  return [
    { location: 'marietta' },
    { location: 'atlanta' },
    { location: 'roswell' },
    { location: 'alpharetta' },
    { location: 'sandy-springs' },
  ];
}

// Dynamic metadata generation for each location
export async function generateMetadata({ params }) {
  const locationData = getLocationData(params.location);
  
  return {
    title: `Premium Garden Design Services in ${locationData.city} | Expert Landscaping`,
    description: `Professional garden design services in ${locationData.city}, GA. Specializing in high-end pollinator gardens, native plantings, and luxury landscape design. Serving ${locationData.areaDescription}.`,
    keywords: `garden design ${locationData.city}, landscape design ${locationData.city}, pollinator gardens ${locationData.city}, native plantings ${locationData.city}, luxury landscaping ${locationData.city}`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `Premium Garden Design Services in ${locationData.city} | Gardening Thyme`,
      description: `Professional garden design services in ${locationData.city}, GA. Specializing in high-end pollinator gardens and native plantings.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Gardening Thyme',
      images: [
        {
          url: 'https://res.cloudinary.com/di4phdven/image/upload/v1747228491/Garden_Design_xh5y5u.jpg',
          width: 1200,
          height: 630,
          alt: `Garden design services in ${locationData.city} by Gardening Thyme`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Premium Garden Design Services in ${locationData.city}`,
      description: `Professional garden design services in ${locationData.city}, GA. Specializing in high-end pollinator gardens and native plantings.`,
      images: ['https://res.cloudinary.com/di4phdven/image/upload/v1747228491/Garden_Design_xh5y5u.jpg'],
    },
    alternates: {
      canonical: `https://gardeningthyme.com/garden-design/${params.location}`,
    },
  };
}

export default function GardenDesignLocationPage({ params }) {
  const locationData = getLocationData(params.location);
  const faqSchema = generateFAQSchema(locationData.city);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GardenDesignLocationClient locationData={locationData} />
    </>
  );
}
