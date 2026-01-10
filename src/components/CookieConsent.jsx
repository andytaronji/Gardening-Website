'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gardening-thyme-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
  };

  if (!showBanner) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#027c68',
        color: '#fff',
        padding: isMobile ? '12px 16px' : '16px 32px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '12px' : '24px',
      }}
    >
      <div style={{ 
        flex: 1,
        fontSize: '14px',
        lineHeight: '1.5',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        🌸 <strong>This website uses cookies</strong> - We use cookies in order to enhance your experience on our website. By using our website and pressing "Ok" you consent to cookies.{' '}
        <a 
          href="/privacy-policy" 
          style={{ 
            color: '#fff',
            textDecoration: 'underline',
            fontWeight: '600'
          }}
        >
          Legal index
        </a>
      </div>
      <button 
        onClick={handleAccept}
        style={{
          backgroundColor: '#fff',
          color: '#027c68',
          fontSize: '16px',
          fontWeight: '700',
          padding: '8px 24px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          alignSelf: isMobile ? 'center' : 'auto'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#f0f0f0';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#fff';
        }}
      >
        Ok
      </button>
    </div>
  );
}
