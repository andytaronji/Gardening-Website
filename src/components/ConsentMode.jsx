'use client';

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Google Consent Mode v2 Implementation
 * This component initializes consent mode BEFORE any tracking scripts load
 * Compliant with Google's requirements for ad campaigns
 */
export default function ConsentMode() {
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }

    // Set default consent state (REQUIRED before any Google tags load)
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'functionality_storage': 'granted', // Always granted
      'security_storage': 'granted', // Always granted
      'wait_for_update': 500 // Wait 500ms for consent update
    });

    // Check for stored consent preference
    const consent = localStorage.getItem('gardening-thyme-cookie-consent');
    
    if (consent === 'accepted') {
      // User previously accepted - update consent
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }

    // Listen for consent changes from CookieConsent component
    const handleConsentChange = (event) => {
      const consentValue = event.detail?.consent;
      
      if (consentValue === 'accepted') {
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
      } else if (consentValue === 'denied') {
        gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied'
        });
      }
    };

    window.addEventListener('consentUpdated', handleConsentChange);

    return () => {
      window.removeEventListener('consentUpdated', handleConsentChange);
    };
  }, []);

  return (
    <>
      {/* Google Consent Mode v2 initialization script */}
      <Script
        id="consent-mode-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Initialize consent mode v2 BEFORE any tags load
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
          `
        }}
      />
    </>
  );
}
