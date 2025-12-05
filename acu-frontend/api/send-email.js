import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, comments } = req.body;

    if (!name || !email || !comments) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // 1️⃣ Email to YOU
    const notifyMsg = {
      to: process.env.SENDGRID_TO, // your email
      from: process.env.SENDGRID_FROM, // no-reply@yourdomain.com
      subject: `Online Form Submission:  ${name} - ${subject}`,
      text: `
Name: ${name}

Email: ${email}

Subject: ${subject}

Comments:
${comments}`,
    };

    // 2️⃣ Confirmation email to the USER
    const confirmMsg = {
      to: email,
      from: process.env.SENDGRID_FROM,
      subject: 'Thank you for contacting us!',
      html: `
        <div style="font-family: Arial; font-size: 16px;">
          <p>Hi ${name},</p>
          <p>Thank you for reaching out. We have received your message:</p>
          <blockquote>${comments}</blockquote>
          <p>We will respond within 24 hours.</p>
          <br/>
          <p>— Acupuncture & Medical Center</p>
        </div>
      `,
    };

    await sgMail.send(notifyMsg);
    await sgMail.send(confirmMsg);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SendGrid Error:', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
