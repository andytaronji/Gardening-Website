'use client';

import { useEffect, useState } from 'react';

// Cookie banner wired to Google Consent Mode v2.
// - The default consent state is set in OptimizedAnalytics (before any Google tag runs):
//   granted for new US visitors, denied if this visitor previously clicked "Decline".
// - Clicking a button here updates Google's consent state immediately and remembers the choice.
// The previous Cookiebot script never initialised (no valid Cookiebot account), so it was removed.

const STORAGE_KEY = 'cookieConsent';

function updateConsent(granted) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  function gtag() { window.dataLayer.push(arguments); }
  const v = granted ? 'granted' : 'denied';
  gtag('consent', 'update', {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShowBanner(true);
    } catch (e) {
      // Storage blocked (private mode etc.): don't nag on every page.
    }
  }, []);

  const choose = (granted) => {
    try { localStorage.setItem(STORAGE_KEY, granted ? 'true' : 'declined'); } catch (e) { /* ignore */ }
    updateConsent(granted);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="cookie-consent-banner fixed bottom-0 inset-x-0 z-[9999] bg-forest text-cloud border-t border-[rgba(174,188,160,0.35)]"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <p className="font-sans text-[13px] leading-[1.5] text-[#DDE3D2] flex-1 m-0">
          We use cookies to measure our ads and improve the site.{' '}
          <a href="/privacy-policy" className="underline text-cloud hover:text-sage-tint">
            Read our privacy policy
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose(true)}
            className="font-sans text-[13px] font-semibold text-forest bg-cloud rounded-[4px] px-5 py-2 hover:bg-sage-tint transition-colors"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose(false)}
            className="font-sans text-[13px] font-semibold text-cloud border border-[rgba(174,188,160,0.6)] rounded-[4px] px-5 py-2 hover:bg-[#243523] transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
