export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.gardeningthyme.com/#business",
  "name": "Gardening Thyme",
  "alternateName": "Gardening Thyme LLC",
  "description": "Premium garden design, groundskeeping, and maintenance services in Marietta, Atlanta, and surrounding areas. Specializing in pollinator gardens, drip irrigation, and sustainable landscaping.",
  "url": "https://www.gardeningthyme.com",
  "logo": "https://res.cloudinary.com/di4phdven/image/upload/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg",
  "image": [
    "https://res.cloudinary.com/di4phdven/image/upload/v1746894191/Portfolio_Page_1_oskao9.jpg",
    "https://res.cloudinary.com/di4phdven/image/upload/v1747228491/Garden_Design_xh5y5u.jpg"
  ],
  "telephone": "+1-404-861-7744",
  "email": "taronjiandrew@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marietta",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.9526",
    "longitude": "-84.5499"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Marietta",
      "addressRegion": "GA"
    },
    {
      "@type": "City", 
      "name": "Atlanta",
      "addressRegion": "GA"
    },
    {
      "@type": "City",
      "name": "Alpharetta", 
      "addressRegion": "GA"
    },
    {
      "@type": "City",
      "name": "Milton",
      "addressRegion": "GA"
    },
    {
      "@type": "City",
      "name": "Vinings",
      "addressRegion": "GA"
    },
    {
      "@type": "City",
      "name": "Woodstock",
      "addressRegion": "GA"
    },
    {
      "@type": "City",
      "name": "Roswell",
      "addressRegion": "GA"
    }
  ],
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$",
  "serviceType": [
    "Garden Design",
    "Groundskeeping",
    "Garden Maintenance", 
    "Quarterly Cleanups",
    "Property Enhancement",
    "Vegetable Garden Consultation",
    "Drip Irrigation Installation",
    "Landscape Design"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Garden Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garden Design",
          "description": "Premium garden design services specializing in pollinator gardens and native plantings"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Groundskeeping Services",
          "description": "Professional groundskeeping and garden maintenance for high-end properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Quarterly Garden Cleanups",
          "description": "Seasonal garden cleanup and maintenance services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vegetable Garden Design",
          "description": "Custom vegetable garden design and consultation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Enhancement",
          "description": "Comprehensive property enhancement including pressure washing and garden installations"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.gardeningthyme.com"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.gardeningthyme.com/#organization",
  "name": "Gardening Thyme",
  "url": "https://www.gardeningthyme.com",
  "logo": "https://res.cloudinary.com/di4phdven/image/upload/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-404-861-7744",
    "contactType": "customer service",
    "email": "taronjiandrew@gmail.com",
    "availableLanguage": "English"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.gardeningthyme.com/#website",
  "url": "https://www.gardeningthyme.com",
  "name": "Gardening Thyme",
  "description": "Premium garden design and maintenance services in Marietta, Atlanta, and surrounding Georgia areas",
  "publisher": {
    "@id": "https://www.gardeningthyme.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.gardeningthyme.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
