'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    { name: 'Groundskeeping', path: '/services/groundskeeping' },
    { name: 'Quarterly Cleanup', path: '/services/quarterly-cleanup' },
    { name: 'Property Enhancement', path: '/services/property-enhancement' },
    { name: 'Vegetable Garden', path: '/services/vegetable-garden' }
  ];

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-cursive">
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
                  <li className="my-2"><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
                  <li className="my-2"><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                  <li className="my-2 relative">
                    <button
                      onClick={() => setShowServices(!showServices)}
                      className="flex items-center"
                    >
                      Services
                      <svg className={`ml-1 h-4 w-4 transform ${showServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showServices && (
                      <ul className="mt-2 bg-green-700 rounded-md py-2">
                        {services.map((service) => (
                          <li key={service.path} className="px-4 py-2 hover:bg-green-600">
                            <Link href={service.path} onClick={() => { setShowServices(false); setIsOpen(false); }}>
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="hidden md:flex space-x-6 items-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li className="relative group">
              <button
                className="flex items-center"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-green-700 rounded-md shadow-lg py-2 ${
                  showServices ? 'block' : 'hidden'
                }`}
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                {services.map((service) => (
                  <li key={service.path} className="px-4 py-2 hover:bg-green-600">
                    <Link href={service.path}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
} 