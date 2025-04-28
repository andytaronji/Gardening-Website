import nodemailer from 'nodemailer';

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
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP configuration is missing');
      return new Response(JSON.stringify({ error: 'Server configuration error. Please contact the administrator.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create a transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true, // use SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    try {
      // Test the connection
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return new Response(JSON.stringify({ error: 'Failed to connect to email server. Please try again later.' }), {
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

    // Email content
    const mailOptions = {
      from: `"Gardening Thyme Potential Client" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Message: ${subject}`,
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
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);

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
