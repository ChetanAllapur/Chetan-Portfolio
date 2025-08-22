import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-head">
          <h2>Projects</h2>
          <p>A few things I’ve built recently.</p>
        </div>

        <div className="projects-grid">
          {/* Card 1 */}
          <article className="project-card">
            <div className="project-thumb" aria-hidden="true" />
            <div className="project-body">
              <h3>Portfolio Website</h3>
              <p>
                Vite + React app with modular CSS and smooth scrolling sections.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="project-card">
            <div className="project-thumb" aria-hidden="true" />
            <div className="project-body">
              <h3>Clothing Store App</h3>
              <p>MERN stack app with JWT auth and clean API architecture.</p>
              <div className="project-tags">
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node</span>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="project-card">
            <div className="project-thumb" aria-hidden="true" />
            <div className="project-body">
              <h3>Event Manager</h3>
              <p>
                Event registration + admin dashboard with role-based access.
              </p>
              <div className="project-tags">
                <span>Redux</span>
                <span>React Router</span>
                <span>REST</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
