import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting store
const rateLimitStore = new Map();

// Rate limiting configuration
const RATE_LIMIT = {
  maxAttempts: 3,
  windowMs: 60 * 60 * 1000, // 1 hour
};

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.resetTime > RATE_LIMIT.windowMs) {
      rateLimitStore.delete(key);
    }
  }
}, 15 * 60 * 1000); // Clean up every 15 minutes

// Get client IP address
function getClientIp(req) {
  // Check various headers for the real IP
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const cfConnectingIp = req.headers.get('cf-connecting-ip');
  
  if (cfConnectingIp) return cfConnectingIp;
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIp) return realIp;
  
  return 'unknown';
}

// Rate limiting check
function checkRateLimit(clientIp) {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIp);

  if (!clientData) {
    // First request from this IP
    rateLimitStore.set(clientIp, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return { allowed: true, remaining: RATE_LIMIT.maxAttempts - 1 };
  }

  if (now > clientData.resetTime) {
    // Reset window has passed
    rateLimitStore.set(clientIp, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return { allowed: true, remaining: RATE_LIMIT.maxAttempts - 1 };
  }

  if (clientData.count >= RATE_LIMIT.maxAttempts) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: clientData.resetTime,
    };
  }

  // Increment count
  clientData.count += 1;
  rateLimitStore.set(clientIp, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT.maxAttempts - clientData.count,
  };
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token) {
  if (!token) {
    console.warn('No reCAPTCHA token provided');
    return { success: false, score: 0 };
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('RECAPTCHA_SECRET_KEY not configured');
    return { success: false, score: 0 };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    
    return {
      success: data.success,
      score: data.score || 0,
      action: data.action,
      hostname: data.hostname,
    };
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { success: false, score: 0 };
  }
}

export async function POST(req) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(req);
    
    // Check rate limit
    const rateLimitResult = checkRateLimit(clientIp);
    
    if (!rateLimitResult.allowed) {
      const resetTimeMinutes = Math.ceil(
        (rateLimitResult.resetTime - Date.now()) / 1000 / 60
      );
      
      return new Response(
        JSON.stringify({
          error: `Too many requests. Please try again in ${resetTimeMinutes} minutes.`,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': RATE_LIMIT.maxAttempts.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          },
        }
      );
    }

    // Validate request body
    if (!req.body) {
      return new Response(JSON.stringify({ error: 'Request body is missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await req.json();
    const { name, email, phone, serviceType, subject, message, honeypot, recaptchaToken } = data;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
      console.log('Honeypot triggered - potential bot detected');
      // Return success to not alert the bot, but don't send email
      return new Response(
        JSON.stringify({ message: 'Email sent successfully' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.log('reCAPTCHA verification failed', {
        success: recaptchaResult.success,
        score: recaptchaResult.score,
        action: recaptchaResult.action,
      });
      
      return new Response(
        JSON.stringify({
          error: 'Security verification failed. Please try again or contact us directly.',
        }),
        {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Required fields are missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate field lengths (prevent abuse)
    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'One or more fields exceed maximum length' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check for suspicious patterns (common spam indicators)
    const suspiciousPatterns = [
      /\b(viagra|cialis|casino|lottery|winner)\b/i,
      /\b(click here|buy now|limited offer)\b/i,
      /(http[s]?:\/\/){3,}/i, // Multiple URLs
    ];

    const textToCheck = `${name} ${email} ${subject} ${message}`.toLowerCase();
    const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(textToCheck));

    if (isSuspicious) {
      console.log('Suspicious content detected');
      // Return success but don't send email
      return new Response(
        JSON.stringify({ message: 'Email sent successfully' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Check if environment variables are set
    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      console.error('Resend configuration is missing');
      return new Response(
        JSON.stringify({ error: 'Server configuration error. Please contact the administrator.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Format service type for display
    const formattedServiceType = serviceType 
      ? serviceType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      : 'Not specified';

    // Current date and time
    const currentDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    try {
      // Send email using Resend
      const { data: emailData, error } = await resend.emails.send({
        from: `Gardening Thyme Contact Form <${process.env.FROM_EMAIL}>`,
        to: [process.env.FROM_EMAIL],
        replyTo: email,
        subject: `New Contact Form Message: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #2e7d32; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Message</h2>
            <p style="color: #666;">Submitted on: ${currentDate}</p>
            <p style="color: #666; font-size: 12px;">reCAPTCHA Score: ${recaptchaResult.score.toFixed(2)} | IP: ${clientIp}</p>
            
            <h3 style="color: #2e7d32; margin-top: 20px;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2e7d32;">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service Type:</strong> ${formattedServiceType}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            
            <h3 style="color: #2e7d32; margin-top: 20px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            
            <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
              This email was sent from the contact form on the Gardening Thyme website.
            </p>
          </div>
        `,
        text: `
New message from the Gardening Thyme website contact form
Submitted on: ${currentDate}
reCAPTCHA Score: ${recaptchaResult.score.toFixed(2)} | IP: ${clientIp}

CONTACT DETAILS:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Type: ${formattedServiceType}
Subject: ${subject}

MESSAGE:
${message}
        `,
      });

      if (error) {
        console.error('Error sending email with Resend:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }

      console.log('Email sent successfully with Resend:', emailData?.id);

      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': RATE_LIMIT.maxAttempts.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      });
    } catch (sendError) {
      console.error('Error sending email:', sendError);
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again later.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
