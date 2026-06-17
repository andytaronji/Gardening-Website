import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import OptimizedAnalytics from '../components/OptimizedAnalytics';
import CookieConsent from '../components/CookieConsent';
import { Analytics } from "@vercel/analytics/next";
import { Bodoni_Moda, Hanken_Grotesk } from 'next/font/google';
import { metadata as siteMetadata } from './metadata';
import { localBusinessSchema, organizationSchema, websiteSchema } from './schema';

// Optimize fonts with next/font — Brand Identity System v1.0
// Bodoni Moda = display/headings (high-contrast Didone, editorial & premium).
// Hanken Grotesk = body/interface (clean, legible grotesque).
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
});

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          href="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_192/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
          type="image/jpeg" 
        />
        <link 
          rel="apple-touch-icon" 
          href="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_192/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
        />
        {/* Enhanced Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        {/* Google Ads gtag (AW-17486011088) + GTM are loaded once, non-blocking,
            in <OptimizedAnalytics />. Don't re-add the tag here — it double-loads. */}
      </head>
      <body className={`${bodoni.variable} ${hanken.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WN7LXHF8"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <OptimizedAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
