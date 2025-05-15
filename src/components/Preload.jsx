'use client';

import React from 'react';
import Head from 'next/head';

export default function Preload() {
  // List of critical resources to preload
  const criticalFonts = [
    { href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap', as: 'style' },
    { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap', as: 'style' },
    { href: 'https://fonts.googleapis.com/css2?family=Parisienne&display=swap', as: 'style' }
  ];

  // Critical images that should be preloaded
  const criticalImages = [
    { href: 'https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_80/v1746893645/front_Page_wm3lfv', as: 'image' },
    { href: 'https://res.cloudinary.com/di4phdven/image/upload/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg', as: 'image' }
  ];

  return (
    <Head>
      {/* Preload critical fonts */}
      {criticalFonts.map((font, index) => (
        <link 
          key={`font-${index}`}
          rel="preload" 
          href={font.href} 
          as={font.as}
          crossOrigin="anonymous"
        />
      ))}

      {/* Preload critical images */}
      {criticalImages.map((image, index) => (
        <link 
          key={`image-${index}`}
          rel="preload" 
          href={image.href} 
          as={image.as}
        />
      ))}

      {/* Add font-display swap to ensure text remains visible during font loading */}
      <style jsx global>{`
        @font-face {
          font-family: 'Raleway';
          font-display: swap;
        }
        @font-face {
          font-family: 'Playfair Display';
          font-display: swap;
        }
        @font-face {
          font-family: 'Parisienne';
          font-display: swap;
        }
      `}</style>
    </Head>
  );
}
