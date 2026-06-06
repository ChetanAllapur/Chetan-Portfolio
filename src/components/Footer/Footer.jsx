import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer section">
      <div className="container">
        <div className="section-card footer-card">
          <div className="footer-grid">
            <div className="left">
              <div className="brand">
                <span className="dot" /> Chetan <span className="fade">Allapur</span>
              </div>
              <p className="tag">Web + Mobile Developer</p>
              <p className="meta">Bengaluru, India · +91-7619163392 · allapurchetan@gmail.com</p>
            </div>

            <div className="right">
              <a className="link" href="mailto:allapurchetan@gmail.com">
                Email
              </a>
              <a
                className="link"
                href="https://github.com/ChetanAllapur"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/chetan-allapur"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="link"
                href="https://chetanallapur.web.app"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className="btn small ghost"
                href="/Chetan-Allapur-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="copy">&copy; {year} Chetan Allapur. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
