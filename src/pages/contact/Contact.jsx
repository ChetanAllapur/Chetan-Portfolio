import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { isEmailJSConfigured, sendContactEmail } from "../../lib/emailjs";
import "./Contact.css";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
const getEmailError = (value) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (!trimmed.includes("@")) {
    return "Enter a valid email";
  }

  if (!isValidEmail(trimmed)) {
    return "Enter a valid email";
  }

  return "";
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (name === "email") {
      const emailError = getEmailError(value);
      setFieldErrors((current) => ({ ...current, email: emailError }));
      event.target.setCustomValidity(emailError);
    }
  };

  const handleEmailBlur = (event) => {
    const emailError = getEmailError(event.target.value);
    setFieldErrors((current) => ({ ...current, email: emailError }));
    event.target.setCustomValidity(emailError);

    if (emailError) {
      event.target.reportValidity();
    }
  };

  const resetForm = () => {
    setForm({ name: "", email: "", message: "", company: "" });
    setFeedback("");
    setStatus("idle");
    setFieldErrors({ email: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailJSConfigured()) {
      setStatus("error");
      setFeedback("EmailJS is not configured yet. Add your service, template, and public key.");
      return;
    }

    if (form.company) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }

    const emailError = getEmailError(email);
    if (emailError) {
      setStatus("error");
      setFeedback(emailError);
      setFieldErrors((current) => ({ ...current, email: emailError }));
      return;
    }

    try {
      setStatus("submitting");
      setFeedback("");

      await sendContactEmail({ name, email, message });

      setStatus("success");
      setFeedback("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setFeedback(
        error?.message === "Request timed out."
          ? "The request took too long. Please try again."
          : error?.text || error?.message || "Something went wrong while sending your message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Motion.div
          className="section-card contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="contact-intro">
            <h2>Contact</h2>
            <p>
              Let&apos;s connect! You can reach me via email, GitHub, LinkedIn,
              or my portfolio site below.
            </p>
            <div className="contact-links">
              <a href="mailto:allapurchetan@gmail.com" className="link-chip">
                Email
              </a>
              <a
                href="https://github.com/ChetanAllapur"
                target="_blank"
                rel="noreferrer"
                className="link-chip"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chetan-allapur"
                target="_blank"
                rel="noreferrer"
                className="link-chip"
              >
                LinkedIn
              </a>
              <a
                href="https://chetanallapur.web.app"
                target="_blank"
                rel="noreferrer"
                className="link-chip"
              >
                Website
              </a>
            </div>
            <p className="contact-note">
              Bengaluru, India · Phone: +91-7619163392 · I usually respond within 24 hours.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="contact-honeypot"
              value={form.company}
              onChange={handleChange}
              aria-hidden="true"
            />
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleEmailBlur}
                autoComplete="email"
                inputMode="email"
                spellCheck="false"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Enter a valid email"
                required
              />
              {fieldErrors.email ? (
                <p className="field-error">{fieldErrors.email}</p>
              ) : null}
            </div>
            <div className="field">
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            {feedback ? (
              <p className={`contact-status ${status}`}>{feedback}</p>
            ) : null}
            <div className="actions">
              <button
                type="submit"
                className="btn primary"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send"}
              </button>
              <button type="button" className="btn ghost" onClick={resetForm}>
                Clear
              </button>
            </div>
          </form>
        </Motion.div>
      </div>
    </section>
  );
}
