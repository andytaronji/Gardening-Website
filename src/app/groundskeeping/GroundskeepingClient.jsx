'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotionDiv } from '@/utils/lazyMotion';

export default function GroundskeepingClient() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <LazyMotionDiv
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-forest-green mb-6">Premium Groundskeeping Services</h1>
          <p className="text-xl text-forest-green leading-relaxed">
            Expert maintenance services to keep your landscape beautiful year-round
          </p>
        </LazyMotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <LazyMotionDiv
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
          >
              <Image
                src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:eco,f_auto,w_1200/v1746894191/Portfolio_Page_1_oskao9.jpg"
                alt="Professional groundskeeping services"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={72}
              />
          </LazyMotionDiv>

          <LazyMotionDiv
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-charcoal">Comprehensive Ground Maintenance</h2>
            <p className="text-forest-green">
              Our professional groundskeeping services ensure your landscape maintains its beauty and health 
              throughout the year. We provide regular maintenance and care to keep your outdoor spaces 
              looking their best.
            </p>
            <ul className="space-y-4">
              <LazyMotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Regular fertilization</span>
              </LazyMotionDiv>
              <LazyMotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Plant health monitoring and care</span>
              </LazyMotionDiv>
              <LazyMotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center space-x-3 text-forest-green"
              >
                <svg className="w-6 h-6 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Weed control and prevention</span>
              </LazyMotionDiv>
            </ul>
          </LazyMotionDiv>
        </div>

        <LazyMotionDiv
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-20 shadow-sm"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LazyMotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Regular Maintenance</h3>
              <p className="text-forest-green/70">Scheduled deweeding and pruning to keep your garden beds looking fresh</p>
            </LazyMotionDiv>
            <LazyMotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Plant Health Care</h3>
              <p className="text-forest-green/70">Regular monitoring and treatment of plants to prevent diseases</p>
            </LazyMotionDiv>
            <LazyMotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Seasonal Services</h3>
              <p className="text-forest-green/70">Specialized care and maintenance tailored to each season</p>
            </LazyMotionDiv>
          </div>
        </LazyMotionDiv>

        {/* Location-specific sections */}
        <div className="mb-20">
          <LazyMotionDiv 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-serif text-charcoal mb-12 text-center"
          >
            Serving Your Georgia Community
          </LazyMotionDiv>

          {/* Alpharetta Section */}
          <LazyMotionDiv 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:eco,f_auto,w_1200/v1747170880/Groundskeeping_Alpharetta_GA_jpcd1v.jpg"
                alt="Alpharetta, GA groundskeeping services"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-charcoal">Alpharetta, GA Groundskeeping</h3>
              <p className="text-forest-green">
                Alpharetta properties face unique challenges with Georgia's clay-heavy soil and hot, humid summers. 
                Our specialized groundskeeping services for Alpharetta homes include proper drainage solutions, 
                drought-resistant plantings, and maintenance schedules tailored to North Fulton County's 
                specific climate conditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-forest-green">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Clay soil management specific to Alpharetta properties</span>
                </li>
                <li className="flex items-center space-x-2 text-forest-green">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>HOA-compliant maintenance for Alpharetta neighborhoods</span>
                </li>
              </ul>
            </div>
          </LazyMotionDiv>

          {/* Milton Section */}
          <LazyMotionDiv 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          >
            <div className="md:order-2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:eco,f_auto,w_1200/v1747170883/Groundskeeping_Milton_GA_pzzx3v.jpg"
                alt="Milton, GA estate groundskeeping"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="md:order-1 space-y-4">
              <h3 className="text-2xl font-serif text-charcoal">Milton, GA Estate Maintenance</h3>
              <p className="text-forest-green">
                Milton's larger properties and estates require specialized groundskeeping approaches. 
                Our Milton groundskeeping services are designed for extensive landscapes, 
                managing everything from pasture edges to formal gardens with the attention to detail 
                that Georgia's premier properties deserve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-forest-green">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Large property management solutions</span>
                </li>
                <li className="flex items-center space-x-2 text-forest-green">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Native Georgia plant integration for sustainable landscapes</span>
                </li>
              </ul>
            </div>
          </LazyMotionDiv>

          {/* Vinings Section */}
          <LazyMotionDiv 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/di4phdven/image/upload/q_auto:eco,f_auto,w_1200/v1747170896/Groundskeeping_Vining_GA_hdqaug.jpg"
                alt="Vinings, GA landscape maintenance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-charcoal">Vinings, GA Landscape Maintenance</h3>
              <p className="text-forest-green">
                Vinings properties combine Atlanta's urban sophistication with lush Georgia landscapes. 
                Our groundskeeping services for Vinings focus on maintaining polished, manicured appearances 
                while implementing sustainable practices that work with Georgia's unique growing conditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-forest-green">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Upscale property maintenance for Vinings homes</span>
                </li>
                <li className="flex items-center space-x-2 text-forest-green">
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seasonal color rotations suited to Georgia's climate</span>
                </li>
              </ul>
            </div>
          </LazyMotionDiv>
        </div>

        {/* Testimonials Section */}
        <LazyMotionDiv
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-20 shadow-sm"
        >
          <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mr-4 border border-sage/30">
                  <span className="text-forest-green font-bold text-xl">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Amanda R.</h4>
                  <p className="text-sm text-forest-green/60">Alpharetta, GA</p>
                </div>
              </div>
              <p className="text-forest-green italic">
                "Gardening Thyme transformed our Alpharetta backyard, creating a drought-resistant landscape 
                that thrives in Georgia's summer heat. Their groundskeeping team is professional, 
                knowledgeable, and always on schedule."
              </p>
            </div>
            
            <div className="bg-cream p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mr-4 border border-sage/30">
                  <span className="text-forest-green font-bold text-xl">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Michael T.</h4>
                  <p className="text-sm text-forest-green/60">Milton, GA</p>
                </div>
              </div>
              <p className="text-forest-green italic">
                "Our Milton property's large lot was overwhelming until Gardening Thyme implemented a 
                sustainable maintenance plan perfect for our Georgia native landscape. They understand 
                the unique needs of larger properties in our area."
              </p>
            </div>
          </div>
        </LazyMotionDiv>

        <LazyMotionDiv
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-charcoal p-8 rounded-2xl shadow-md text-center">
            <h2 className="text-3xl font-semibold text-cream mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-cream/80 mb-6 max-w-3xl mx-auto">
              We provide specialized groundskeeping services throughout Georgia, with focused expertise in 
              Alpharetta, Milton, and Vinings. Contact us today to discuss your property's needs.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-cream text-charcoal font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </LazyMotionDiv>
      </div>
    </div>
  );
}
