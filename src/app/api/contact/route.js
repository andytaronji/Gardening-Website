import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Validate request body
    if (!req.body) {
      return new Response(JSON.stringify({ error: 'Request body is missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await req.json();
    const { name, email, phone, serviceType, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Required fields are missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if environment variables are set
    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      console.error('Resend configuration is missing');
      return new Response(JSON.stringify({ error: 'Server configuration error. Please contact the administrator.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
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
        return new Response(JSON.stringify({ error: 'Failed to send email. Please try again later.' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      console.log('Email sent successfully with Resend:', emailData?.id);

      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (sendError) {
      console.error('Error sending email:', sendError);
      return new Response(JSON.stringify({ error: 'Failed to send email. Please try again later.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred. Please try again later.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
