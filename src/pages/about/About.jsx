import './About.css';
import profile from '../../assets/profile.jpg';

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Redux',
    'Node.js',
    'Express',
    'MongoDB',
    'REST APIs',
    'HTML5',
    'CSS3',
    'Tailwind',
    'Vite',
    'Git/GitHub',
    'CI/CD',
    'Testing (Jest/RTL)',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Image / Card */}
          <aside className="about-card">
            <div className="about-photo">
              <img src={profile} alt="Profile" />
            </div>
            <div className="about-meta">
              <h3>Chetan Allapur</h3>
              <p>Software Engineer · React/MERN</p>
            </div>
          </aside>

          {/* Right: Bio + Skills */}
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I build clean, performant web apps with a focus on developer
              experience, accessibility, and maintainable architecture. I enjoy
              shaping UI details and structuring scalable frontends.
            </p>

            <div className="skills">
              {skills.map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
