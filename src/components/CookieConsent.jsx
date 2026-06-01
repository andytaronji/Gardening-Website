'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    // Reload Cookiebot to accept all cookies
    if (typeof window !== 'undefined' && window.Cookiebot) {
      window.Cookiebot.submitCustomConsent(true, true, true);
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    // Reload Cookiebot to decline non-essential cookies
    if (typeof window !== 'undefined' && window.Cookiebot) {
      window.Cookiebot.submitCustomConsent(false, false, false);
    }
  };

  if (!showBanner) return null;

  return (
    <>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="f4b4b0a6-7e47-4f8d-8a25-ee6e7e7f0f98"
        data-blockingmode="auto"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      
      <div 
        className="cookie-consent-banner"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#1a1a1a',
          color: '#fff',
          zIndex: 9999,
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <div className="cookie-consent-content">
          <p className="cookie-consent-text">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.{' '}
            <a 
              href="/privacy-policy" 
              className="cookie-consent-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </p>
          <div className="cookie-consent-buttons">
            <button
              onClick={handleAccept}
              className="cookie-consent-button cookie-consent-accept"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="cookie-consent-button cookie-consent-decline"
            >
              Decline
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cookie-consent-content {
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .cookie-consent-text {
          flex: 1;
          margin: 0;
          fontSize: 14px;
          lineHeight: 1.5;
        }

        .cookie-consent-link {
          color: #3b82f6;
          textDecoration: underline;
        }

        .cookie-consent-link:hover {
          color: #60a5fa;
        }

        .cookie-consent-buttons {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .cookie-consent-button {
          padding: 10px 24px;
          border: none;
          borderRadius: 4px;
          fontSize: 14px;
          fontWeight: 600;
          cursor: pointer;
          transition: all 0.2s;
          whiteSpace: nowrap;
        }

        .cookie-consent-accept {
          backgroundColor: #10b981;
          color: white;
        }

        .cookie-consent-accept:hover {
          backgroundColor: #059669;
        }

        .cookie-consent-decline {
          backgroundColor: #6b7280;
          color: white;
        }

        .cookie-consent-decline:hover {
          backgroundColor: #4b5563;
        }

        /* Responsive styles - CSS media queries instead of JS detection */
        @media (max-width: 768px) {
          .cookie-consent-content {
            flex-direction: column;
            align-items: stretch;
            padding: 12px 16px;
            gap: 12px;
          }

          .cookie-consent-text {
            text-align: center;
          }

          .cookie-consent-buttons {
            align-self: center;
          }
        }
      `}</style>
    </>
  );
}
