'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotionDiv } from '../utils/lazyMotion';

const images = [
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:good,f_auto,w_1200,c_fill,g_auto/v1768063570/IMG_1284_yy9onk.jpg",
    alt: "Beautiful garden landscape and maintenance"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:good,f_auto,w_1200,c_fill,g_auto/v1768072387/IMG_3553__1_ztycn5.jpg",
    alt: "Professional garden design and landscaping services"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:good,f_auto,w_1200,c_fill,g_auto/v1768063571/IMG_2733_fvvhjm.jpg",
    alt: "Sustainable garden design and groundskeeping"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:good,f_auto,w_1200,c_fill,g_auto/v1768072387/IMG_2255_ojecpp.jpg",
    alt: "Expert garden transformation and landscape design"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:good,f_auto,w_1200,c_fill,g_auto/v1768063569/IMG_1996_romwvs.jpg",
    alt: "Expert garden design services in Atlanta area"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/q_auto:good,f_auto,w_1200,c_fill,g_auto/v1768052393/Front_of_Sandra_s_fin0ck.jpg",
    alt: "Professional front garden landscape design"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">

      <div className="container mx-auto relative z-10 px-4 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <LazyMotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full lg:w-[48%] text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="mb-6 leading-tight font-serif font-bold text-forest-green text-5xl lg:text-6xl xl:text-7xl">
              Garden Designs, Property Cleanups,<br /> and Garden Maintenance
            </h1>
            
            <p className="text-forest-green text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed font-light">
              High-end garden design and maintenance services in Marietta, Alpharetta, Vinings, and more. Specializing in pollinator gardens and unique designs for your perfect outdoor sanctuary.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/portfolio" 
                className="px-8 py-3 bg-charcoal text-cream rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Portfolio
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-charcoal text-cream rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Contact Us!
              </Link>
            </div>
          </LazyMotionDiv>

          {/* Slideshow Container */}
          <LazyMotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="w-full lg:w-[48%] order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden shadow-xl">
                {images.map((image, index) => {
                  // Only mount the active slide and its immediate neighbours so we
                  // don't download all 6 hero images at once (which starves the LCP
                  // image of bandwidth). The crossfade still works because the
                  // outgoing slide stays mounted as a neighbour.
                  const total = images.length;
                  const isNeighbour =
                    index === currentSlide ||
                    index === (currentSlide + 1) % total ||
                    index === (currentSlide - 1 + total) % total;

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {isNeighbour && (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          priority={index === 0}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 100vw, 48vw"
                          className="object-cover"
                          quality={75}
                        />
                      )}
                    </div>
                  );
                })}
                
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="w-3 h-3 transition-all duration-300"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-charcoal ${
                        index === currentSlide
                          ? 'bg-charcoal'
                          : 'bg-transparent hover:bg-charcoal/30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </LazyMotionDiv>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-forest-green/50 hover:text-forest-green transition-all duration-300 cursor-pointer">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
