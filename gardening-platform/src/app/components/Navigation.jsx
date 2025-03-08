'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Gardening Thyme
        </Link>
        
        {isMobile ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
            
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-green-800 z-50">
                <ul className="flex flex-col items-center py-4">
                  <li className="my-2"><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                  <li className="my-2"><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                  <li className="my-2"><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
} 