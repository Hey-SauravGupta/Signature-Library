// api/contact.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  // Environment variables se email credentials prapt karein
  const { GMAIL_EMAIL, GMAIL_APP_PASSWORD } = process.env;

  if (!GMAIL_EMAIL || !GMAIL_APP_PASSWORD) {
    console.error('Email credentials environment variables not set!');
    return res.status(500).json({ message: 'Server configuration error.' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Nodemailer transporter set up karein
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  // Email ke options set karein
  const mailOptions = {
    from: `"RV Library Website" <${GMAIL_EMAIL}>`,
    to: GMAIL_EMAIL, // Aapke email par bhejega
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Message from RV Swadhyay Library Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    // Email bhejें
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send message.' });
  }
}