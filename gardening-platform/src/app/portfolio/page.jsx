'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Spring Garden Cleanup",
    category: "Property Cleanup",
    image: "/images/portfolio/garden-cleanup.jpg",
    description: "Complete property restoration and seasonal cleanup for a residential garden."
  },
  {
    id: 2,
    title: "Fall Leaf Removal",
    category: "Leaf Removal",
    image: "/images/portfolio/leaf-removal.jpg",
    description: "Professional leaf removal and disposal service for a large estate."
  },
  {
    id: 3,
    title: "Landscape Design",
    category: "Garden Design",
    image: "/images/portfolio/landscape-design.jpg",
    description: "Modern landscape design with native plants and sustainable features."
  },
  {
    id: 4,
    title: "Seasonal Maintenance",
    category: "Maintenance",
    image: "/images/portfolio/maintenance.jpg",
    description: "Year-round maintenance program for a commercial property."
  },
  {
    id: 5,
    title: "Garden Renovation",
    category: "Property Cleanup",
    image: "/images/portfolio/renovation.jpg",
    description: "Complete garden renovation including hardscaping and new plantings."
  },
  {
    id: 6,
    title: "Tree Service",
    category: "Tree Care",
    image: "/images/portfolio/tree-service.jpg",
    description: "Professional tree trimming and maintenance service."
  }
];

export default function PortfolioPage() {
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
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8 text-green-800"
      >
        Our Portfolio
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
      >
        Explore our collection of successful projects and transformations. Each project showcases our commitment to quality and attention to detail.
      </motion.p>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
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
    </div>
  );
} 