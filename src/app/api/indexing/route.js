import { NextResponse } from 'next/server';
import { submitUrlForIndexing, submitMultipleUrls, getAllSiteUrls, logIndexingResult } from '@/utils/googleIndexing';

/**
 * POST /api/indexing
 * Submit URLs for Google indexing
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { url, urls, type = 'URL_UPDATED', action } = body;

    // Handle single URL submission
    if (url && !urls && !action) {
      const result = await submitUrlForIndexing(url, type);
      logIndexingResult(result);
      
      return NextResponse.json({
        success: result.success,
        message: result.success 
          ? `Successfully submitted ${url} for indexing`
          : `Failed to submit ${url} for indexing`,
        result: result
      }, { status: result.success ? 200 : 500 });
    }

    // Handle multiple URLs submission
    if (urls && Array.isArray(urls)) {
      const results = await submitMultipleUrls(urls, type);
      const successCount = results.filter(r => r.success).length;
      const failureCount = results.length - successCount;
      
      results.forEach(logIndexingResult);
      
      return NextResponse.json({
        success: failureCount === 0,
        message: `Processed ${results.length} URLs: ${successCount} successful, ${failureCount} failed`,
        results: results,
        summary: {
          total: results.length,
          successful: successCount,
          failed: failureCount
        }
      }, { status: 200 });
    }

    // Handle bulk indexing of all site URLs
    if (action === 'bulk_index') {
      const siteUrls = getAllSiteUrls();
      const results = await submitMultipleUrls(siteUrls, type);
      const successCount = results.filter(r => r.success).length;
      const failureCount = results.length - successCount;
      
      results.forEach(logIndexingResult);
      
      return NextResponse.json({
        success: failureCount === 0,
        message: `Bulk indexing completed: ${successCount} successful, ${failureCount} failed`,
        results: results,
        summary: {
          total: results.length,
          successful: successCount,
          failed: failureCount
        }
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid request. Provide either "url", "urls" array, or action "bulk_index"'
    }, { status: 400 });

  } catch (error) {
    console.error('Error in indexing API:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error.message
    }, { status: 500 });
  }
}

/**
 * GET /api/indexing
 * Get information about the indexing service
 */
export async function GET() {
  try {
    const siteUrls = getAllSiteUrls();
    
    return NextResponse.json({
      success: true,
      message: 'Google Indexing API service is active',
      info: {
        domain: process.env.WEBSITE_DOMAIN,
        totalUrls: siteUrls.length,
        urls: siteUrls,
        supportedActions: [
          'Submit single URL',
          'Submit multiple URLs',
          'Bulk index all site URLs'
        ],
        usage: {
          singleUrl: 'POST with { "url": "https://example.com/page" }',
          multipleUrls: 'POST with { "urls": ["url1", "url2"] }',
          bulkIndex: 'POST with { "action": "bulk_index" }'
        }
      }
    });
  } catch (error) {
    console.error('Error in indexing API GET:', error);
    return NextResponse.json({
      success: false,
      message: 'Error retrieving indexing service info',
      error: error.message
    }, { status: 500 });
  }
}
