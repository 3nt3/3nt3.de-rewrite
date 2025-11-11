import nodemailer from 'nodemailer';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cv13nbd5.js')).default;
const universal_id = "src/routes/+page.ts";
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.0ee3e13c.js","_app/immutable/chunks/scheduler.fc6b6886.js","_app/immutable/chunks/index.83c0f759.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.31ac934a.js"];
const stylesheets = ["_app/immutable/assets/2.93b64f05.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-ttOrvzG9.js.map
