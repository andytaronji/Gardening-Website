import React from 'react';
import Link from 'next/link';
import GardenDesignLocationClient from './GardenDesignLocationClient';
import { getLocationData, getAllLocations } from './locationData';
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
  const resolvedParams = await params;
  const locationData = getLocationData(resolvedParams.location);
  
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
      canonical: `https://www.gardeningthyme.com/garden-design/${resolvedParams.location}`,
    },
    other: {
      'link': JSON.stringify([
        {
          rel: 'preload',
          as: 'image',
          href: 'https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_1200/v1747228491/Garden_Design_xh5y5u.jpg',
          fetchpriority: 'high'
        }
      ])
    }
  };
}

export default async function GardenDesignLocationPage({ params }) {
  const resolvedParams = await params;
  const locationData = getLocationData(resolvedParams.location);
  const faqSchema = generateFAQSchema(locationData.city);
  const nearbyLocations = getAllLocations().filter((slug) => slug !== resolvedParams.location);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GardenDesignLocationClient locationData={locationData} />

      {/* Nearby areas — cross-links to the other location landing pages */}
      <section className="bg-cream py-12 border-t border-sage/15">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif text-forest-green mb-6">
            We Also Serve Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyLocations.map((slug) => {
              const data = getLocationData(slug);
              return (
                <Link
                  key={slug}
                  href={`/garden-design/${slug}`}
                  className="px-5 py-2.5 bg-white rounded-[4px] border border-sage/20 text-forest-green font-medium text-sm hover:bg-sage/10 hover:border-sage/40 transition-all duration-300"
                >
                  Garden Design in {data.city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
