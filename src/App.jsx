import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState({})
  const [fogActive, setFogActive] = useState(false)
  const [fogClosing, setFogClosing] = useState(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    
    // Activate fog gate
    setFogActive(true)
    setFogClosing(false)
    
    // Scroll after fog closes
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        window.scrollTo(0, element.offsetTop - 80)
      }
      
      // Start closing animation
      setFogClosing(true)
      
      // Remove fog gate
      setTimeout(() => {
        setFogActive(false)
        setFogClosing(false)
      }, 600)
    }, 700)
  }

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPos = window.scrollY + 200

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
          setActiveSection(section)
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 85 },
        { name: "C", level: 80 },
        { name: "C++", level: 74 },
        { name: "Rust", level: 52 },
      ]
    },
    {
      title: "Web-Fundamentals",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 78 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 72 },
      ]
    },
    {
      title: "OS",
      skills: [
        { name: "Linux", level: 88 },
        { name: "Windows", level: 85 },
        { name: "MacOS", level: 70 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 82 },
        { name: "Linux CLI tools", level: 82 },
      ]
    },
    {
      title: "Learning",
      skills: [
        { name: "OverTheWire", level: '-' },
        { name: "Basic Linux exploitation", level: '-' },
        { name: "Networking fundamentals", level: '-' },
      ]
    }
  ]

  const projects = [
    {
      name: "Placeholder1",
      role: "Development Team",
      tech: ["React.js", "React Native", "JWT", "Node.js"],
      description: [
        "Implemented mobile authentication process leveraging JWT",
        "Developed mobile routing system for seamless navigation",
        "Designed and built front-end and back-end components for Admin Dashboard",
        "Integrated push notification functionality for mobile applications"
      ]
    },
    {
      name: "Placeholder2",
      role: "Development Team",
      tech: ["Next.js", "JWT", "SSR"],
      description: [
        "Implemented secure login and sign-up process using JWT",
        "Developed a Routing system with useRouter Next.js",
        "Created Server Side Rendering Components for home Page"
      ]
    },
    {
      name: "Placeholder3",
      role: "Development Team",
      tech: ["React Native", "Tailwind", "Bootstrap"],
      description: [
        "Developed and designed the mobile home page for user-friendly access",
        "Created a routing page to enable smooth and efficient navigation",
        "Implemented a secure authentication process for login and sign-up",
        "Styled Home page, Profile Page using Tailwind and Bootstrap CSS"
      ]
    }
  ]

  return (
    <div className="app-container">
      {/* Eclipse Background */}
      <div className="eclipse-bg">
        <div className="eclipse">
          <div className="eclipse-rays" />
          <div className="eclipse-flare" />
          <div className="eclipse-ring" />
          <div className="eclipse-core" />
        </div>
      </div>

      {/* Rising ember particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={`ember-${i}`}
            className="ember-particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              opacity: 0.5 + Math.random() * 0.5
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Vignette overlay */}
      <div className="vignette-overlay" />

      {/* Dark Souls 3 Fog Gate Transition */}
      <div className={`fog-gate ${fogActive ? 'active' : ''} ${fogClosing ? 'closing' : ''}`}>
        <div className="fog-left" />
        <div className="fog-right" />
        <div className="fog-beam" />
        <div className="fog-particles">
          <div className="fog-particle" />
          <div className="fog-particle" />
          <div className="fog-particle" />
          <div className="fog-particle" />
          <div className="fog-particle" />
        </div>
        <div className="fog-emblem">
          <div className="emblem-outer">
            <div className="emblem-inner">
              <div className="emblem-core" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-content">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
            >
              {item}
              <span className={`nav-underline ${activeSection === item.toLowerCase() ? 'active' : ''}`} />
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          <div className="decorative-element">
            <div className="deco-line left" />
            <div className="deco-diamond" />
            <div className="deco-line right" />
          </div>
          
          <p className="subtitle">Cybersecurity Enthusiast</p>
          
          <h1 className="hero-title">
            <span>Shams Tabrez Ahmed</span>
          </h1>
          
          <div className="decorative-divider">
            <div className="divider-line left" />
            <div className="divider-diamond" />
            <div className="divider-line right" />
          </div>
          
          <p className="hero-description">
            A skilled Web developer mastering modern technologies, passionate about crafting 
            exceptional digital experiences with precision and creativity.
          </p>
          
          <div className="hero-buttons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-btn">
              <span>GitHub</span>
              <div className="btn-shimmer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-btn">
              <span>LinkedIn</span>
              <div className="btn-shimmer" />
            </a>
          </div>
          
          <div className="scroll-indicator">
            <a href="#about">
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <div className="divider-line left" />
        <div className="divider-diamond small" />
        <div className="divider-line right" />
      </div>

      {/* About Section */}
      <section id="about" className="content-section">
        <div className={`section-inner ${visibleSections.about ? 'visible' : ''}`}>
          <p className="section-subtitle">Background</p>
          <h2 className="section-title">About Me</h2>
          
          <div className="about-panel-single">
            <div className="about-panel-header">
              <div className="panel-corner top-left" />
              <div className="panel-corner top-right" />
              <h3 className="panel-title">— Profile —</h3>
            </div>
            
            <div className="about-grid">
              <div className="about-category-block">
                <h4 className="about-category-title">Education</h4>
                <div className="about-item">
                  <span className="about-item-main">Maths-Physics</span>
                  <span className="about-item-sub">Kendriya Vidyalaya Vayusena Nagar</span>
                  <span className="about-item-year">2022</span>
                </div>
              </div>
              
              <div className="about-category-block">
                <h4 className="about-category-title">Certification</h4>
                <div className="about-item">
                  <span className="about-item-main">B.Tech Computer Science</span>
                  <span className="about-item-sub">VIT, Mumbai</span>
                  <span className="about-item-year">2024</span>
                </div>
              </div>
              
              <div className="about-category-block">
                <h4 className="about-category-title">Soft Skills</h4>
                <div className="about-tags">
                  {['Creativity', 'Team Player', 'Critical Thinking', 'Communication'].map((skill) => (
                    <span key={skill} className="about-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="about-category-block">
                <h4 className="about-category-title">Languages</h4>
                <div className="about-tags">
                  {[
                    { lang: 'Hindi', level: 'Native' },
                    { lang: 'English', level: 'Advanced' },
                    { lang: 'Urdu', level: 'Fluent' }
                  ].map(({ lang, level }) => (
                    <span key={lang} className="about-tag">
                      {lang} <span className="about-tag-level">• {level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="about-panel-footer">
              <div className="panel-corner bottom-left" />
              <div className="panel-corner bottom-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <div className="divider-line left" />
        <div className="divider-diamond small" />
        <div className="divider-line right" />
      </div>

      {/* Skills Section */}
      <section id="skills" className="content-section">
        <div className={`section-inner ${visibleSections.skills ? 'visible' : ''}`}>
          <p className="section-subtitle">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-panel-single">
            <div className="skills-panel-header">
              <div className="panel-corner top-left" />
              <div className="panel-corner top-right" />
              <h3 className="panel-title">— Arsenal —</h3>
            </div>
            
            <div className="skills-grid">
              {skillCategories.map((category, catIndex) => (
                <div key={category.title} className="skill-category-block">
                  <h4 className="category-title">{category.title}</h4>
                  <div className="category-skills">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className="skill-bar-container"
                        style={{ animationDelay: `${(catIndex * 0.1) + (index * 0.05)}s` }}
                      >
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar-wrapper">
                          <div className="skill-bar-bg" />
                          <div 
                            className="skill-bar-fill"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="bar-glow" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="skills-panel-footer">
              <div className="panel-corner bottom-left" />
              <div className="panel-corner bottom-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <div className="divider-line left" />
        <div className="divider-diamond small" />
        <div className="divider-line right" />
      </div>

      {/* Projects Section - Same panel style */}
      <section id="projects" className="content-section">
        <div className={`section-inner ${visibleSections.projects ? 'visible' : ''}`}>
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-panel-single">
            <div className="projects-panel-header">
              <div className="panel-corner top-left" />
              <div className="panel-corner top-right" />
              <h3 className="panel-title">— Conquests —</h3>
            </div>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.name} className="project-block">
                  <div className="project-header">
                    <span className="project-num">0{index + 1}</span>
                    <div className="project-title-group">
                      <h4 className="project-title">{project.name}</h4>
                      <span className="project-role-text">{project.role}</span>
                    </div>
                  </div>
                  
                  <div className="project-tags">
                    {project.tech.map(t => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                  
                  <ul className="project-list">
                    {project.description.map((item, i) => (
                      <li key={i}>
                        <span className="project-bullet">◇</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="projects-panel-footer">
              <div className="panel-corner bottom-left" />
              <div className="panel-corner bottom-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <div className="divider-line left" />
        <div className="divider-diamond small" />
        <div className="divider-line right" />
      </div>

      {/* Contact Section */}
      <section id="contact" className="content-section">
        <div className={`section-inner ${visibleSections.contact ? 'visible' : ''}`}>
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
          
          <p className="contact-tagline">Ready to collaborate on your next project</p>
          
          <div className="cards-grid two-col">
            <a href="mailto:tabrezahmed.sta33@gmail.com" className="contact-card">
              <div className="card-icon">✉</div>
              <span className="contact-label">Email</span>
              <p className="contact-value">tabrezahmed.sta33@gmail.com</p>
            </a>
            
            <a href="tel:+917559320455" className="contact-card">
              <div className="card-icon">☎</div>
              <span className="contact-label">Phone</span>
              <p className="contact-value">+91 755 932 0455</p>
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/seucra" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="social-divider">◇</span>
            <a href="https://linkedin.com/in/s-t-ahmed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-deco">
          <div className="footer-line" />
          <div className="footer-diamond" />
          <div className="footer-line" />
        </div>
        <p className="footer-quote">"Rise, Tarnished, and be guided by grace"</p>
        <p className="footer-copyright">Shams Tabrez Ahmed © 2026</p>
      </footer>
    </div>
  )
}

export default App
