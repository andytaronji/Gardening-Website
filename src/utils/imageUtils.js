import { ImageRegistry } from './imageRegistry';

// Array of all portfolio images
const portfolioImages = [
  '/images/new/garden-design-1.jpg',
  '/images/new/garden-design-2.jpg',
  '/images/new/vegetable-garden-1.jpg',
  '/images/new/vegetable-garden-2.jpg',
  '/images/new/landscape-1.jpg',
  '/images/new/landscape-2.jpg',
  '/images/new/maintenance-2.jpg'
];

// Default fallback image
const defaultFallbackImage = '/images/new/garden-design-1.jpg';

// Get all images
export const getAllImages = () => [...portfolioImages];

// Get the fallback image
export const getFallbackImage = () => defaultFallbackImage;

// Get portfolio image by category and name
export const getPortfolioImage = (category, name) => {
  try {
    return ImageRegistry.portfolio[category]?.[name] || getFallbackImage();
  } catch (error) {
    console.warn(`Failed to get portfolio image for category: ${category}, name: ${name}`);
    return getFallbackImage();
  }
};

// Get blog post image by ID
export const getBlogImage = (postId) => {
  try {
    return ImageRegistry.blog.posts[postId] || getFallbackImage();
  } catch (error) {
    console.warn(`Failed to get blog image for post: ${postId}`);
    return getFallbackImage();
  }
};

// Get consultation image by type
export const getConsultationImage = (type) => {
  try {
    return ImageRegistry.consultations[type] || getFallbackImage();
  } catch (error) {
    console.warn(`Failed to get consultation image for type: ${type}`);
    return getFallbackImage();
  }
};

// Get random image from a portfolio category
export const getRandomPortfolioImage = (category) => {
  try {
    const categoryImages = Object.values(ImageRegistry.portfolio[category] || {});
    if (categoryImages.length === 0) return getFallbackImage();
    return categoryImages[Math.floor(Math.random() * categoryImages.length)];
  } catch (error) {
    console.warn(`Failed to get random image for category: ${category}`);
    return getFallbackImage();
  }
};

// Get all images from a portfolio category
export const getAllPortfolioCategoryImages = (category) => {
  try {
    return Object.values(ImageRegistry.portfolio[category] || {});
  } catch (error) {
    console.warn(`Failed to get all images for category: ${category}`);
    return [getFallbackImage()];
  }
};
