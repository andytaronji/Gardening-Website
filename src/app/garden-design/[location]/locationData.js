// Location-specific data for SEO and content personalization
const locations = {
  'marietta': {
    city: 'Marietta',
    citySlug: 'marietta',
    areaDescription: 'East Cobb, West Cobb, and surrounding Marietta neighborhoods',
    zipCodes: ['30060', '30062', '30064', '30066', '30067', '30068'],
    neighborhoods: ['East Cobb', 'West Cobb', 'Historic Marietta Square', 'Whitlock Avenue', 'Johnson Ferry'],
    localFeatures: 'Known for historic homes and mature landscapes, Marietta gardens benefit from established tree canopies and diverse microclimates.',
    gardenConsiderations: 'Clay soil amendments, shade garden solutions for mature tree coverage, and heat-tolerant native plants for full sun areas.',
  },
  'atlanta': {
    city: 'Atlanta',
    citySlug: 'atlanta',
    areaDescription: 'Buckhead, Midtown, Virginia-Highland, and Metro Atlanta',
    zipCodes: ['30305', '30306', '30308', '30309', '30318', '30324', '30327'],
    neighborhoods: ['Buckhead', 'Midtown', 'Virginia-Highland', 'Inman Park', 'Morningside'],
    localFeatures: 'Urban and suburban gardens with varied architecture from historic bungalows to modern estates.',
    gardenConsiderations: 'Urban heat island effects, container gardens for townhomes, rooftop gardens, and shade-tolerant native plants.',
  },
  'roswell': {
    city: 'Roswell',
    citySlug: 'roswell',
    areaDescription: 'Historic Roswell, East Roswell, and surrounding communities',
    zipCodes: ['30075', '30076'],
    neighborhoods: ['Historic Roswell', 'East Roswell', 'Riverside', 'Horseshoe Bend', 'Willeo'],
    localFeatures: 'Established neighborhoods with mature landscapes near the Chattahoochee River.',
    gardenConsiderations: 'Moisture management for river-adjacent properties, deer-resistant plantings, and woodland garden designs.',
  },
  'alpharetta': {
    city: 'Alpharetta',
    citySlug: 'alpharetta',
    areaDescription: 'Downtown Alpharetta, Windward, and North Fulton communities',
    zipCodes: ['30005', '30009', '30022', '30023'],
    neighborhoods: ['Downtown Alpharetta', 'Windward', 'Crabapple', 'Milton', 'Haynes Bridge'],
    localFeatures: 'Mix of newer developments and established neighborhoods with spacious lots.',
    gardenConsiderations: 'Full sun exposure in newer developments, pollinator corridors, and low-maintenance native plantings.',
  },
  'sandy-springs': {
    city: 'Sandy Springs',
    citySlug: 'sandy-springs',
    areaDescription: 'Perimeter Center, Riverside, and North Springs communities',
    zipCodes: ['30328', '30342', '30350'],
    neighborhoods: ['Riverside', 'North Springs', 'Perimeter Center', 'Dunwoody border', 'Abernathy'],
    localFeatures: 'Urban forest setting with rolling terrain and established tree canopies.',
    gardenConsiderations: 'Steep slope gardens, shade garden specialists, and erosion control through native plant root systems.',
  },
};

// Fallback for unknown locations
const defaultLocation = {
  city: 'Metro Atlanta',
  citySlug: 'atlanta',
  areaDescription: 'Greater Atlanta and surrounding communities',
  zipCodes: [],
  neighborhoods: [],
  localFeatures: 'Diverse landscapes across the Metro Atlanta region.',
  gardenConsiderations: 'Custom solutions tailored to your specific property and microclimate.',
};

export function getLocationData(locationSlug) {
  return locations[locationSlug] || defaultLocation;
}

export function getAllLocations() {
  return Object.keys(locations);
}
