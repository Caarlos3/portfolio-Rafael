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
      title: "Graduate in Philosophy",
      description: "Universidad Complutense de Madrid - Sep. 2011 - Sep. 2016",
      tech: ["In-depth knowledge of the history of philosophical thought.", 
             "Development of critical and analytical skills for complex texts.", 
             "Study of ethical, political, and social foundations.",
             "Ability to formulate clear and coherent arguments.",
             "Exploration of the relationship between thought, language, and reality.",
             "Specialized in philosophy of language and logic, with a focus on human behavior based on language use."]
    },
    {
      title: "Graduate in Hispanic Philology",
      description: "Universidad Complutense de Madrid - Sep. 2011 - Jul. 2016",
      tech: ["In-depth knowledge of Spanish language and literature, including analysis of classical and contemporary texts.", 
             "Development of advanced skills in critical reading, interpretation, and textual analysis.", 
             "Comparative study of literary movements and genres in world literature.",
             "Ability to research, synthesize, and communicate literary ideas rigorously and coherently.",
             "Application of theoretical methodologies for literary analysis in diverse cultural contexts.",
             "Specialization in world literature, with an emphasis on comparative interpretation of texts and international literary trends."]
    },
    {
      title: "Course in Behavioral Psychology",
      description: "Universidad Complutense de Madrid - Feb. 2013 - Jul. 2013",
      tech: ["Acquired knowledge of fundamental principles and theories of human behavior.", 
             "Analyzed behavioral patterns and the factors influencing them in various contexts.", 
             "Developed skills for observation, assessment, and intervention in specific behaviors.",
             "Applied evidence-based techniques and strategies to modify or reinforce behaviors.",
             "Understood the relationship between stimuli, responses, and learning processes in human behavior."]
    },
    {
      title: "Course in psychology of addiction",
      description: "Universidad de Zaragoza - Sep. 2018 - Mar. 2019 ",
      tech: ["Acquired specialized knowledge of the psychological and behavioral mechanisms underlying addictions.", 
             "Identified and analyzed risk factors, early warning signs, and behavioral patterns associated with dependency.", 
             "Developed skills for assessing and monitoring patients with addictions, considering emotional and social aspects.",
             "Applied evidence-based therapeutic strategies and intervention techniques for addiction prevention and treatment.",
             "Gained a comprehensive understanding of the impact of addiction on behavior, family, and social environments, promoting a humanized and ethical approach."]
    },
    {
      title: "Master's Degree in Secondary Education and Guidance.",
      description: "Universidad de Zaragoza - Sep. 2019 - Jul. 2020  ",
      tech: ["Acquired advanced knowledge of educational theories and pedagogy applied to secondary teaching.", 
             "Developed skills for planning, implementing, and evaluating educational programs.", 
             "Trained in academic and personal guidance, providing comprehensive support to students.",
             "Designed intervention strategies to enhance learning, motivation, and students’ emotional wellbeing.",
             "Applied educational management techniques and collaborated with teaching teams and families to promote an inclusive and effective school environment."]
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
