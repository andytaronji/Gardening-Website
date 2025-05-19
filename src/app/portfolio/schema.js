export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Gardening Thyme Portfolio",
  "description": "Explore our portfolio of garden maintenance, drip irrigation systems, Japanese maple installations, native plantings, and property enhancements across Metro Atlanta.",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Full Leaf Removal and Pinestraw",
        "description": "The property enhancement was implemented to remove built up fallen leaves and pinestraw shaded area."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Japanese Maple Centerpiece",
        "description": "Full removal of dead shrubs, cleanup and hauling of debris, and creation of simple Japanese maple tree and floribunda roses."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Garden Bed Cleanup",
        "description": "Major cleanup and mulching."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Drip Irrigation and Planting",
        "description": "Full drip irrigation system designed to go to each individual plant based on its watering needs with additional planting."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Drip irrigation and Raised Beds",
        "description": "Full drip irrigation system designed to reach all plants in the front of the house and wrap towards the back into full raised beds."
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Native Planting",
        "description": "Planting of natives to support wildlife and local ecosystems."
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "description": "Professional garden services in Metro Atlanta",
    "availability": "https://schema.org/InStock",
    "areaServed": ["Marietta", "Alpharetta", "Milton", "Woodstock", "Vinings", "East Cobb", "Roswell", "Buckhead", "Atlanta"]
  }
};
