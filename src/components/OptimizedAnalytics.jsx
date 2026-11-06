'use client';

import Script from 'next/script';

export default function OptimizedAnalytics() {
  return (
    <>
      {/* Google Tag Manager - Non-blocking */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WN7LXHF8');
          `
        }}
      />

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
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17486011088');
            // Website call conversion: swaps (404) 861-7744 for a Google forwarding number for ad visitors
            gtag('config', 'AW-17486011088/2oRjCImFsPMcENC1_ZFB', { 'phone_conversion_number': '(404) 861-7744' });
          `
        }}
      />
    </>
  );
}
