import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-card contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left */}
          <div className="contact-intro">
            <h2>Contact</h2>
            <p>Let’s connect! You can reach me via email or social links below.</p>
            <div className="contact-links">
              <a href="mailto:allapurchetan@gmail.com" className="link-chip">Email</a>
              <a href="https://github.com/ChetanAllapur" target="_blank" rel="noreferrer" className="link-chip">GitHub</a>
              <a href="https://www.linkedin.com/in/chetan-allapur" target="_blank" rel="noreferrer" className="link-chip">LinkedIn</a>
              <a href="https://www.instagram.com/chetan.allapur/" target="_blank" rel="noreferrer" className="link-chip">Instagram</a>
            </div>
            <p className="contact-note">I usually respond within 24 hours.</p>
          </div>

          {/* Right: form */}
          <form className="contact-form">
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows="5" placeholder="Your message"></textarea>
            </div>
            <div className="actions">
              <button type="submit" className="btn primary">Send</button>
              <button type="reset" className="btn ghost">Clear</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
