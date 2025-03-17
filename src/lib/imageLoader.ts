// Image loader utility functions

/**
 * Get the image URL for a given image path
 * This function helps with handling both local and remote images
 */
export const getImageUrl = (imagePath: string): string => {
  // If the image path starts with http or https, it's already a full URL
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // If the image path starts with a slash, it's a local image
  if (imagePath.startsWith('/')) {
    return imagePath;
  }

  // Otherwise, assume it's a relative path and prepend the public directory
  return `/${imagePath}`;
};

/**
 * Get the image dimensions for a given image path
 * This is a placeholder function that would ideally use actual image dimensions
 */
export const getImageDimensions = (
  imagePath: string
): { width: number; height: number } => {
  // In a real implementation, this would determine the actual dimensions
  // For now, we'll return default dimensions
  return {
    width: 1200,
    height: 800,
  };
};

/**
 * Generate a responsive image srcSet
 */
export const generateSrcSet = (imagePath: string): string => {
  const baseUrl = getImageUrl(imagePath);
  
  // This is a simplified implementation
  // In a real app, you might use a service like Cloudinary or Next.js Image
  return `
    ${baseUrl}?w=640 640w,
    ${baseUrl}?w=750 750w,
    ${baseUrl}?w=828 828w,
    ${baseUrl}?w=1080 1080w,
    ${baseUrl}?w=1200 1200w,
    ${baseUrl}?w=1920 1920w,
    ${baseUrl}?w=2048 2048w
  `.trim();
};

/**
 * Generate image alt text if none is provided
 */
export const generateAltText = (imagePath: string): string => {
  // Extract the filename without extension
  const filename = imagePath.split('/').pop()?.split('.')[0] || '';
  
  // Replace underscores and hyphens with spaces
  const altText = filename
    .replace(/[-_]/g, ' ')
    .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
    .trim();
  
  // Capitalize the first letter of each word
  return altText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};