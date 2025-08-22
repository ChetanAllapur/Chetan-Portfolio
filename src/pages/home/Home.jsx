import { motion } from "framer-motion";
import "./Home.css";
export default function Home() {
  return (
    <section id="home" className="section">
      {" "}
      <div className="container">
        {" "}
        {/* only ONE card */}{" "}
        <div className="section-card">
          {" "}
          {/* animate the INNER wrapper */}{" "}
          <motion.div
            className="card-inner home-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            {/* Left: Intro */}{" "}
            <div className="home-intro">
              {" "}
              <p className="eyebrow">Hello, I’m</p>{" "}
              <h1 className="title">
                {" "}
                Chetan <span className="accent">Allapur</span>{" "}
              </h1>{" "}
              <p className="subtitle">Software Engineer · React / MERN</p>{" "}
              <p className="blurb">
                {" "}
                I craft clean, accessible UIs and scalable frontends. Passionate
                about performance, DX, and shipping features with impact.{" "}
              </p>{" "}
              <div className="cta">
                {" "}
                <a href="#projects" className="btn primary">
                  View Projects
                </a>{" "}
                <a href="#contact" className="btn ghost">
                  Contact Me
                </a>{" "}
              </div>{" "}
              <div className="quick-links">
                {" "}
                <a href="#about">About</a> <span>•</span>{" "}
                <a href="#projects">Projects</a> <span>•</span>{" "}
                <a href="#contact">Contact</a>{" "}
              </div>{" "}
            </div>{" "}
            {/* Right: Highlights */}{" "}
            <aside className="home-aside" aria-label="Highlights">
              {" "}
              <div className="badge">Open to Opportunities</div>{" "}
              <div className="stat">
                {" "}
                <div className="stat-value">3+ Years</div>{" "}
                <div className="stat-label">Experience</div>{" "}
              </div>{" "}
              <div className="stat">
                {" "}
                <div className="stat-value">4</div>{" "}
                <div className="stat-label">Full-stack Projects</div>{" "}
              </div>{" "}
              <div className="tech-cloud">
                {" "}
                <span>React</span>
                <span>Redux</span>
                <span>Node</span> <span>Express</span>
                <span>MongoDB</span>
                <span>Vite</span> <span>Jest</span>
                <span>GitHub</span>{" "}
              </div>{" "}
            </aside>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
