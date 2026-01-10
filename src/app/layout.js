import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Preload from '../components/Preload';
import OptimizedAnalytics from '../components/OptimizedAnalytics';
import CookieConsent from '../components/CookieConsent';
import { Analytics } from "@vercel/analytics/next";
import { metadata as siteMetadata } from './metadata';
import { localBusinessSchema, organizationSchema, websiteSchema } from './schema';

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
        <CookieConsent />
        <OptimizedAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
