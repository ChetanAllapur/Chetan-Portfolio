import { motion as Motion } from "framer-motion";
import profile from "../../assets/profile.jpg";
import "./About.css";

export default function About() {
  const skills = [
    "React",
    "React Native",
    "JavaScript (ES6+)",
    "TypeScript",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "RESTful APIs",
    "JWT Authentication",
    "Mongoose",
    "Git/GitHub",
    "Postman",
    "Jest",
    "Selenium",
    "WebDriverIO",
    "NPM/Yarn",
    "GitHub Copilot",
    "Cursor AI",
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <Motion.div
          className="section-card about-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <aside className="about-card">
            <div className="about-photo">
              <img src={profile} alt="Profile" />
            </div>
            <div className="about-meta">
              <h3>Chetan Allapur</h3>
              <p>React &amp; React Native Developer</p>
            </div>
          </aside>

          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I build scalable web and mobile applications with React, React
              Native, JavaScript, TypeScript, and Node.js. My experience spans
              healthcare and enterprise products, with a focus on responsive
              UI, API integration, performance, and maintainable architecture.
            </p>

            <div className="skills">
              {skills.map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
