'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActive = (path) => pathname === path;

  const services = [
    { name: 'Groundskeeping', path: '/services/groundskeeping' },
    { name: 'Quarterly Cleanup', path: '/services/quarterly-cleanup' },
    { name: 'Vegetable Garden', path: '/services/vegetable-garden' },
    { name: 'Property Enhancement', path: '/services/property-enhancement' }
  ];

  const navLinkClasses = (path) => `
    relative px-3 py-2 group transition-colors duration-200
    ${isActive(path) ? 'text-white' : 'text-white/90 hover:text-white'}
  `;

  const dropdownLinkClasses = (path) => `
    relative px-4 py-3 group transition-all duration-200 block w-full
    hover:bg-white/20
    ${isActive(path) ? 'text-white bg-white/10' : 'text-white/90 hover:text-white'}
  `;

  const highlightClasses = (path) => `
    absolute inset-0 bg-white/20 rounded-md transform origin-left transition-all duration-200 ease-out
    ${isActive(path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
  `;

  return (
    <nav className="bg-green-800 text-white w-full fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center overflow-visible px-4 md:px-8 py-4">
        <div className="flex-shrink-0 -ml-4">
          <Link href="/" className="text-xl font-cursive hover:text-white/90 transition-colors duration-300">
            Gardening Thyme
          </Link>
        </div>
        
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
              <div className="absolute top-full left-0 right-0 bg-green-800 shadow-lg">
                <ul className="flex flex-col items-center py-4">
                  <li className="my-2 w-48 text-center">
                    <Link href="/" onClick={() => setIsOpen(false)} className={navLinkClasses('/')}>
                      <span className="relative z-10">Home</span>
                      <span className={highlightClasses('/')}></span>
                    </Link>
                  </li>
                  <li className="my-2 w-48 text-center">
                    <Link href="/garden-design" onClick={() => setIsOpen(false)} className={navLinkClasses('/garden-design')}>
                      <span className="relative z-10">Garden Design</span>
                      <span className={highlightClasses('/garden-design')}></span>
                    </Link>
                  </li>
                  <li className="my-2 w-48 text-center">
                    <Link href="/portfolio" onClick={() => setIsOpen(false)} className={navLinkClasses('/portfolio')}>
                      <span className="relative z-10">Portfolio</span>
                      <span className={highlightClasses('/portfolio')}></span>
                    </Link>
                  </li>
                  <li className="my-2 w-48 text-center">
                    <Link href="/consultations" onClick={() => setIsOpen(false)} className={navLinkClasses('/consultations')}>
                      <span className="relative z-10">Consultations</span>
                      <span className={highlightClasses('/consultations')}></span>
                    </Link>
                  </li>
                  <li className="my-2 w-48 text-center">
                    <Link href="/blog" onClick={() => setIsOpen(false)} className={navLinkClasses('/blog')}>
                      <span className="relative z-10">Blog</span>
                      <span className={highlightClasses('/blog')}></span>
                    </Link>
                  </li>
                  <li className="my-2 w-48 text-center relative">
                    <button
                      onClick={() => setShowServices(!showServices)}
                      className={`w-full relative px-3 py-2 group transition-colors duration-300 ${pathname.startsWith('/services') ? 'text-white' : 'text-white/90 hover:text-white'}`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Services
                        <svg className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                      <span className={`absolute inset-0 bg-white/10 rounded-md transform origin-left transition-transform duration-300 ease-out ${pathname.startsWith('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </button>
                    {showServices && (
                      <div
                        onMouseLeave={() => setShowServices(false)}
                        className={`absolute left-0 w-56 transition-all duration-300 z-[100]
                          ${showServices ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="services-menu"
                      >
                        <div className="py-1 mt-1">
                          <ul className="bg-green-800/95 backdrop-blur-sm rounded-lg shadow-xl divide-y divide-white/5 border border-white/10">
                            {services.map((service) => (
                              <li key={service.path}>
                                <Link 
                                  href={service.path} 
                                  className={dropdownLinkClasses(service.path)}
                                >
                                  <span className="relative z-10 flex items-center">
                                    <span className="transition-transform duration-300 transform group-hover:translate-x-1">{service.name}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="my-2 w-48 text-center">
                    <Link href="/blog" onClick={() => setIsOpen(false)} className={navLinkClasses('/blog')}>
                      <span className="relative z-10">Blog</span>
                      <span className={highlightClasses('/blog')}></span>
                    </Link>
                  </li>
                  <li className="my-2 w-48 text-center">
                    <Link href="/contact" onClick={() => setIsOpen(false)} className={navLinkClasses('/contact')}>
                      <span className="relative z-10">Contact</span>
                      <span className={highlightClasses('/contact')}></span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="hidden md:flex space-x-6 items-center ml-auto">
            <li>
              <Link href="/" className={navLinkClasses('/')}>
                <span className="relative z-10">Home</span>
                <span className={highlightClasses('/')}></span>
              </Link>
            </li>
            <li>
              <Link href="/garden-design" className={navLinkClasses('/garden-design')}>
                <span className="relative z-10">Garden Design</span>
                <span className={highlightClasses('/garden-design')}></span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={navLinkClasses('/portfolio')}>
                <span className="relative z-10">Portfolio</span>
                <span className={highlightClasses('/portfolio')}></span>
              </Link>
            </li>
            <li>
              <Link href="/consultations" className={navLinkClasses('/consultations')}>
                <span className="relative z-10">Consultations</span>
                <span className={highlightClasses('/consultations')}></span>
              </Link>
            </li>
            <li className="relative group">
              <button
                onClick={() => setShowServices(!showServices)}
                onMouseEnter={() => setShowServices(true)}
                className={`relative px-3 py-2 group transition-colors duration-300 ${pathname.startsWith('/services') ? 'text-white' : 'text-white/90 hover:text-white'}`}
                aria-expanded={showServices}
                aria-haspopup="true"
              >
                <span className="relative z-10 flex items-center">
                  Services
                  <svg className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className={`absolute inset-0 bg-white/10 rounded-md transform origin-left transition-transform duration-300 ease-out ${pathname.startsWith('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
              <div
                onMouseLeave={() => setShowServices(false)}
                className={`absolute left-0 w-56 transition-all duration-300 z-[100]
                  ${showServices ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="services-menu"
              >
                <div className="py-1 mt-1">
                  <ul className="bg-green-800/95 backdrop-blur-sm rounded-lg shadow-xl divide-y divide-white/5 border border-white/10">
                    {services.map((service) => (
                      <li key={service.path}>
                        <Link 
                          href={service.path} 
                          className={dropdownLinkClasses(service.path)}
                        >
                          <span className="relative z-10 flex items-center">
                            <span className="transition-transform duration-300 transform group-hover:translate-x-1">{service.name}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href="/blog" className={navLinkClasses('/blog')}>
                <span className="relative z-10">Blog</span>
                <span className={highlightClasses('/blog')}></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={navLinkClasses('/contact')}>
                <span className="relative z-10">Contact</span>
                <span className={highlightClasses('/contact')}></span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
} 