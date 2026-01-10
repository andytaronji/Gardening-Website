'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotionDiv } from '../utils/lazyMotion';

const heroImages = [
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768065704/Pink_Flower_Wet_owusjv.jpg",
    alt: "Beautiful pink flower garden with water details"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768063571/IMG_2733_fvvhjm.jpg",
    alt: "Sustainable garden design and groundskeeping"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768065698/Hanging_Planter_zp31jk.jpg",
    alt: "Elegant hanging planter garden feature"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768052393/Front_of_Sandra_s_fin0ck.jpg",
    alt: "Professional front garden landscape design"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768063570/IMG_1284_yy9onk.jpg",
    alt: "Beautiful garden landscape and maintenance"
  },
  {
    src: "https://res.cloudinary.com/di4phdven/image/upload/f_auto,q_70,w_1200,c_fill,g_auto/v1768063569/IMG_1996_romwvs.jpg",
    alt: "Expert garden design services in Atlanta area"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start a new timer
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSlide]); // Restart timer when currentSlide changes

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Timer will automatically restart due to useEffect dependency
  };

  return (
    <section className="bg-[#003333] min-h-screen flex items-center py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Text Content Section - 45% on desktop */}
          <LazyMotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] text-white order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center md:text-left">
              Transform Your Outdoor Space
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-center md:text-left">
              High-end garden design and maintenance services in Marietta, Alpharetta, Vinings, and more. Specializing in pollinator gardens and unique designs for your perfect outdoor sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/portfolio"
                className="inline-block bg-white text-teal-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-teal-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Contact Us!
              </Link>
            </div>
          </LazyMotionDiv>

          {/* Slideshow Container - 55% on desktop */}
          <LazyMotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] bg-gray-900 shadow-lg overflow-hidden">
              {/* Images */}
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                    priority={index === 0}
                    quality={70}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white border-white'
                      : 'bg-transparent border-white hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </LazyMotionDiv>
        </div>
      </div>
    </section>
  );
}
