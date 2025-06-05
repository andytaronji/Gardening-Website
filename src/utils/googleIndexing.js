import { google } from 'googleapis';

/**
 * Initialize Google Auth client for Indexing API
 */
function getGoogleAuth() {
  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    
    if (!privateKey || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      throw new Error('Missing Google service account credentials');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: privateKey,
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      },
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    return auth;
  } catch (error) {
    console.error('Error initializing Google Auth:', error);
    throw error;
  }
}

/**
 * Submit a URL to Google Indexing API
 * @param {string} url - The URL to submit for indexing
 * @param {string} type - Either 'URL_UPDATED' or 'URL_DELETED'
 */
export async function submitUrlForIndexing(url, type = 'URL_UPDATED') {
  try {
    const auth = getGoogleAuth();
    const indexing = google.indexing({ version: 'v3', auth });

    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type,
      },
    });

    console.log(`Successfully submitted ${url} for indexing:`, response.data);
    return {
      success: true,
      data: response.data,
      url: url,
      type: type,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Error submitting ${url} for indexing:`, error);
    return {
      success: false,
      error: error.message,
      url: url,
      type: type,
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Submit multiple URLs for indexing with rate limiting
 * @param {string[]} urls - Array of URLs to submit
 * @param {string} type - Either 'URL_UPDATED' or 'URL_DELETED'
 * @param {number} delay - Delay between requests in milliseconds (default: 1000ms)
 */
export async function submitMultipleUrls(urls, type = 'URL_UPDATED', delay = 1000) {
  const results = [];
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`Processing URL ${i + 1}/${urls.length}: ${url}`);
    
    const result = await submitUrlForIndexing(url, type);
    results.push(result);
    
    // Add delay between requests to respect rate limits
    if (i < urls.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  return results;
}

/**
 * Get all important URLs from your website for bulk indexing
 */
export function getAllSiteUrls() {
  const baseUrl = `https://${process.env.WEBSITE_DOMAIN}`;
  
  return [
    // Main pages
    baseUrl,
    `${baseUrl}/garden-design`,
    `${baseUrl}/groundskeeping`,
    `${baseUrl}/property-enhancement`,
    `${baseUrl}/quarterly-cleanups`,
    `${baseUrl}/consultations`,
    `${baseUrl}/consultations/vegetable-garden`,
    `${baseUrl}/portfolio`,
    `${baseUrl}/blog`,
    `${baseUrl}/contact`,
    `${baseUrl}/privacy-policy`,
    
    // Add specific blog posts or portfolio items here as needed
    // You can expand this list with dynamic content
  ];
}

/**
 * Log indexing results to console and optionally to a file
 */
export function logIndexingResult(result) {
  const logEntry = {
    timestamp: result.timestamp,
    url: result.url,
    type: result.type,
    success: result.success,
    error: result.error || null,
  };
  
  console.log('Indexing Result:', JSON.stringify(logEntry, null, 2));
  
  // In a production environment, you might want to store this in a database
  // or write to a log file for monitoring purposes
  return logEntry;
}
