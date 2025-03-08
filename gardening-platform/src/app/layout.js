'use client';

import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const metadata = {
  title: 'Gardening Thyme',
  description: 'Professional garden design and maintenance services',
};

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/consultations', label: 'Consultations' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <html lang="en">
      <body className={`${isMenuOpen ? 'overflow-hidden' : ''}`}>
        <header className="bg-green-700 text-white p-4 relative">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center z-20" onClick={closeMenu}>
              <h1 className="text-3xl font-cursive text-white hover:text-green-200 transition duration-300">
                Gardening Thyme
              </h1>
            </Link>

            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
              className="md:hidden z-20 p-2 hover:bg-green-600 rounded transition duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="font-sans text-lg font-medium hover:text-green-200 transition duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Navigation - Full screen overlay */}
            <div
              className={`
                fixed inset-0 bg-green-700 z-10 transition-transform duration-300 md:hidden
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
              `}
            >
              <nav className="h-full flex items-center justify-center">
                <ul className="space-y-8 text-center">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-sans text-2xl font-medium hover:text-green-200 transition duration-300 block py-2"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-green-800 text-white p-6 mt-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-cursive mb-4">Gardening Thyme</h3>
                <p>Professional garden design and maintenance services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-sans hover:text-green-200 transition duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>Email: services@gardeningthyme.com</p>
                <p>Phone: 508-932-4056</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-green-600 text-center">
              <p>&copy; {new Date().getFullYear()} Gardening Thyme. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
