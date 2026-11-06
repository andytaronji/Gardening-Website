'use client';

import Script from 'next/script';

export default function OptimizedAnalytics() {
  return (
    <>
      {/* Google Analytics (gtag.js) - Non-blocking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17486011088"
        strategy="afterInteractive"
      />
      
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Google Consent Mode v2 defaults - must run before any Google tag.
            // US visitors: granted by default; anyone who clicked Decline stays denied.
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            var gtDeclined = false;
            try { gtDeclined = localStorage.getItem('cookieConsent') === 'declined'; } catch (e) {}
            gtag('consent', 'default', {
              ad_storage: gtDeclined ? 'denied' : 'granted',
              ad_user_data: gtDeclined ? 'denied' : 'granted',
              ad_personalization: gtDeclined ? 'denied' : 'granted',
              analytics_storage: gtDeclined ? 'denied' : 'granted',
              functionality_storage: 'granted',
              security_storage: 'granted'
            });
            gtag('set', 'ads_data_redaction', gtDeclined);
            gtag('js', new Date());
            gtag('config', 'AW-17486011088', { allow_enhanced_conversions: true });
            // Google Analytics 4 (property "gardeningthyme.com", created Nov 2026)
            gtag('config', 'G-FCZX3SHM6C');
            // Phone link taps -> GA4 event "phone_click" (Ads call tracking counts the calls themselves)
            document.addEventListener('click', function (e) {
              var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
              if (a) gtag('event', 'phone_click', { link_url: a.getAttribute('href'), page_path: location.pathname });
            }, true);
            // Website call conversion: swaps (404) 861-7744 for a Google forwarding number for ad visitors
            gtag('config', 'AW-17486011088/2oRjCImFsPMcENC1_ZFB', { 'phone_conversion_number': '(404) 861-7744' });
          `
        }}
      />
    </>
  );
}
