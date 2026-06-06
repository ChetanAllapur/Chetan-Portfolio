import { motion as Motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="section-card">
          <Motion.div
            className="card-inner home-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="home-intro">
              <p className="eyebrow">Hello, I&apos;m</p>
              <h1 className="title">
                Chetan <span className="accent">Allapur</span>
              </h1>
              <p className="subtitle">React &amp; React Native Developer</p>
              <p className="blurb">
                I build scalable web and mobile applications with React, React
                Native, JavaScript, TypeScript, and Node.js. I care about clean
                user experiences, performance, and maintainable frontend
                architecture.
              </p>
              <div className="cta">
                <a href="#projects" className="btn primary">
                  View Projects
                </a>
                <a href="#contact" className="btn ghost">
                  Contact Me
                </a>
              </div>
              <div className="quick-links">
                <a href="#about">About</a> <span>&bull;</span>
                <a href="#projects">Projects</a> <span>&bull;</span>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <aside className="home-aside" aria-label="Highlights">
              <div className="badge">Open to Opportunities</div>
              <div className="stat">
                <div className="stat-value">4.5+ Years</div>
                <div className="stat-label">Experience</div>
              </div>
              <div className="stat">
                <div className="stat-value">Web + Mobile</div>
                <div className="stat-label">Development</div>
              </div>
              <div className="tech-cloud">
                <span>React</span>
                <span>React Native</span>
                <span>TypeScript</span>
                <span>Redux</span>
                <span>Node</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Tailwind</span>
                <span>Jest</span>
                <span>WebDriverIO</span>
                <span>GitHub Copilot</span>
              </div>
            </aside>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
