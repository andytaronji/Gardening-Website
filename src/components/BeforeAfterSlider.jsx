'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
        <AnimatePresence mode="wait">
          {showAfter ? (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <Image
                src={afterImage}
                alt={`${title} - After`}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              key="before"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <Image
                src={beforeImage}
                alt={`${title} - Before`}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label={showAfter ? "Show before" : "Show after"}
        >
          <svg
            className="w-6 h-6 text-green-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={showAfter ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>

        {/* Label */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full shadow-lg">
          <span className="text-green-800 font-medium">
            {showAfter ? "After" : "Before"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider; 