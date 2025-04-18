// Next.js API Route Example
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { subscriberEmail, notifyEmail } = req.body;

  if (!subscriberEmail || !notifyEmail) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.EMAIL_SECURE),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send notification email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: notifyEmail,
      subject: 'New Website Subscription',
      html: `
        <h1>New Subscriber!</h1>
        <p>Someone has subscribed to your newsletter:</p>
        <p><strong>Email:</strong> ${subscriberEmail}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Failed to subscribe' });
  }
}