// FAQ Schema for Garden Design Location Pages
export function generateFAQSchema(city) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does garden design cost in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Garden design services in ${city} typically range from $1,500-$5,000+ depending on property size, complexity, and features. Our premium garden design consultations start with an on-site assessment, followed by custom design plans, plant selection, and installation guidance tailored to ${city}'s specific climate and soil conditions.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the best time of year for garden design in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While garden design planning can happen year-round in ${city}, the ideal times for implementation are spring (March-May) and fall (September-November). These seasons offer optimal conditions for plant establishment in Georgia's climate. We recommend starting the design process 2-3 months before your preferred installation season.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you design pollinator gardens in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! Pollinator gardens are one of our specialties in ${city}. We design sustainable gardens featuring native Georgia plants that attract butterflies, bees, and hummingbirds. These eco-friendly gardens support local ecosystems while creating beautiful, low-maintenance landscapes perfect for ${city} properties.`
        }
      },
      {
        "@type": "Question",
        "name": `What native plants work best for ${city} gardens?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Popular native plants for ${city} gardens include Georgia aster, black-eyed Susan, coneflowers, native azaleas, coral honeysuckle, and beautyberry. These plants thrive in Georgia's Zone 7b/8a climate, require minimal maintenance once established, and provide year-round interest while supporting local wildlife.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does the garden design process take in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our ${city} garden design process typically takes 2-4 weeks from initial consultation to final design delivery. This includes an on-site visit, design development, plant selection, and detailed plans. Implementation timelines vary based on project scope, typically ranging from 1-4 weeks for installation.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you provide ongoing garden maintenance in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we offer comprehensive garden maintenance services throughout ${city}. Our services include seasonal cleanups, pruning, mulching, plant health monitoring, and organic pest management. We create custom maintenance plans to keep your garden thriving year-round in Georgia's climate.`
        }
      }
    ]
  };
}
