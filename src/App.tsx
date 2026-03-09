import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const skills = [
    {
      name: "Backend Development",
      description: "Python, Django, Docker - Building robust server-side applications",
      icon: "⚙️",
      level: "expert"
    },
    {
      name: "Web Technologies", 
      description: "HTML, CSS, JavaScript, Git - Creating dynamic web experiences",
      icon: "🌐",
      level: "expert"
    },
    {
      name: "Frontend & Databases",
      description: "React, PHP - Developing user interfaces and database solutions", 
      icon: "💻",
      level: "intermediate"
    },
    {
      name: "Machine Learning",
      description: "Building intelligent systems and predictive models",
      icon: "🤖",
      level: "expert"
    }
  ]

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Scroll effects
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Animate sections on scroll
      const sections = document.querySelectorAll('.about, .skills, .contact')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('animate')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const createParticles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${10 + Math.random() * 5}s`
        }}
      />
    ))
  }

  if (loading) {
    return (
      <div className={`loading ${!loading ? 'fade-out' : ''}`}>
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="portfolio">
      {/* Floating Particles */}
      <div className="floating-particles">
        {createParticles()}
      </div>

      {/* Header/Navigation */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-brand">PK</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Prabhakar Kandel</span>
          </h1>
          <p className="hero-subtitle">
            Computer Engineering Student | Backend Developer | ML Enthusiast
          </p>
          <p className="hero-description">
           Final semester Computer Engineering student passionate about building robust backend systems and intelligent solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">View My Work</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a 22-year-old Computer Engineering student in my final semester, passionate about technology and innovation. My journey in computer science has led me to specialize in backend development, database management, and machine learning.
              </p>
              <p>
                I enjoy solving complex problems and building scalable solutions that make a difference. When I'm not coding, I'm exploring new technologies and contributing to open-source projects.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>22</h3>
                <p>Years Old</p>
              </div>
              <div className="stat">
                <h3>Final</h3>
                <p>Semester</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Core Skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-card ${skill.level}`}>
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-level">
                  {skill.level === 'expert' ? '⭐⭐⭐' : '⭐⭐'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="tech-stack">
            <h3 className="tech-title">Technical Skills Overview</h3>
            <div className="tech-tags">
              <span className="tech-tag">Python ⭐⭐⭐</span>
              <span className="tech-tag">Django ⭐⭐⭐</span>
              <span className="tech-tag">Docker ⭐⭐⭐</span>
              <span className="tech-tag">HTML ⭐⭐⭐</span>
              <span className="tech-tag">CSS ⭐⭐⭐</span>
              <span className="tech-tag">JavaScript ⭐⭐⭐</span>
              <span className="tech-tag">Git & Version Control ⭐⭐⭐</span>
              <span className="tech-tag">React ⭐⭐</span>
              <span className="tech-tag">PHP ⭐⭐</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!
          </p>
          
          <div className="social-links">
            <h3 className="social-title">Find me on</h3>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Prabhakar Kandel.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
