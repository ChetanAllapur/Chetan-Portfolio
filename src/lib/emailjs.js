import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function isEmailJSConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

if (isEmailJSConfigured()) {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  });
}

export async function sendContactEmail(data) {
  if (!isEmailJSConfigured()) {
    throw new Error("EmailJS is not configured.");
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    title: data.title || "Portfolio Contact",
    name: data.name,
    email: data.email,
    message: data.message,
  });
}
