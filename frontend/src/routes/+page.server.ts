import nodemailer from 'nodemailer';
import type { RequestEvent } from '@sveltejs/kit';
import { MAIL_PASSWORD, HCAPTCHA_SECRET } from '$env/static/private';

const transporter = nodemailer.createTransport({
  host: "mail.3nt3.de",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "contact@3nt3.de",
    pass: MAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false }
});


export const actions = {
  contact: async (event: RequestEvent) => {
    const { request } = event;
    const data = await request.formData();

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const hCaptchaResponse = data.get('h-captcha-response');

    const clientAddress = event.getClientAddress();

    if (!verifyHCaptcha(hCaptchaResponse?.toString(), clientAddress)) { return { status: 403, body: "captcha not passed" } }

    console.log(name, email, message);

    // send email
    await transporter.sendMail({
      from: `contact@3nt3.de`,
      to: "nia@3nt3.de",
      subject: "[3NT3.DE CONTACT FORM] Message from " + name,
      text: message + "\n\n" + email,
    });

    return {
      status: 200,
      body: "Message sent",
    };
  }
}


async function verifyHCaptcha(hCaptchaResponse: string | undefined, clientAddress: string | undefined): Promise<boolean> {
  const data = new URLSearchParams();
  data.append('secret', HCAPTCHA_SECRET || '');
  data.append('remoteip', clientAddress || '');
  data.append('response', hCaptchaResponse || '');


  const res = await fetch('https://api.hcaptcha.com/siteverify', { method: 'POST', body: data, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  if (res.ok) {
    const json = await res.json();
    return json.success === true;
  }

  return false;
}
