import emailjs from '@emailjs/browser';

// EmailJS Configuration
// To set up:
// 1. Create account at https://www.emailjs.com/
// 2. Create email service (Gmail, Outlook, etc.)
// 3. Create email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values below

const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID

interface ContactFormData {
     name: string;
     email: string;
     phone?: string;
     service?: string;
     message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
     // Check if EmailJS is configured
     if (
          EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' ||
          EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
          EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID'
     ) {
          console.warn('EmailJS not configured. Please update src/utils/emailService.ts with your credentials.');
          // Simulate successful submission for demo purposes
          return new Promise((resolve) => {
               setTimeout(() => resolve(true), 1000);
          });
     }

     try {
          // Initialize EmailJS
          emailjs.init(EMAILJS_PUBLIC_KEY);

          // Send email
          const response = await emailjs.send(
               EMAILJS_SERVICE_ID,
               EMAILJS_TEMPLATE_ID,
               {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone || 'Not provided',
                    service: formData.service || 'General Inquiry',
                    message: formData.message,
                    to_name: 'AURA Engineering',
               }
          );

          return response.status === 200;
     } catch (error) {
          console.error('Failed to send email:', error);
          throw error;
     }
};

// Email template suggestion for EmailJS:
/*
Subject: New Contact Form Submission - {{service}}

Hello AURA Engineering Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested In: {{service}}

Message:
{{message}}

---
This email was sent from the AURA Engineering website contact form.
*/
