import React, { useState } from 'react';
import '../css/Portfolio.css';
import LivePreview from '../component/LivePreview';
import ProjectBanner from '../component/ProjectBanner';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'Eye Tracking Mouse',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // fallback AI/eye image
      description: 'A Python-based AI system that allows users to control mouse movements using only eye gaze, with smooth cursor handling and click functionality.',
      link: 'https://github.com/02falgun/Eye_Tracking_Mouse',
      note: 'Built to assist differently-abled users and tech demos',
      technologies: ['Python', 'OpenCV', 'pyautogui', 'dlib']
    },    {
      id: 2,
      title: 'So_journ – A Travel Companion',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // scenic travel image
      description: 'An innovative travel app tailored for Jammu & Kashmir, offering AI-driven itinerary recommendations, offline maps, local bookings, safety alerts, and cultural guides.',
      link: 'https://github.com/02falgun/So_journ',
      note: 'Designed to enhance local tourism and support safer, smarter travel',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Firebase']
    },    {
      id: 3,
      title: 'QuizQuest – The Ultimate Quiz Game',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', // quiz/gamified image
      description: 'An engaging web-based quiz platform with timed questions, scoring logic, and instant feedback, designed for learning and fun.',
      link: 'https://github.com/02falgun/QuizQuest-',
      note: 'Built for students and casual users to test their general knowledge in an interactive way',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Student-Admin Portal',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // educational/admin dashboard image
      description: 'A full-stack web portal enabling students and admins to manage academic records, announcements, logins, and more in a secure interface.',
      link: 'https://github.com/02falgun/Student-Admin-Portal',
      note: 'Simplifies student data management with a clean, functional UI',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },    {
      id: 5,
      title: 'Data Structures Implementation',
      category: 'dsa',
      image: 'https://repository-images.githubusercontent.com/322271904/92f4cc80-4243-11eb-9e97-a71b32a4f82e',
      description: 'A comprehensive collection of data structures implementations including linked lists, trees, and graphs.',
      link: 'https://github.com/karanveerthakur1122/dsa-implementations',
      technologies: ['Java', 'Data Structures', 'Algorithms', 'Problem Solving']
    }
  ];

  // Filter projects based on category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <motion.div className="portfolio-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="portfolio-header" data-aos="fade-down" data-aos-duration="800"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-description">
          Check out some of my recent projects and works
        </p>
        <div className="portfolio-filter" data-aos="fade-up" data-aos-delay="200">
          {['all', 'react', 'java', 'dsa', 'web'].map((cat) => (
            <motion.button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.08, background: 'linear-gradient(90deg, #00eaff 0%, #007bff 100%)', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <motion.div key={project.id} className="project-container" data-aos="fade-up" data-aos-delay={100 * (index + 1)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 32px #00eaff55' }}
          >
            <div className={`portfolio-item ${project.livePreview ? 'has-preview' : ''} futuristic-glow`}>
              <div className="portfolio-image">
                <ProjectBanner 
                  title={project.title}
                  category={project.category}
                  technologies={project.technologies}
                />
                {project.livePreview && <div className="live-badge">Live Demo</div>}
              </div>
              <div className="portfolio-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.note && (
                  <div className="project-note">{project.note}</div>
                )}
                <div className="project-buttons">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View GitHub
                  </a>
                  {project.livePreview && (
                    <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      <i className="fas fa-globe"></i> Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
            {project.livePreview && (
              <div className="project-live-preview">
                <LivePreview title={`${project.title} - Live Preview`} url={project.livePreview} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;