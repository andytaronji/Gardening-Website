'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getFallbackImage } from '@/utils/imageUtils';

const ImageComponent = ({
  src,
  alt = "Garden image",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  quality = 75,
  className = "",
  aspectRatio,
  fallbackSrc = getFallbackImage(),
  objectFit = "cover"
}) => {
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCount, setErrorCount] = useState(0);

  const handleImageLoad = () => {
    setIsLoading(false);
    console.log('Image loaded successfully:', imageSrc);
  };

  const handleImageError = () => {
    console.warn('Image failed to load:', imageSrc);
    setErrorCount(prev => {
      const newCount = prev + 1;
      if (newCount >= 3) {
        console.warn('Multiple load failures, using fallback image');
        setImageSrc(fallbackSrc);
        return 0;
      }
      return newCount;
    });
  };

  // Only calculate padding if aspectRatio is provided
  const containerStyle = aspectRatio ? {
    paddingTop: `${(Number(aspectRatio.split('/')[1]) / Number(aspectRatio.split('/')[0])) * 100}%`
  } : {
    height: '100%'  // Default to full height if no aspect ratio
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Only render padding div if aspectRatio is provided */}
      {aspectRatio && <div style={containerStyle} />}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
        </div>
      )}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className="absolute inset-0"
          style={{ 
            objectFit,
            objectPosition: 'center',
            imageRendering: 'high-quality'
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ImageComponent; 