'use client';

import { motion } from 'framer-motion';

// These were previously dynamic(..., { ssr: false }), which kept the wrapped
// content out of the server-rendered HTML. That caused two problems: the
// content "popped in" after hydration (large CLS) and the LCP element wasn't
// present in the initial HTML (slow LCP). framer-motion is already imported
// directly elsewhere in the app, so rendering the real motion components here
// adds no bundle weight while letting this content server-render.
export const LazyMotionDiv = motion.div;
export const LazyMotionSection = motion.section;
export const LazyMotionH2 = motion.h2;

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
