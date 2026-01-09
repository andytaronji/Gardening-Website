'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(null);

  useEffect(() => {
    const consent = localStorage.getItem('gardening-thyme-cookie-consent');
    setConsentGiven(consent);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gardening-thyme-cookie-consent', 'accepted');
    
    // Dispatch consent event for Consent Mode v2
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('consentUpdated', { 
        detail: { consent: 'accepted' } 
      }));
      
      // Also push to dataLayer for backward compatibility
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'cookie_consent_given' });
      }
    }
    
    setShowBanner(false);
    setConsentGiven('accepted');
  };

  const handleDeny = () => {
    localStorage.setItem('gardening-thyme-cookie-consent', 'denied');
    
    // Dispatch consent event for Consent Mode v2
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('consentUpdated', { 
        detail: { consent: 'denied' } 
      }));
      
      // Disable Google Analytics (legacy support)
      window['ga-disable-AW-17486011088'] = true;
      
      // Also push to dataLayer for backward compatibility
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'cookie_consent_denied' });
    }
    
    setShowBanner(false);
    setConsentGiven('denied');
  };

  if (consentGiven !== null || !showBanner) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(90deg, rgba(22,101,52,0.98) 0%, rgba(21,128,61,0.98) 100%)',
        color: '#fff',
        padding: '20px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <div style={{ 
        fontSize: '14px', 
        lineHeight: '1.6', 
        textAlign: 'center',
        maxWidth: '800px',
      }}>
        <span>
          🌱 <strong>We value your privacy.</strong> We use cookies to enhance your experience, 
          analyze site traffic, and provide personalized content. You can choose to accept or deny 
          non-essential cookies.{' '}
          <a 
            href="/privacy-policy" 
            style={{ 
              color: '#fff', 
              textDecoration: 'underline',
              fontWeight: '600'
            }}
          >
            Learn more
          </a>
        </span>
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button 
          onClick={handleAccept}
          style={{
            backgroundColor: '#15803d',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            padding: '12px 32px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#166534'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#15803d'}
        >
          Accept All Cookies
        </button>
        <button 
          onClick={handleDeny}
          style={{
            backgroundColor: '#374151',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            padding: '12px 32px',
            borderRadius: '8px',
            border: '1px solid #6b7280',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1f2937'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#374151'}
        >
          Deny Non-Essential
        </button>
      </div>
    </div>
  );
}
