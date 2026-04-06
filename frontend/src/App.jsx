import React from 'react';
import { ArrowRight, Code, Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Desarrollada con React y FastAPI para una experiencia de usuario fluida y alto rendimiento.",
      tech: ["React", "Python", "FastAPI"]
    }
    // more projects can be added later
  ];

  return (
    <div className="app-container">
      <nav className="navbar fade-in">
        <div className="logo">Rafael.dev</div>
        <ul className="nav-links">
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <main>
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tagline">Hola, soy Rafael 👋</span>
            <h1>Full Stack Developer <br /> Senior & Arquitecto</h1>
            <p>
              Especializado en la creación de soluciones digitales elegantes y eficientes utilizando las tecnologías más avanzadas del ecosistema de React y Python.
            </p>
            <a href="#proyectos" className="cta-button">
              Ver proyectos <ArrowRight size={20} />
            </a>
          </motion.div>
        </section>

        <section id="proyectos" className="section">
          <h2 className="section-title">Proyectos Seleccionados</h2>
          <div className="grid">
            {projects.map((p, i) => (
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

        {/* Other sections like Experience and Contact could go here */}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rafael Portfolio. Producido con pasión.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <Github size={20} style={{ cursor: 'pointer' }} />
          <Linkedin size={20} style={{ cursor: 'pointer' }} />
          <Mail size={20} style={{ cursor: 'pointer' }} />
        </div>
      </footer>
    </div>
  );
}

export default App;
