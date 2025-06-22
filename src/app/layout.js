import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Preload from '../components/Preload';
import { Analytics } from "@vercel/analytics/next";
import { metadata as siteMetadata } from './metadata';
import { localBusinessSchema, organizationSchema, websiteSchema } from './schema';

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager -->
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WN7LXHF8');
              <!-- End Google Tag Manager -->
            `
          }}
        />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11312192738"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11312192738');
            `
          }}
        />
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
        <Analytics />
      </body>
    </html>
  );
}
