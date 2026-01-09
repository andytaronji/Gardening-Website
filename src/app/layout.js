import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Preload from '../components/Preload';
import OptimizedAnalytics from '../components/OptimizedAnalytics';
import { Analytics } from "@vercel/analytics/next";
import { metadata as siteMetadata } from './metadata';
import { localBusinessSchema, organizationSchema, websiteSchema } from './schema';
import Script from 'next/script';

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          href="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_192/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
          type="image/jpeg" 
        />
        <link 
          rel="apple-touch-icon" 
          href="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_192/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
        />
        {/* Cookiebot - MUST be in <head> for proper loading */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="6645d838-2055-4407-8885-69ca6c2eb2c1"
          data-blockingmode="auto"
          type="text/javascript"
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
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WN7LXHF8"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `
          }}
        />
        <Preload />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <OptimizedAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
