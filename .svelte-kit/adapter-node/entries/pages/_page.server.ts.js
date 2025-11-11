import nodemailer from "nodemailer";
const MAIL_PASSWORD = "brYIrnMCxbURw7FRNqc5";
const transporter = nodemailer.createTransport({
  host: "mail.3nt3.de",
  port: 465,
  secure: true,
  // true for port 465, false for other ports
  auth: {
    user: "contact@3nt3.de",
    pass: MAIL_PASSWORD
  },
  tls: { rejectUnauthorized: false }
});
const actions = {
  contact: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    console.log(name, email, message);
    await transporter.sendMail({
      from: `contact@3nt3.de`,
      to: "nia@3nt3.de",
      subject: "[3NT3.DE CONTACT FORM] Message from " + name,
      text: message + "\n\n" + email
    });
    return {
      status: 200,
      body: "Message sent"
    };
  }
};
export {
  actions
};
