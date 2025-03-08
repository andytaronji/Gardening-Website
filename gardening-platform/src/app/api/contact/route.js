import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    // Create a transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Gardening Thyme Website" <${process.env.EMAIL_USER}>`, // This ensures proper "From" formatting
      replyTo: email, // This allows you to reply directly to the sender
      to: process.env.EMAIL_USER, // Send to your services email
      subject: `New Contact Form Message: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 