import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ProjectBanner from './ProjectBanner';
import '../css/FeaturedProjects.css';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, user authentication, cart functionality, and payment integration.',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern UI/UX design, smooth animations, and dynamic content management.',
      category: 'Front-end Development',
      technologies: ['React', 'CSS3', 'JavaScript', 'AOS']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
      category: 'Full Stack',
      technologies: ['React', 'Firebase', 'Redux', 'Material UI']
    }
  ];

  return (
    <div className="featured-projects-section">
      <div className="featured-projects-container">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
          Here are some of my recent projects showcasing my skills and expertise.
        </p>
        
        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <div className="featured-project-card" key={project.id} data-aos="fade-up" data-aos-delay={project.id * 100}>
              <div className="project-banner-container">
                <ProjectBanner 
                  title={project.title}
                  category={project.category}
                  technologies={project.technologies}
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-projects" data-aos="fade-up">
          <Link to="/portfolio" className="view-all-link">
            View All Projects <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
