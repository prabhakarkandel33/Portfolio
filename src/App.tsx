import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const skills = [
    {
      name: 'Backend Development',
      description:
        'Python, Django, Docker - Building robust server infrastructure and data management systems',
      icon: '💻',
      level: 'expert',
    },
    {
      name: 'Web Development',
      description:
        'HTML, CSS, JavaScript, Git - Creating dynamic web applications and user interfaces',
      icon: '🌐',
      level: 'expert',
    },
    {
      name: 'Frontend Development',
      description: 'React, PHP - Interactive user interfaces and database integration',
      icon: '⚛️',
      level: 'advanced',
    },
    {
      name: 'Machine Learning',
      description:
        'TensorFlow, Pandas, NumPy, Scientific Computing - Data analysis, predictive modeling, and intelligent systems implementation',
      icon: '🤖',
      level: 'expert',
    },
    {
      name: 'Project Management',
      description:
        'Jira, Agile Methodologies - Leadership and planning for coordinating development projects and resource management',
      icon: '📊',
      level: 'advanced',
    },
    {
      name: 'System Administration',
      description:
        'Linux, Shell Scripting, Bash - Server management, automation, and system optimization',
      icon: '🔧',
      level: 'advanced',
    },
  ];

  const handleProjectToggle = (projectKey: string) => {
    setExpandedProjects((prev) => ({ ...prev, [projectKey]: !prev[projectKey] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      document.querySelectorAll('.about, .skills, .projects-overview, .contact').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('animate');
        }
      });
    };

    // Make hero and all sections visible immediately
    const heroSection = document.querySelector('.hero');
    const skillsSection = document.querySelector('.skills');
    const projectsSection = document.querySelector('.projects-overview');
    if (heroSection) {
      heroSection.classList.add('animate');
    }
    if (skillsSection) {
      skillsSection.classList.add('animate');
    }
    if (projectsSection) {
      projectsSection.classList.add('animate');
    }

    // Initial check for sections already in view
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createParticles = () => {
    const formation = Array.from({ length: 6 }, (_, i) => (
      <div
        key={`code-${i}`}
        className="particle code-formation"
        style={{
          left: '-50px',
          top: `${15 + i * 12}%`,
          animationDelay: `${i * 1.5}s`,
          animationDuration: '6s'
        }}
      >
        <span className="code-text">{['#','()','[]','{}','$','<!--'][i % 6]}</span>
      </div>
    ));

    return formation;
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="portfolio">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-brand">Prabhakar Kandel</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        {/* Floating Particles - Only in Hero */}
        <div className="floating-particles">{createParticles()}</div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Prabhakar Kandel</span>
          </h1>
          <p className="hero-subtitle">Backend Developer | Machine Learning Enthusiast</p>
          <p className="hero-description">
            Final semester computer engineering student with a passion for machine learning and
            proficiency in backend development and project management.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              💾 VIEW PROJECTS
            </a>
            <a href="#skills" className="btn-secondary">
              💻 VIEW SKILLS
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about background">
        <div className="container">
          <h2 className="section-title">{'<About />'}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                A 22-year-old Computer Engineering student specializing in backend development,
                database management, and machine learning technologies.
              </p>
              <p>
                Focused on building scalable software solutions and exploring emerging technologies.
                Actively contributing to open-source projects and continuous learning.
              </p>
            </div>
          </div>
          
          <div className="education-section">
            <h3 className="education-title">{'// Education'}</h3>
            <div className="education-card">
              <img src="/my_image.png" alt="Sagarmatha Engineering College" className="college-logo" />
              <div className="education-info">
                <h4 className="degree">Bachelor of Engineering - Computer Engineering</h4>
                <p className="college-name">Sagarmatha Engineering College</p>
                <p className="college-location">📍 Sanepa, Lalitpur</p>
                <p className="affiliation">🎓 Tribhuvan University (T.U.) Affiliated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">{'<Skills />'}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-card ${skill.level}`}>
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-level">
                  {skill.level === 'expert' ? '███████████' : '████████░░░'}
                </div>
              </div>
            ))}
          </div>

          <div className="tech-stack">
            <h3 className="tech-title">{'// Tech Stack'}</h3>
            <div className="tech-tags">
              <span className="tech-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                </svg>
                Python
              </span>
              <span className="tech-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z"/>
                </svg>
                Django
              </span>
              <span className="tech-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
                </svg>
                Docker
              </span>
              <span className="tech-tag">🌐 HTML</span>
              <span className="tech-tag">🎨 CSS</span>
              <span className="tech-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                </svg>
                JavaScript
              </span>
              <span className="tech-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                </svg>
                Git
              </span>
              <span className="tech-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
                React
              </span>
              <span className="tech-tag">🐘 PHP</span>
              <span className="tech-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603z"/>
                </svg>
                TensorFlow
              </span>
              <span className="tech-tag">📊 Pandas</span>
              <span className="tech-tag">🔢 NumPy</span>
              <span className="tech-tag">🐧 Linux</span>
              <span className="tech-tag">⚡ Bash</span>
              <span className="tech-tag">C++</span>
              <span className="tech-tag">C</span>
              <span className="tech-tag">📋 Jira</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-overview">
        <div className="container">
          <h2 className="section-title">{'<Projects />'}</h2>
          <p className="section-description">
            Explore my portfolio of real-world applications and innovative solutions
          </p>

          <div className="project-list">
                    <div className="project-item">
                      <button
                        className={`project-header ${expandedProjects['aaladoc'] ? 'expanded' : ''}`}
                        onClick={() => handleProjectToggle('aaladoc')}
                        type="button"
                      >
                        <span className="project-icon">🏥</span>
                        <span className="project-name">Hospital Management Site - Aaladoc</span>
                        <span className="project-status completed">Completed</span>
                        <span className="project-arrow">{expandedProjects['aaladoc'] ? '▼' : '▶'}</span>
                      </button>
                      {expandedProjects['aaladoc'] && (
                        <div className="project-details">
                          <div className="tech-used">// Tech Stack: Django</div>
                          <p className="project-description">
                            Handled appointment booking, real-time chat, task queuing, async operations
                            and caching.
                          </p>
                          <div className="project-links">
                            <span className="btn btn-secondary">
                              📱 Available on Play Store (Aaladoc)
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="project-item">
                      <button
                        className={`project-header ${expandedProjects['roommate-finder'] ? 'expanded' : ''}`}
                        onClick={() => handleProjectToggle('roommate-finder')}
                        type="button"
                      >
                        <span className="project-icon">🏠</span>
                        <span className="project-name">Roommate Finder Application</span>
                        <span className="project-status completed">Completed</span>
                        <span className="project-arrow">
                          {expandedProjects['roommate-finder'] ? '▼' : '▶'}
                        </span>
                      </button>
                      {expandedProjects['roommate-finder'] && (
                        <div className="project-details">
                          <div className="tech-used">// Tech Stack: Django</div>
                          <p className="project-description">
                            Recommendation system + real-time chat based on personal preferences.
                          </p>
                          <div className="project-links">
                            <a
                              href="https://github.com/prabhakarkandel33/RoomateFinder"
                              className="btn btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {'</> View Code'}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="project-item">
                      <button
                        className={`project-header ${expandedProjects['nepali-poems'] ? 'expanded' : ''}`}
                        onClick={() => handleProjectToggle('nepali-poems')}
                        type="button"
                      >
                        <span className="project-icon">📜</span>
                        <span className="project-name">Nepali Poem Generator</span>
                        <span className="project-status completed">Completed</span>
                        <span className="project-arrow">
                          {expandedProjects['nepali-poems'] ? '▼' : '▶'}
                        </span>
                      </button>
                      {expandedProjects['nepali-poems'] && (
                        <div className="project-details">
                          <div className="tech-used">// Tech Stack: Machine Learning (Transformer)</div>
                          <p className="project-description">
                            A project which learns to generate Nepali poems from authentic examples
                          </p>
                          <div className="project-links">
                            <a
                              href="https://github.com/prabhakarkandel33/NepaliPoemGenerator"
                              className="btn btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {'</> View Code'}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="project-item">
                      <button
                        className={`project-header ${expandedProjects['wellness-app'] ? 'expanded' : ''}`}
                        onClick={() => handleProjectToggle('wellness-app')}
                        type="button"
                      >
                        <span className="project-icon">💪</span>
                        <span className="project-name">Wellness Application</span>
                        <span className="project-status ongoing">Ongoing</span>
                        <span className="project-arrow">
                          {expandedProjects['wellness-app'] ? '▼' : '▶'}
                        </span>
                      </button>
                      {expandedProjects['wellness-app'] && (
                        <div className="project-details">
                          <div className="tech-used">
                            // Tech Stack: Django, Reinforcement Learning, RAG
                          </div>
                          <p className="project-description">
                            Personalized training regimes using RL for behavior adaptation + RAG
                            chatbot + Django REST API.
                          </p>
                          <div className="project-links">
                            <a
                              href="https://github.com/prabhakarkandel33/WellnessApplication"
                              className="btn btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {'</> View Code'}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
        </div>
      </section>

     
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">{'<Contact />'}</h2>
          <p className="contact-description">
            Let's connect and build something amazing together!
          </p>
          
          <div className="social-links">
            <h3 className="social-title">// Get in Touch</h3>
            <div className="social-grid">
              <div className="social-link email">
                <span className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <div className="social-info">
                  <span className="social-text">Email</span>
                  <span className="social-handle">kandelpravakar@gmail.com</span>
                </div>
              </div>
              <div className="social-link linkedin">
                <span className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </span>
                <div className="social-info">
                  <span className="social-text">LinkedIn</span>
                  <span className="social-handle">prabhakar-kandel</span>
                </div>
              </div>
              <div className="social-link github">
                <span className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </span>
                <div className="social-info">
                  <span className="social-text">GitHub</span>
                  <span className="social-handle">@prabhakarkandel33</span>
                </div>
              </div>
              <div className="social-link facebook">
                <span className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                <div className="social-info">
                  <span className="social-text">Facebook</span>
                  <span className="social-handle">@prarbhakar.kandel</span>
                </div>
              </div>
              <div className="social-link instagram">
                <span className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <div className="social-info">
                  <span className="social-text">Instagram</span>
                  <span className="social-handle">@prarbhakar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Prabhakar Kandel</p>
        </div>
      </footer>
    </div>
  );
}

export default App;