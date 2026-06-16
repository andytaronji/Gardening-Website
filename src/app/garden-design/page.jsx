import React from 'react';
import Link from 'next/link';
import { metadata as pageMetadata } from './metadata';
import GardenDesignClient from './GardenDesignClient';
import { getAllLocations, getLocationData } from './[location]/locationData';

export const metadata = pageMetadata;

export default function GardenDesignPage() {
  const locations = getAllLocations();

  return (
    <>
      <GardenDesignClient />

      {/* Areas We Serve — topical hub linking to each location landing page */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-forest-green mb-4">
              Garden Design Across Metro Atlanta
            </h2>
            <p className="text-forest-green/80 leading-relaxed">
              Explore our garden design services tailored to the soil, climate, and style of your community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {locations.map((slug) => {
              const data = getLocationData(slug);
              return (
                <Link
                  key={slug}
                  href={`/garden-design/${slug}`}
                  className="group block bg-white rounded-2xl border border-sage/15 p-6 shadow-sm hover:shadow-lg hover:border-sage/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-forest-green transition-colors">
                    Garden Design in {data.city}
                  </h3>
                  <p className="text-sm text-forest-green/70 leading-relaxed">
                    {data.areaDescription}
                  </p>
                  <span className="inline-flex items-center mt-4 text-sage font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
