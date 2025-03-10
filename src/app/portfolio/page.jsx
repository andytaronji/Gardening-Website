'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// First define the projects data
const portfolioProjects = [
  {
    id: 1,
    title: "Spring Garden Cleanup",
    category: "Property Cleanup",
    image: "/images/portfolio/garden-cleanup.jpg",
    description: "Complete property restoration and seasonal cleanup for a residential garden.",
    fullDescription: "We transformed this overgrown garden into a pristine landscape. Our comprehensive cleanup included debris removal, pruning of overgrown shrubs, bed edging, and thorough yard waste disposal. The result was a refreshed and revitalized outdoor space ready for new growth."
  },
  {
    id: 2,
    title: "Fall Leaf Removal",
    category: "Leaf Removal",
    image: "/images/portfolio/leaf-removal.jpg",
    description: "Professional leaf removal and disposal service for a large estate.",
    fullDescription: "Our team efficiently cleared this large property of fallen leaves using our professional-grade equipment. We ensured all leaves were collected, bagged, and properly disposed of, preventing lawn damage and preparing the property for winter."
  },
  {
    id: 3,
    title: "Landscape Design",
    category: "Garden Design",
    image: "/images/portfolio/landscape-design.jpg",
    description: "Modern landscape design with native plants and sustainable features.",
    fullDescription: "This modern landscape design incorporated native plant species and sustainable features. We created a low-maintenance garden that thrives in local conditions while providing year-round visual interest and supporting local wildlife."
  },
  {
    id: 4,
    title: "Seasonal Maintenance",
    category: "Maintenance",
    image: "/images/portfolio/maintenance.jpg",
    description: "Year-round maintenance program for a commercial property.",
    fullDescription: "Our comprehensive maintenance program keeps this commercial property looking pristine throughout the year. Services include regular mowing, pruning, mulching, and seasonal plantings to ensure the landscape always makes a great first impression."
  },
  {
    id: 5,
    title: "Garden Renovation",
    category: "Property Cleanup",
    image: "/images/portfolio/renovation.jpg",
    description: "Complete garden renovation including hardscaping and new plantings.",
    fullDescription: "This complete garden renovation project included removing old plantings, installing new hardscaping features, and introducing a fresh planting scheme. We transformed a dated garden into a modern, functional outdoor space that the owners love to use."
  },
  {
    id: 6,
    title: "Deweeding",
    category: "Maintenance",
    image: "/images/portfolio/deweeding.jpg",
    description: "Professional weed removal and prevention services for gardens and landscapes.",
    fullDescription: "Our thorough deweeding service eliminated invasive plants while preserving desired vegetation. We implemented preventive measures including proper mulching and selective herbicide application to maintain a weed-free environment."
  }
];

// Modal component
const Modal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
      >
        <div className="relative h-[60vh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-green-800">{project.title}</h2>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{project.fullDescription}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Define JSON-LD AFTER portfolioProjects
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Landscape & Garden Portfolio',
  'description': 'A showcase of our successful landscape and garden projects, demonstrating our expertise in property cleanup, landscape design, and maintenance services.',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Gardening Thyme',
    'areaServed': ['Marietta', 'Roswell', 'Alpharetta', 'Woodstock', 'Smyrna', 'Vinings']
  },
  'about': {
    '@type': 'Thing',
    'name': 'Landscape and Garden Services',
    'description': 'Professional landscaping and garden services including property cleanup, landscape design, and maintenance.'
  },
  'hasPart': [
    {
      '@type': 'ImageGallery',
      'name': 'Project Gallery',
      'image': portfolioProjects.map(project => ({
        '@type': 'ImageObject',
        'name': project.title,
        'description': project.description,
        'contentUrl': project.image,
        'about': {
          '@type': 'Thing',
          'name': project.category
        }
      }))
    }
  ]
};

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 -mt-24 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of successful projects and transformations. Each project showcases our commitment to quality and attention to detail.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{project.title}</h3>
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <Modal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
} 