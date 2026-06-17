'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: 'Groundskeeping', href: '/groundskeeping' },
    { name: 'Quarterly Cleanups', href: '/quarterly-cleanups' },
    { name: 'Vegetable Garden', href: '/vegetable-garden' },
    { name: 'Property Enhancement', href: '/property-enhancement' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="navigation p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cream rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
              <Image 
                src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_60/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
                alt="Gardening Thyme Logo" 
                width={45} 
                height={45} 
                className="rounded-full relative z-10 ring-2 ring-cream ring-opacity-0 group-hover:ring-opacity-30 transition-all duration-300"
                priority={false}
              />
            </div>
            <span className="brand-wordmark text-2xl text-cream hover:opacity-80 transition-all duration-300">
              Gardening Thyme
            </span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-cream/10 transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={`relative px-4 py-2 transition-all duration-300 font-medium text-sm tracking-wide ${
                isActive('/') ? 'text-cream font-bold' : 'text-cream/90 hover:text-cream'
              }`}
            >
              <span className="relative">
                Home
                {isActive('/') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cream rounded-full"></span>
                )}
              </span>
            </Link>

            <Link 
              href="/garden-design" 
              className={`relative px-4 py-2 transition-all duration-300 font-medium text-sm tracking-wide ${
                isActive('/garden-design') ? 'text-cream font-bold' : 'text-cream/90 hover:text-cream'
              }`}
            >
              <span className="relative">
                Garden Design
                {isActive('/garden-design') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cream rounded-full"></span>
                )}
              </span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-cream/90 hover:text-cream font-medium text-sm tracking-wide transition-all duration-300">
                Services
                <svg 
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-cloud rounded-[4px] shadow-lg overflow-hidden border border-mist">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link 
                        key={service.name}
                        href={service.href}
                        className={`block px-6 py-3 transition-all duration-300 border-l-4 ${
                          isActive(service.href) 
                            ? 'bg-sage/10 text-forest-green font-semibold border-sage' 
                            : 'text-charcoal hover:bg-sage/5 border-transparent hover:border-sage/30'
                        }`}
                        style={{ transitionDelay: `${index * 30}ms` }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/permaculture-lawns" 
              className={`relative px-4 py-2 transition-all duration-300 font-medium text-sm tracking-wide ${
                isActive('/permaculture-lawns') ? 'text-cream font-bold' : 'text-cream/90 hover:text-cream'
              }`}
            >
              <span className="relative">
                Permaculture Lawns
                {isActive('/permaculture-lawns') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cream rounded-full"></span>
                )}
              </span>
            </Link>

            <Link 
              href="/portfolio" 
              className={`relative px-4 py-2 transition-all duration-300 font-medium text-sm tracking-wide ${
                isActive('/portfolio') ? 'text-cream font-bold' : 'text-cream/90 hover:text-cream'
              }`}
            >
              <span className="relative">
                Portfolio
                {isActive('/portfolio') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cream rounded-full"></span>
                )}
              </span>
            </Link>

            <Link 
              href="/blog" 
              className={`relative px-4 py-2 transition-all duration-300 font-medium text-sm tracking-wide ${
                isActive('/blog') ? 'text-cream font-bold' : 'text-cream/90 hover:text-cream'
              }`}
            >
              <span className="relative">
                Blog
                {isActive('/blog') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cream rounded-full"></span>
                )}
              </span>
            </Link>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-forest text-cloud rounded-[4px] font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-moss"
            >
              Contact
            </Link>
          </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1">
            <Link 
              href="/" 
              className={`block w-full py-3 px-6 transition-all duration-300 font-medium border-l-4 text-cream ${
                isActive('/') ? 'border-cream font-bold' : 'border-transparent hover:border-cream/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link 
              href="/garden-design" 
              className={`block w-full py-3 px-6 transition-all duration-300 font-medium border-l-4 text-cream ${
                isActive('/garden-design') ? 'border-cream font-bold' : 'border-transparent hover:border-cream/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Garden Design
            </Link>

            {/* Services Mobile Dropdown */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center justify-between w-full py-3 px-6 font-medium border-l-4 transition-all duration-300 text-cream ${
                  isActive('/groundskeeping') || isActive('/quarterly-cleanups') || isActive('/vegetable-garden') || isActive('/property-enhancement')
                    ? 'border-cream font-bold' 
                    : 'border-transparent hover:border-cream/50'
                }`}
              >
                <span>Services</span>
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="py-2">
                  {services.map((service) => (
                    <Link 
                      key={service.name}
                      href={service.href}
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                      className={`block py-3 px-10 transition-all duration-300 border-l-4 text-cream ${
                        isActive(service.href) 
                          ? 'border-cream font-bold' 
                          : 'border-transparent hover:border-cream/50'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/permaculture-lawns" 
              className={`block w-full py-3 px-6 transition-all duration-300 font-medium border-l-4 text-cream ${
                isActive('/permaculture-lawns') ? 'border-cream font-bold' : 'border-transparent hover:border-cream/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Permaculture Lawns
            </Link>

            <Link 
              href="/portfolio" 
              className={`block w-full py-3 px-6 transition-all duration-300 font-medium border-l-4 text-cream ${
                isActive('/portfolio') ? 'border-cream font-bold' : 'border-transparent hover:border-cream/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>

            <Link 
              href="/blog" 
              className={`block w-full py-3 px-6 transition-all duration-300 font-medium border-l-4 text-cream ${
                isActive('/blog') ? 'border-cream font-bold' : 'border-transparent hover:border-cream/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            <div className="px-6 pt-4 pb-2">
              <Link
                href="/contact"
                className="block w-full py-3 px-6 bg-forest text-cloud text-center rounded-[4px] font-semibold transition-all duration-300 hover:bg-moss"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
