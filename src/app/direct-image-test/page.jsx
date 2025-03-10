import React from 'react';

export default function DirectImageTest() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Direct Image Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative h-64 rounded overflow-hidden">
          <img 
            src="/images/temp-portfolio/Portfolio-20250308T181519Z-001/Portfolio/Garden_Design_maple.jpg"
            alt="Test Image 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            Garden_Design_maple.jpg
          </div>
        </div>
        
        <div className="relative h-64 rounded overflow-hidden">
          <img 
            src="/images/temp-portfolio/Portfolio-20250308T181519Z-001/Portfolio/Annual_Garden_Design.Jpg"
            alt="Test Image 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            Annual_Garden_Design.Jpg
          </div>
        </div>
        
        <div className="relative h-64 rounded overflow-hidden">
          <img 
            src="/images/temp-portfolio/Portfolio-20250308T181519Z-001/Portfolio/Cleanup_Before1.JPG"
            alt="Test Image 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            Cleanup_Before1.JPG
          </div>
        </div>
      </div>
    </div>
  );
} 