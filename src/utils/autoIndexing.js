/**
 * Auto-indexing utilities for triggering Google indexing when content is updated
 */

/**
 * Automatically submit a URL for indexing (client-side)
 * @param {string} url - The URL to submit for indexing
 * @param {string} type - Either 'URL_UPDATED' or 'URL_DELETED'
 */
export async function autoSubmitForIndexing(url, type = 'URL_UPDATED') {
  try {
    // Only run in production or when explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.ENABLE_AUTO_INDEXING) {
      console.log(`Auto-indexing skipped (dev mode): ${url}`);
      return { success: true, skipped: true };
    }

    const response = await fetch('/api/indexing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        type: type
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log(`Auto-indexing successful for: ${url}`);
    } else {
      console.warn(`Auto-indexing failed for: ${url}`, result.message);
    }

    return result;
  } catch (error) {
    console.error(`Auto-indexing error for ${url}:`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Submit current page for indexing (browser only)
 */
export function submitCurrentPageForIndexing() {
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.href;
    return autoSubmitForIndexing(currentUrl);
  }
  return Promise.resolve({ success: false, error: 'Not in browser environment' });
}

/**
 * Server-side auto-indexing function
 * @param {string} url - The URL to submit for indexing
 * @param {string} type - Either 'URL_UPDATED' or 'URL_DELETED'
 */
export async function serverSideAutoIndex(url, type = 'URL_UPDATED') {
  try {
    // Import the indexing function dynamically to avoid issues
    const { submitUrlForIndexing } = await import('./googleIndexing');
    
    // Only run in production or when explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.ENABLE_AUTO_INDEXING) {
      console.log(`Server auto-indexing skipped (dev mode): ${url}`);
      return { success: true, skipped: true };
    }

    const result = await submitUrlForIndexing(url, type);
    
    if (result.success) {
      console.log(`Server auto-indexing successful for: ${url}`);
    } else {
      console.warn(`Server auto-indexing failed for: ${url}`, result.error);
    }

    return result;
  } catch (error) {
    console.error(`Server auto-indexing error for ${url}:`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Batch submit multiple URLs for indexing
 * @param {string[]} urls - Array of URLs to submit
 */
export async function batchAutoIndex(urls) {
  const results = [];
  
  for (const url of urls) {
    const result = await autoSubmitForIndexing(url);
    results.push({ url, ...result });
    
    // Add small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  return results;
}

/**
 * Get the full URL for a given path
 * @param {string} path - The path (e.g., '/blog/my-post')
 */
export function getFullUrl(path) {
  const domain = process.env.WEBSITE_DOMAIN || 'gardeningthyme.com';
  const baseUrl = `https://${domain}`;
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Hook for React components to trigger indexing on mount
 * @param {string} path - The path to index (optional, uses current path if not provided)
 */
export function useAutoIndexing(path = null) {
  if (typeof window !== 'undefined') {
    const urlToIndex = path ? getFullUrl(path) : window.location.href;
    
    // Trigger indexing after component mounts
    setTimeout(() => {
      autoSubmitForIndexing(urlToIndex);
    }, 2000); // 2 second delay to ensure page is fully loaded
  }
}
