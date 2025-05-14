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
