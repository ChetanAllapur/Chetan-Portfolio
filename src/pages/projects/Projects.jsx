import "./Projects.css";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      blurb:
        "Full-stack MERN app with JWT auth, role-based admin, product/catalog, cart, orders, and payments.",
      tech: ["React", "Node", "Express", "MongoDB", "JWT", "Vite"],
      demo: "#",
      code: "#",
    },
    {
      title: "Event Manager",
      blurb:
        "Create & manage events, ticketing, RSVP, and admin dashboards. Optimized list/filters & charts.",
      tech: ["React", "Redux", "Node", "Express", "MongoDB"],
      demo: "#",
      code: "#",
    },
    {
      title: "Portfolio (This Site)",
      blurb:
        "Dark theme, rounded-card layout, performance-focused with reusable components and clean CSS.",
      tech: ["Vite", "React", "CSS", "Framer Motion (planned)"],
      demo: "#",
      code: "#",
    },
    {
      title: "API Starter",
      blurb:
        "Modular Express API with MVC structure, testing setup, and CI ready for quick feature delivery.",
      tech: ["Node", "Express", "Jest", "Supertest", "CI/CD"],
      demo: "#",
      code: "#",
    },
    {
      title: "Todo Mobile App",
      blurb:
        "Cross-platform todo app with offline-first storage, filters, and smooth UI. Built with React Native & Expo.",
      tech: ["React Native", "Expo", "AsyncStorage"],
      demo: "#",
      code: "#",
    },
    {
      title: "Counter App (Redux)",
      blurb:
        "A simple counter demonstrating global state with react-redux and Redux Toolkit, including increment/decrement and async thunk.",
      tech: ["React", "react-redux", "Redux Toolkit", "Vite"],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-card">
          <div className="card-inner">
            <header className="projects-head">
              <div>
                <h2>Projects</h2>
                <p>Some things I’ve built and shipped.</p>
              </div>
              <a href="#contact" className="btn ghost">Hire Me</a>
            </header>

            <div className="projects-grid" role="list">
              {projects.map((p, i) => (
                <motion.article
                  key={p.title}
                  className="project-card"
                  role="listitem"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="project-body">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-blurb">{p.blurb}</p>
                    <div className="project-tech">
                      {p.tech.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <a
                      className="btn primary"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open live demo for ${p.title}`}
                    >
                      Live
                    </a>
                    <a
                      className="btn ghost"
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View source code for ${p.title}`}
                    >
                      Code
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
