import { useState } from 'react';

import './App.css';

const GITHUB_URL = 'https://github.com/prabhakarkandel33/';

const skills = [
  {
    group: 'Backend',
    items: ['Python', 'Django', 'PHP', 'Git'],
  },
  {
    group: 'Machine Learning',
    items: ['TensorFlow', 'Pandas', 'NumPy', 'RAG'],
  },
  {
    group: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    group: 'Systems & Tools',
    items: ['Linux', 'Bash', 'Docker', 'C++', 'C', 'Jira'],
  },
];

const projects = [
  {
    key: 'aaladoc',
    name: 'Aaladoc — Hospital management platform',
    stack: 'Django',
    status: 'Deployed',
    description:
      'Appointment booking, real-time chat, task queuing, async operations and caching for a hospital in production.',
    url: 'https://play.google.com/store/apps/details?id=com.aaladoc.prod',
    linkLabel: 'View on Play Store',
  },
  {
    key: 'wellness-app',
    name: 'Wellness Application',
    stack: 'Django · RL · RAG',
    status: 'Completed',
    description:
      'Personalized training plans that adapt with reinforcement learning, a RAG chatbot, and a Django REST API.',
    url: 'https://github.com/prabhakarkandel33/WellnessApplication',
  },
  {
    key: 'roommate-finder',
    name: 'Roommate Finder',
    stack: 'Django',
    status: 'Completed',
    description:
      'A recommendation system with real-time chat that matches students by personal preference.',
    url: 'https://github.com/prabhakarkandel33/RoomateFinder',
  },
];

const contact = [
  {
    label: 'Email',
    handle: 'kandelpravakar@gmail.com',
    url: 'mailto:kandelpravakar@gmail.com',
  },
  {
    label: 'GitHub',
    handle: 'github.com/prabhakarkandel33',
    url: GITHUB_URL,
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/prabhakar-kandel-62969a364',
    url: 'https://www.linkedin.com/in/prabhakar-kandel-62969a364/',
  },
  {
    label: 'Facebook',
    handle: 'facebook.com/prabhakar.kandel',
    url: 'https://www.facebook.com/prabhakar.kandel',
  },
  {
    label: 'Instagram',
    handle: 'instagram.com/prarbhakar',
    url: 'https://www.instagram.com/prarbhakar',
  },
];

function GitHubMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function App() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const handleProjectToggle = (projectKey: string) => {
    setExpandedProjects((prev) => ({ ...prev, [projectKey]: !prev[projectKey] }));
  };

  return (
    <div className="portfolio">
      <header className="header">
        <nav className="nav">
          <a href="#top" className="nav-brand" aria-label="Prabhakar Kandel, back to top">
            <span className="brand-dev" aria-hidden="true">
              प्र
            </span>
            Prabhakar Kandel
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-kicker">Kathmandu</p>
            <h1 className="hero-title">Prabhakar Kandel</h1>
            <p className="hero-devanagari" lang="ne">
              प्रभाकर कंडेल
            </p>
            <p className="hero-thesis">
              Full-stack AI engineer building agentic pipelines and production Django systems —
              from hospital platforms on the Play Store to apps that adapt to their users.
            </p>
            <div className="hero-actions">
              <a href={GITHUB_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <GitHubMark />
                View my work on GitHub
              </a>
              <a href="#work" className="btn btn-secondary">
                Selected projects
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-grid">
            <h2 className="section-title">About</h2>
            <div className="about-body">
              <p>
                I'm a full-stack AI engineer working across backend development and machine
                learning — Django services containerized with Docker, agentic pipelines, and
                models trained on real data.
              </p>
              <p>
                I ship projects end to end: a hospital management platform now in production, a
                wellness app whose training plans adapt with reinforcement learning, and a
                roommate-matching recommendation system.
              </p>

              <div className="education">
                <h3 className="education-label">Education</h3>
                <div className="education-card">
                  <img
                    src="/my_image.png"
                    alt="Sagarmatha Engineering College logo"
                    className="college-logo"
                  />
                  <div className="education-info">
                    <h4 className="degree">Bachelor of Engineering — Computer Engineering</h4>
                    <p className="college-name">Sagarmatha Engineering College, Sanepa</p>
                    <p className="affiliation">Graduated · Tribhuvan University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work">
          <div className="container">
            <h2 className="section-title">Work</h2>
            <p className="section-description">
              Projects I've designed and built, from production deploys to ongoing experiments.
            </p>

            <div className="work-list">
              {projects.map((project) => {
                const expanded = !!expandedProjects[project.key];
                const isComplete = project.status === 'Completed' || project.status === 'Deployed';
                return (
                  <div className="work-row" key={project.key}>
                    <button
                      className="work-toggle"
                      onClick={() => handleProjectToggle(project.key)}
                      aria-expanded={expanded}
                      type="button"
                    >
                      <span className="work-name">{project.name}</span>
                      <span className="work-stack">{project.stack}</span>
                      <span className={`work-status ${isComplete ? 'completed' : 'ongoing'}`}>
                        {project.status}
                      </span>
                      <span className="work-arrow" aria-hidden="true">
                        →
                      </span>
                    </button>
                    {expanded && (
                      <div className="work-details">
                        <p className="work-description">{project.description}</p>
                        <a
                          href={project.url}
                          className="btn btn-secondary btn-small"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.linkLabel === undefined && <GitHubMark />}
                          {project.linkLabel ?? 'View code'}
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <p className="section-description">
              The tools I reach for regularly, grouped by where I use them.
            </p>

            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-group" key={group.group}>
                  <h3 className="skill-group-title">{group.group}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-description">
              Open to collaborations and engineering conversations.
            </p>

            <div className="contact-list">
              {contact.map((item) => (
                <a className="contact-row" href={item.url} key={item.label} target="_blank" rel="noopener noreferrer">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-handle">{item.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Prabhakar Kandel</span>
          <span>Built in Kathmandu</span>
        </div>
      </footer>
    </div>
  );
}

export default App;