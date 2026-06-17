'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Garden Design', href: '/garden-design' },
    { name: 'Groundskeeping', href: '/groundskeeping' },
    { name: 'Quarterly Cleanups', href: '/quarterly-cleanups' },
    { name: 'Property Enhancement', href: '/property-enhancement' },
    { name: 'Vegetable Garden', href: '/vegetable-garden' },
    { name: 'Permaculture Lawns', href: '/permaculture-lawns' }
  ];

  const company = [
    { name: 'About', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  // Cities with a dedicated garden-design landing page link to it; the rest
  // remain plain labels. This de-orphans the location pages sitewide.
  const serviceAreas = [
    { name: 'East Cobb' },
    { name: 'Marietta', href: '/garden-design/marietta' },
    { name: 'Roswell', href: '/garden-design/roswell' },
    { name: 'Alpharetta', href: '/garden-design/alpharetta' },
    { name: 'Sandy Springs', href: '/garden-design/sandy-springs' },
    { name: 'Milton' },
    { name: 'Buckhead' },
    { name: 'Atlanta', href: '/garden-design/atlanta' },
    { name: 'Vinings' }
  ];

  return (
    <footer className="footer relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:best,f_auto,w_60/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg" 
                alt="Gardening Thyme Logo" 
                width={45} 
                height={45} 
                className="rounded-full ring-2 ring-sage-tint/30"
              />
              <h3 className="text-2xl brand-wordmark text-cloud">Gardening Thyme</h3>
            </div>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Creating stunning outdoor sanctuaries with premium garden design and maintenance services throughout the greater Atlanta area.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-sage-tint/20 rounded-full text-xs font-medium border border-sage-tint/30">
                Licensed & Insured
              </span>
              <span className="px-3 py-1 bg-sage-tint/20 rounded-full text-xs font-medium border border-sage-tint/30">
                Eco-Friendly
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-sage-tint">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-cream/80 hover:text-cream transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 text-sage-tint group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-sage-tint">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-cream/80 hover:text-cream transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 text-sage-tint group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 text-sage-tint">Legal</h4>
            <Link 
              href="/privacy-policy" 
              className="text-cream/80 hover:text-cream transition-all duration-300 flex items-center group"
            >
              <svg className="w-4 h-4 mr-2 text-sage-tint group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Privacy Policy
            </Link>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-sage-tint">Get In Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+14048617744" 
                className="flex items-center text-cream/80 hover:text-cream transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-sage-tint/20 flex items-center justify-center mr-3 group-hover:bg-sage-tint/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-sage-tint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-sage-tint">Call us</div>
                  <div className="font-semibold text-cream">(404) 861-7744</div>
                </div>
              </a>

              <a 
                href="mailto:services@gardeningthyme.com" 
                className="flex items-center text-cream/80 hover:text-cream transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-sage-tint/20 flex items-center justify-center mr-3 group-hover:bg-sage-tint/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-sage-tint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-sage-tint">Email us</div>
                  <div className="font-semibold text-sm text-cream">services@gardeningthyme.com</div>
                </div>
              </a>
            </div>

            {/* Service Areas */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-sage-tint">Service Areas</h5>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  area.href ? (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="text-xs px-2 py-1 bg-sage-tint/10 rounded text-cream/70 border border-sage-tint/20 hover:bg-sage-tint/20 hover:text-cream transition-all duration-300"
                    >
                      {area.name}
                    </Link>
                  ) : (
                    <span
                      key={area.name}
                      className="text-xs px-2 py-1 bg-sage-tint/10 rounded text-cream/70 border border-sage-tint/20"
                    >
                      {area.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sage-tint/20"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            &copy; {currentYear} Gardening Thyme LLC. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <p className="text-cream/60 text-sm">
              Proudly serving the greater Atlanta area
            </p>
            
            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 px-4 py-2 bg-sage-tint/20 hover:bg-sage-tint/30 rounded-full transition-all duration-300 text-sm font-medium"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
