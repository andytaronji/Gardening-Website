'use client';

import React, { useEffect } from 'react';

export default function Preload() {
  useEffect(() => {
    // Preload critical fonts
    const criticalFonts = [
      { href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap', as: 'style' },
      { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap', as: 'style' },
      { href: 'https://fonts.googleapis.com/css2?family=Parisienne&display=swap', as: 'style' }
    ];

    // Critical images that should be preloaded
    const criticalImages = [
      { href: 'https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200/v1746893645/front_Page_wm3lfv', as: 'image' },
      { href: 'https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_80,w_192/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg', as: 'image' }
    ];

    // Dynamically create and append preload links
    const preloadResources = [...criticalFonts, ...criticalImages];
    
    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === 'style') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Add font-display swap styles
    const style = document.createElement('style');
    style.textContent = `
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
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      // No cleanup needed as these resources should remain preloaded
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // This component doesn't render anything visible
  return null;
}
