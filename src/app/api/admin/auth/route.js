import { NextResponse } from 'next/server';

/**
 * POST /api/admin/auth
 * Authenticate admin user with password
 */
export async function POST(request) {
  try {
    const { password } = await request.json();
    
    if (!password) {
      return NextResponse.json({
        success: false,
        message: 'Password is required'
      }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable not set');
      return NextResponse.json({
        success: false,
        message: 'Admin authentication not configured'
      }, { status: 500 });
    }

    if (password === adminPassword) {
      // Generate a simple session token (timestamp + random)
      const sessionToken = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      return NextResponse.json({
        success: true,
        message: 'Authentication successful',
        sessionToken: sessionToken,
        expiresAt: Date.now() + (30 * 60 * 1000) // 30 minutes
      });
    } else {
      // Log failed attempt
      console.warn(`Failed admin login attempt at ${new Date().toISOString()}`);
      
      return NextResponse.json({
        success: false,
        message: 'Invalid password'
      }, { status: 401 });
    }

  } catch (error) {
    console.error('Error in admin auth:', error);
    return NextResponse.json({
      success: false,
      message: 'Authentication error'
    }, { status: 500 });
  }
}

/**
 * GET /api/admin/auth
 * Verify session token
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionToken = searchParams.get('token');
    const expiresAt = searchParams.get('expires');

    if (!sessionToken || !expiresAt) {
      return NextResponse.json({
        success: false,
        message: 'Invalid session data'
      }, { status: 401 });
    }

    // Check if session has expired
    if (Date.now() > parseInt(expiresAt)) {
      return NextResponse.json({
        success: false,
        message: 'Session expired'
      }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      message: 'Session valid'
    });

  } catch (error) {
    console.error('Error verifying session:', error);
    return NextResponse.json({
      success: false,
      message: 'Session verification error'
    }, { status: 500 });
  }
}
