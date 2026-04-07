import React from 'react';
import { ArrowRight, Code, Download, Mail} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const experience = [
    {
      title: "Portfolio Personal",
      description: "Gestión de cosas... ",
      tech: ["Comprensión", "Análisis", "Dedicación"]
    },
    {
      title: "Gestión",
      description: "Breve descripción",
      tech: ["Cosa", "Cosa", "Cosa"]
    },
    {
      title: "Gestión",
      description: "Breve descripción",
      tech: ["Cosa", "Cosa", "Cosa"]
    },
    {
      title: "Gestión",
      description: "Breve descripción",
      tech: ["Cosa", "Cosa", "Cosa"]
    }

  ];

  const education = [
    {
      title: "Grado en...",
      description: "Gestión de cosas... ",
      tech: ["Comprensión", "Análisis", "Dedicación"]
    },
    {
      title: "Gestión",
      description: "Breve descripción",
      tech: ["Cosa", "Cosa", "Cosa"]
    },
    {
      title: "Gestión",
      description: "Breve descripción",
      tech: ["Cosa", "Cosa", "Cosa"]
    },
    {
      title: "Gestión",
      description: "Breve descripción",
      tech: ["Cosa", "Cosa", "Cosa"]
    }
  ]

  return (
    <div className="app-container">
      <nav className="navbar fade-in">
        <div className="logo">Ortiz Advisory </div>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#oferta">Oferta</a></li>
          <li><a href="#contacto">Contact</a></li>
          
        </ul>
      </nav>

      <main>
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-container">
              <img src="/assets/Rafa-Photo.jpeg" alt="Mr Ortiz" className="profile-img" />
            </div>
            <span className="project-card">Hi I'm Mr Ortiz </span>
            <h1 style={{marginTop:"20px"}}>Philosopher <br /> Gestor de cosas</h1>
            <p>
              Especializado en la gestión ...
            </p>
            <a href="#experience" className="cta-button">
              Ver algo... <ArrowRight size={20} />
            </a>
          </motion.div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Exprience</h2>
          <div className="grid">
            {experience.map((p, i) => (
              <motion.div
                key={i}
                className="project-card"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>
                  <Code size={24} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tech.map((t, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <div className="grid">
            {education.map((p, i) => (
              <motion.div
                key={i}
                className="project-card"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>
                  <Code size={24} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.tech.map((t, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rafael Ortiz Larios Portfolio. </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          <Mail size={20} style={{ cursor: 'pointer' }} />
          <Download size={20} style={{ cursor: 'pointer'}}/>
        </div>
      </footer>
    </div>
  );
}

export default App;
