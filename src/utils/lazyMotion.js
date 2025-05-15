'use client';

import dynamic from 'next/dynamic';

// Dynamically import motion components with SSR disabled to reduce initial bundle size
export const LazyMotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

export const LazyMotionSection = dynamic(
  () => import('framer-motion').then(mod => mod.motion.section),
  { ssr: false }
);

export const LazyMotionH2 = dynamic(
  () => import('framer-motion').then(mod => mod.motion.h2),
  { ssr: false }
);

// Export animation variants that can be reused across components
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
