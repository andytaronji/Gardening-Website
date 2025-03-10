import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gardening Thyme',
  description: 'Professional garden design and maintenance services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 