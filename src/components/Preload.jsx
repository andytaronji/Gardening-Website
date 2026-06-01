'use client';

import React, { useEffect } from 'react';

export default function Preload() {
  useEffect(() => {
    // Load critical font (Raleway) immediately as it's used in navigation and headers
    const criticalFontLink = document.createElement('link');
    criticalFontLink.rel = 'stylesheet';
    criticalFontLink.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap';
    document.head.appendChild(criticalFontLink);

    // Load secondary fonts after critical content
    const loadSecondaryFonts = () => {
      const secondaryFonts = [
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap'
      ];

      secondaryFonts.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = fontUrl;
        link.media = 'print';
        link.onload = function() { this.media = 'all'; };
        document.head.appendChild(link);
      });
    };

    // Load decorative fonts only when needed (lazy load)
    const loadDecorativeFonts = () => {
      const decorativeFonts = [
        'https://fonts.googleapis.com/css2?family=Parisienne&display=swap'
      ];

      decorativeFonts.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = fontUrl;
        link.media = 'print';
        link.onload = function() { this.media = 'all'; };
        document.head.appendChild(link);
      });
    };

    // Delay secondary font loading
    setTimeout(loadSecondaryFonts, 100);
    
    // Delay decorative font loading even more
    setTimeout(loadDecorativeFonts, 1000);

    // Cleanup function
    return () => {
      // No cleanup needed as these resources should remain loaded
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // This component doesn't render anything visible
  return null;
}
