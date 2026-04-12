import React, { useState } from "react";
import { ArrowRight, Code, Download, Mail, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const experience = [
    {
      title: "Barkeeper Chief - Strozzi's",
      description: "Mar. 2025 - Sep. 2025",
      tech: [
        "Supervise and coordinate the bar team, ensuring quality and consistency in beverage preparation.",
        "Design and update the cocktail menu, incorporating trends and high-end standards.",
        "Manage inventory, purchases, and suppliers, optimizing costs and minimizing waste.",
        "Train bar staff in techniques, recipes, and premium customer service.",
        "Ensure a luxury experience for customers by overseeing presentation, service, and adherence to excellence protocols.",
      ],
    },
    {
      title: "Barkeeper - Churrasco",
      description: "Nov. 2023 - Feb. 2025",
      tech: [
        "Prepare and serve high-quality cocktails and beverages, following recipes and establishment standards",
        "Maintain a clean, organized, and well-equipped bar area, ensuring impeccable presentation.",
        "Advise customers on drink selections, providing personalized recommendations based on preferences and trends.",
        "Manage inventory of liquors, mixers, and garnishes, controlling stock and minimizing waste.",
        "Ensure cordial and efficient service, creating a luxury experience through speed, accuracy, and attention to detail",
      ],
    },
    {
      title:
        "Professor of Piloshophy, Philology and Literature - Instituto Hipócrates. Zaragoza",
      description: "Sep. 2022 - Jul. 2023",
      tech: [
        "Patient Assessment and Intake – Conduct initial evaluations to identify the physical, psychological, and social needs of patients entering the program.",
        "Individual and Group Counseling – Provide emotional and psychological support through individual therapy sessions and group workshops focused on recovery.",
        "Treatment Planning and Coordination – Collaborate with medical staff and multidisciplinary teams to design personalized treatment plans for each patient.",
        "Crisis Intervention and Relapse Prevention – Support patients during critical moments, offering strategies to manage cravings and prevent relapse.",
        "Progress Monitoring and Reporting – Regularly track patient progress, adapt treatment approaches as needed, and maintain accurate, confidential records.",
      ],
    },
    {
      title:
        "Professor of Piloshophy, Philology and Literature - I.E.S Rodanas",
      description: "Oct. 2020 - Jul. 2022 ",
      tech: [
        "Taught secondary school classes, adapting content to different learning levels.",
        "Provided academic support and individualized monitoring for students with difficulties.",
        "Promoted students’ social, emotional, and behavioral skills.",
        "Developed and implemented innovative and participatory teaching methodologies.",
        "Collaborated with the educational team and families to ensure student well-being and progress.",
      ],
    },
    {
      title:
        "Professor of Piloshophy, Philology and Literature - Centro Manzanares",
      description: "Feb. 2017 - Ago. 2018",
      tech: [
        "Cultural and Social Integration Programs – Organize and deliver workshops and activities to help individuals adapt to local customs, language, and social norms.",
        "Individual Counseling and Support – Provide emotional, psychological, and social guidance to people facing adaptation challenges or social exclusion.",
        "Community Outreach and Networking – Collaborate with local institutions, NGOs, and social services to improve resources and opportunities for participants",
        "Skills Development and Education – Design and facilitate training sessions focused on language learning, job readiness, or intercultural communication.",
        "Monitoring and Evaluation – Assess the progress of participants and adapt intervention strategies to better meet their personal and cultural integration needs.",
      ],
    },
    {
      title: "Volunteer - Centro De Acogida San Isidro",
      description: "Mar. 2015 - Jun. 2017",
      tech: [
        "Initial Assessment and Support – Conduct intake interviews to evaluate the basic, emotional, and social needs of each individual.",
        "Emotional and Psychological Assistance – Provide psychological support and counseling to foster emotional stability and social integration",
        "Coordination with Social Services – Collaborate with social, health, and educational services to ensure comprehensive care for all residents",
        "Integration and Skills Development Programs – Organize workshops and activities to promote autonomy, language learning, and cultural adaptation.",
        "Monitoring and Case Management – Track each individual’s progress and adapt intervention plans according to their needs and development.",
      ],
    },
  ];

  const education = [
    {
      title: "Graduate in Philosophy",
      description: "Universidad Complutense de Madrid - 2011 - 2016",
      tech: [
        "In-depth knowledge of the history of philosophical thought.",
        "Development of critical and analytical skills for complex texts.",
        "Study of ethical, political, and social foundations.",
        "Ability to formulate clear and coherent arguments.",
        "Specialized in philosophy of language and logic.",
      ],
    },
    {
      title: "Graduate in Hispanic Philology",
      description: "Universidad Complutense de Madrid - 2011 - 2016",
      tech: [
        "In-depth knowledge of Spanish language and literature.",
        "Advanced skills in critical reading and textual analysis.",
        "Comparative study of literary movements.",
        "Specialization in world literature and comparative interpretation.",
      ],
    },
    {
      title: "Course in Behavioral Psychology",
      description: "Universidad Complutense de Madrid - 2013",
      tech: [
        "Knowledge of fundamental principles of human behavior.",
        "Analyzed behavioral patterns and influencing factors.",
        "Skills for observation, assessment, and intervention.",
      ],
    },
    {
      title: "Course in psychology of addiction",
      description: "Universidad de Zaragoza - 2018 - 2019",
      tech: [
        "Specialized knowledge of psychological mechanisms of addictions.",
        "Identified and analyzed risk factors and patterns.",
        "Applied evidence-based therapeutic strategies.",
      ],
    },
    {
      title: "Master's Degree in Education and Guidance",
      description: "Universidad de Zaragoza - 2019 - 2020",
      tech: [
        "Advanced knowledge of pedagogy applied to secondary teaching.",
        "Developed skills for educational programs and guidance.",
        "Designed intervention strategies for learning improvement.",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const CollapsibleItem = ({ item, index, sectionId }) => {
    const isOpen = activeAccordion === `${sectionId}-${index}`;
    return (
      <div className="collapsible-item">
        <div 
          className="collapsible-header" 
          onClick={() => toggleAccordion(`${sectionId}-${index}`)}
        >
          <div>
            <h3>{item.title}</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>{item.description}</p>
          </div>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="collapsible-content"
            >
              <ul className="tech-list">
                {item.tech.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Hero Banner with background image */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-container">
            <img
              src="/assets/Rafa-Photo.jpeg"
              alt="Rafael Ortiz"
              className="profile-img"
            />
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Ortiz Advisory</h1>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '30px' }}>
            "Knowledge that does not lead to action is useless." <br/>— Plato
          </p>
          <button className="cta-button" onClick={() => setIsModalOpen(true)}>
            About Me
          </button>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky-nav">
        <a href="#experience" className="nav-btn">Experience</a>
        <a href="#education" className="nav-btn">Education</a>
        <a href="#psicologica" className="nav-btn">Ayuda Psicológica</a>
        <a href="#laboral" className="nav-btn">Asesoramiento Laboral</a>
      </nav>

      {/* Sections */}
      <main>
        {/* Experience Banner (Grey) */}
        <section id="experience" className="banner-grey">
          <h2 className="section-title">Experience</h2>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {experience.map((item, i) => (
              <CollapsibleItem key={i} item={item} index={i} sectionId="exp" />
            ))}
          </div>
        </section>

        {/* Education Banner (Grey) */}
        <section id="education" className="banner-grey" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 className="section-title">Education</h2>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {education.map((item, i) => (
              <CollapsibleItem key={i} item={item} index={i} sectionId="edu" />
            ))}
          </div>
        </section>

        {/* Placeholder: Ayuda Psicológica (Now Grey) */}
        <section id="psicologica" className="banner-grey" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 className="section-title">Ayuda Psicológica</h2>
          <div className="collapsible-item" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: '#fff' }}>
             <div className="collapsible-header" style={{ justifyContent: 'center' }}>
                <p>Sección en desarrollo. Próximamente ofreceremos servicios de apoyo psicológico especializado.</p>
             </div>
          </div>
        </section>

        {/* Placeholder: Asesoramiento Laboral (Now Grey) */}
        <section id="laboral" className="banner-grey" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 className="section-title">Asesoramiento Laboral</h2>
          <div className="collapsible-item" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: '#fff' }}>
             <div className="collapsible-header" style={{ justifyContent: 'center' }}>
                <p>Sección en desarrollo. Próximamente ofreceremos servicios de asesoramiento y orientación laboral.</p>
             </div>
          </div>
        </section>
      </main>

      {/* About Me Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
              <h2>About Me</h2>
              <div style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>
                <p>
                  Welcome to Ortiz Advisory. I am Rafael Ortiz, a professional dedicated to philosophical inquiry, 
                  psychological understanding, and educational excellence.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  With a background in Philosophy, Philology, and Behavioral Psychology, I bridge the gap 
                  between theoretical knowledge and practical action. My mission is to provide meaningful 
                  guidance in both personal and professional spheres.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="footer" style={{ background: 'var(--bg-color)', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Rafael Ortiz Larios - Ortiz Advisory</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "1.5rem" }}>
          <a href="https://www.linkedin.com/in/rafael-ortiz-larios-a83947398/" target="_blank" rel="noopener noreferrer" className="nav-btn" style={{ padding: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:info@ortizadvisory.ch" className="nav-btn" style={{ padding: '8px' }}>
            <Mail size={20} />
          </a>
          <a href="/Lebenslauf. Rf.pdf" download className="nav-btn" style={{ padding: '8px' }}>
            <Download size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
