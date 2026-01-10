'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    { name: 'Groundskeeping', href: '/groundskeeping' },
    { name: 'Quarterly Cleanups', href: '/quarterly-cleanups' },
    { name: 'Vegetable Garden', href: '/consultations/vegetable-garden' },
    { name: 'Property Enhancement', href: '/property-enhancement' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const getLinkClass = (path) => {
    const baseClass = "transition-colors duration-200";
    const activeClass = "text-teal-200 font-medium";
    const hoverClass = "hover:text-teal-200";
    return `${baseClass} ${isActive(path) ? activeClass : hoverClass}`;
  };

  const getMobileLinkClass = (path) => {
    const baseClass = "block w-full py-2 px-4";
    const activeClass = "navbar-dropdown-hover text-teal-200 font-medium";
    const hoverClass = "hover:navbar-dropdown-hover";
    return `${baseClass} ${isActive(path) ? activeClass : hoverClass}`;
  };

  return (
    <nav className="navbar-bg-sage text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-cursive hover:text-teal-200 transition-colors duration-200">
          <Image 
            src="https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_60/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
            alt="Gardening Thyme Logo" 
            width={30} 
            height={30} 
            className="rounded-full"
            priority={false}
          />
          <span>Gardening Thyme</span>
        </Link>
        
        {isMobile ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded hover:bg-teal-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
            
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 navbar-dropdown-bg z-50 shadow-lg">
                <ul className="flex flex-col py-2">
                  <li>
                    <Link href="/" className={getMobileLinkClass('/')} onClick={() => setIsOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/garden-design" 
                      className={getMobileLinkClass('/garden-design')}
                      onClick={() => setIsOpen(false)}
                    >
                      Garden Design
                    </Link>
                  </li>
                  <li className="relative">
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center justify-between w-full py-2 px-4 ${isActive('/consultations') ? 'navbar-dropdown-hover text-teal-200 font-medium' : 'hover:navbar-dropdown-hover'}`}
                    >
                      <span>Services</span>
                      <svg 
                        className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <ul className="navbar-dropdown-hover py-1">
                        {services.map((service) => (
                          <li key={service.name}>
                            <Link 
                              href={service.href}
                              onClick={() => {
                                setIsServicesOpen(false);
                                setIsOpen(false);
                              }}
                              className={`block py-2 px-8 ${isActive(service.href) ? 'bg-[#007777] text-teal-200 font-medium' : 'hover:bg-[#007777]'}`}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link 
                      href="/permaculture-lawns" 
                      className={getMobileLinkClass('/permaculture-lawns')}
                      onClick={() => setIsOpen(false)}
                    >
                      Permaculture Lawns
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/portfolio" 
                      className={getMobileLinkClass('/portfolio')}
                      onClick={() => setIsOpen(false)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/blog" 
                      className={getMobileLinkClass('/blog')}
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className={getMobileLinkClass('/contact')}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="hidden md:flex space-x-6 items-center">
            <li><Link href="/" className={getLinkClass('/')}>Home</Link></li>
            <li>
              <Link 
                href="/garden-design" 
                className={getLinkClass('/garden-design')}
              >
                Garden Design
              </Link>
            </li>
            <li className="relative group">
              <div className="peer">
                <button 
                  className={`flex items-center ${isActive('/consultations') ? 'text-teal-200 font-medium' : 'hover:text-teal-200'}`}
                >
                  Services
                  <svg 
                    className="w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <ul 
                className="absolute top-full left-0 mt-2 w-56 navbar-dropdown-bg rounded-md shadow-lg py-2 z-50 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-200"
              >
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className={`block px-4 py-2 ${isActive(service.href) ? 'navbar-dropdown-hover text-teal-200 font-medium' : 'hover:navbar-dropdown-hover'}`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/permaculture-lawns" className={getLinkClass('/permaculture-lawns')}>Permaculture Lawns</Link></li>
            <li><Link href="/portfolio" className={getLinkClass('/portfolio')}>Portfolio</Link></li>
            <li><Link href="/blog" className={getLinkClass('/blog')}>Blog</Link></li>
            <li><Link href="/contact" className={getLinkClass('/contact')}>Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
