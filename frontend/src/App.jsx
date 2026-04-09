import React from 'react';
import { ArrowRight, Code, Download, Mail} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const experience = [
    {
      title: "Barkeeper Chief - Strozzi's",
      description: "Mar. 2025 - Sep. 2025",
      tech: ["Supervise and coordinate the bar team, ensuring quality and consistency in beverage preparation.", 
             "Design and update the cocktail menu, incorporating trends and high-end standards.",
             "Manage inventory, purchases, and suppliers, optimizing costs and minimizing waste.",
             "Train bar staff in techniques, recipes, and premium customer service.",
             "Ensure a luxury experience for customers by overseeing presentation, service, and adherence to excellence protocols."
            ]
    },
    {
      title: "Barkeeper - Churrasco",
      description: "Nov. 2023 - Feb. 2025",
      tech: ["Prepare and serve high-quality cocktails and beverages, following recipes and establishment standards",
             "Maintain a clean, organized, and well-equipped bar area, ensuring impeccable presentation.",
             "Advise customers on drink selections, providing personalized recommendations based on preferences and trends.",
             "Manage inventory of liquors, mixers, and garnishes, controlling stock and minimizing waste.",
             "Ensure cordial and efficient service, creating a luxury experience through speed, accuracy, and attention to detail"
            ]
    },
    {
      title: "Professor of Piloshophy, Philology and Literature - Instituto Hipócrates. Centro de desintoxicación Zaragoza",
      description: "Sep. 2022 - Jul. 2023",
      tech: ["Patient Assessment and Intake – Conduct initial evaluations to identify the physical, psychological, and social needs of patients entering the program.",
             "Individual and Group Counseling – Provide emotional and psychological support through individual therapy sessions and group workshops focused on recovery.", 
             "Treatment Planning and Coordination – Collaborate with medical staff and multidisciplinary teams to design personalized treatment plans for each patient.",
             "Crisis Intervention and Relapse Prevention – Support patients during critical moments, offering strategies to manage cravings and prevent relapse.",
             "Progress Monitoring and Reporting – Regularly track patient progress, adapt treatment approaches as needed, and maintain accurate, confidential records."]
    },
    {
      title: "Professor of Piloshophy, Philology and Literature - I.E.S Rodanas",
      description: "Oct. 2020 - Jul. 2022 ",
      tech: ["Taught secondary school classes, adapting content to different learning levels.",
             "Provided academic support and individualized monitoring for students with difficulties.",
             "Promoted students’ social, emotional, and behavioral skills.",
             "Developed and implemented innovative and participatory teaching methodologies.",
             "Collaborated with the educational team and families to ensure student well-being and progress."]
    },
    {
      title: "Professor of Piloshophy, Philology and Literature - Centro de Adaptación Cultural y Social Manzanares",
      description: "Feb. 2017 - Ago. 2018",
      tech: ["Cultural and Social Integration Programs – Organize and deliver workshops and activities to help individuals adapt to local customs, language, and social norms.",
             "Individual Counseling and Support – Provide emotional, psychological, and social guidance to people facing adaptation challenges or social exclusion.",
             "Community Outreach and Networking – Collaborate with local institutions, NGOs, and social services to improve resources and opportunities for participants",
             "Skills Development and Education – Design and facilitate training sessions focused on language learning, job readiness, or intercultural communication.",
             "Monitoring and Evaluation – Assess the progress of participants and adapt intervention strategies to better meet their personal and cultural integration needs."]
    },
    {
      title: "Volunteer - Centro De Acogida San Isidro",
      description: "Mar. 2015 - Jun. 2017",
      tech: ["Initial Assessment and Support – Conduct intake interviews to evaluate the basic, emotional, and social needs of each individual.", 
             "Emotional and Psychological Assistance – Provide psychological support and counseling to foster emotional stability and social integration", 
             "Coordination with Social Services – Collaborate with social, health, and educational services to ensure comprehensive care for all residents",
             "Integration and Skills Development Programs – Organize workshops and activities to promote autonomy, language learning, and cultural adaptation.",
             "Monitoring and Case Management – Track each individual’s progress and adapt intervention plans according to their needs and development."]
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
          <li><a href="#prestacion">Prestaciones</a></li>
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
