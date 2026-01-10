'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConsultationsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8 text-teal-800"
      >
        Gardening Thyme Consultations
      </motion.h1>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <motion.div 
          variants={fadeIn}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image 
            src="/images/portfolio/garden-design.jpg"
            alt="Garden Design Consultation"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            style={{ maxWidth: '100%', height: 'auto' }}
            onError={(e) => {
              e.target.src = "/images/portfolio/garden-design.jpg";
            }}
          />
        </motion.div>
        <motion.div 
          variants={fadeIn}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Transform Your Outdoor Space</h2>
          <p className="text-gray-700 mb-4">
            Our expert garden designers will work with you to create a beautiful, functional outdoor space 
            that reflects your personal style and meets your specific needs. Whether you're looking for a 
            peaceful retreat, a vibrant entertainment area, or a productive vegetable garden, we can help 
            bring your vision to life.
          </p>
          <p className="text-gray-700">
            We consider factors such as soil conditions, sunlight exposure, and local climate to ensure 
            your garden thrives year-round with minimal maintenance.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <motion.div 
          variants={fadeIn}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Sustainable Garden Solutions</h2>
          <p className="text-gray-700 mb-4">
            We specialize in eco-friendly garden designs that conserve water, support local wildlife, 
            and reduce the need for chemical fertilizers and pesticides. Our sustainable approaches 
            not only benefit the environment but also create healthier, more resilient gardens.
          </p>
          <p className="text-gray-700">
            From rain gardens and native plant selections to efficient irrigation systems, we'll help 
            you make environmentally responsible choices without sacrificing beauty or functionality.
          </p>
        </motion.div>
        <motion.div 
          variants={fadeIn}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-1 md:order-2"
        >
          <Image 
            src="/images/portfolio/landscape-design.jpg"
            alt="Groundskeeping Service"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            style={{ maxWidth: '100%', height: 'auto' }}
            onError={(e) => {
              e.target.src = "/images/portfolio/landscape-design.jpg";
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <motion.div 
          variants={fadeIn}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image 
            src="/images/portfolio/vegetable-garden.jpg"
            alt="Vegetable Garden Design"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            style={{ maxWidth: '100%', height: 'auto' }}
            onError={(e) => {
              e.target.src = "/images/portfolio/vegetable-garden.jpg";
            }}
          />
        </motion.div>
        <motion.div 
          variants={fadeIn}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Our Consultation Process</h2>
          <p className="text-gray-700 mb-4">
            Our garden design consultations begin with an on-site visit to assess your space and 
            discuss your goals, preferences, and budget. We'll then create a customized design plan 
            that includes plant selections, hardscape elements, and detailed implementation guidelines.
          </p>
          <p className="text-gray-700">
            Whether you plan to DIY or hire professionals for installation, our comprehensive 
            consultation provides you with the expertise and direction needed to create your dream garden.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <motion.div 
          variants={fadeIn}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Video Course Consultations</h2>
          <p className="text-gray-700 mb-4">
            Can't schedule an in-person visit? Our video course consultations offer the perfect solution. 
            Connect with our expert gardeners virtually and receive personalized advice and guidance for 
            your garden projects from anywhere in the world.
          </p>
          <p className="text-gray-700">
            Our online sessions include interactive design reviews, plant selection guidance, and 
            step-by-step instructions tailored to your specific garden conditions. We'll provide you with 
            recorded sessions and detailed follow-up materials to reference as you implement your garden plan.
          </p>
        </motion.div>
        <motion.div 
          variants={fadeIn}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-1 md:order-2"
        >
          <Image 
            src="/images/portfolio/garden-consultation.jpg"
            alt="Video Consultation"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            style={{ maxWidth: '100%', height: 'auto' }}
            onError={(e) => {
              e.target.src = "/images/portfolio/garden-design.jpg";
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-teal-50 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">Ready to Transform Your Garden?</h2>
        <p className="text-gray-700 text-center mb-6">
          Book a consultation today and take the first step toward creating the garden of your dreams.
        </p>
        <motion.div 
          className="flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/contact" className="btn-primary-teal hover:btn-primary-teal-hover text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Schedule a Consultation
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
