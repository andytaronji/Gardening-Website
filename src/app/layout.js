import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { metadata } from './metadata';
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          href="https://res.cloudinary.com/di4phdven/image/upload/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
          type="image/jpeg" 
        />
        <link 
          rel="apple-touch-icon" 
          href="https://res.cloudinary.com/di4phdven/image/upload/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GardenStore",
              "name": "Gardening Thyme",
              "image": "https://res.cloudinary.com/di4phdven/image/upload/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg",
              "telephone": "(508) 932-4056",
              "email": "services@gardeningthyme.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Marietta",
                "addressRegion": "GA",
                "postalCode": "30062"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.0232",
                "longitude": "-84.5148"
              },
              "areaServed": ["Marietta", "Alpharetta", "Milton", "Woodstock", "Vinings", "East Cobb", "Roswell", "Buckhead", "Atlanta"],
              "priceRange": "$$$$",
              "openingHours": "Mo-Fr 08:00-18:00",
              "sameAs": [
                "https://facebook.com/gardeningthyme",
                "https://instagram.com/gardeningthyme"
              ]
            })
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
