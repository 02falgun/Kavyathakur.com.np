import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/Home.css';
import { ThemeContext } from '../App';
// Import components
import ToolsGrid from '../component/ToolsGrid';
import FeaturedProjects from '../component/FeaturedProjects';
import Testimonials from '../component/Testimonials';
// Import images
import pic1 from '../files/pic1.png';
import pic2 from '../files/pic2.png';
import pic3 from '../files/pic3.png';

const Home = ({ isDarkMode }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [pic1, pic2, pic3];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };  return (
    <motion.div className={`home-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="slider-container">
        <motion.div className="slide-content" data-aos="fade-right" data-aos-delay="200"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="slide-title">
            <span>Hi, I'm</span>
            <span className="highlight">Kavya Kumar Thakur</span>
          </h1>
          <motion.h2 className="slide-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>CS Student & Programmer</motion.h2>
          <motion.p className="slide-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            Passionate B.Tech Computer Science & Engineering student, crafting user-centric experiences with code.
          </motion.p>
          <div className="slide-buttons">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link to="/portfolio" className="btn-primary">View My Work</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-secondary">Contact Me</Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="slide-image-container" data-aos="fade-left" data-aos-delay="400"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="slide-image" whileHover={{ scale: 1.03, boxShadow: "0 0 40px #00eaff55" }}>
            <img 
              src={images[currentImage]} 
              alt={`Kavya Kumar Thakur - Portfolio ${currentImage + 1}`} 
              className="home-image futuristic-glow"
            />
            <div className="image-overlay"></div>
            <div className="image-controls">
              <button className="image-nav prev" onClick={goToPrevImage}>
                &lt;
              </button>
              <button className="image-nav next" onClick={goToNextImage}>
                &gt;
              </button>
            </div>
            <div className="image-indicators">
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>      {/* Home About Section */}
      <div className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-image" data-aos="fade-right" data-aos-duration="1000">
            <div className="profile-ring"></div>
            <div className="profile-image">
              <img src={pic2} alt="Kavya Kumar Thakur" />
            </div>
          </div>
          
          <div className="home-about-content" data-aos="fade-left" data-aos-duration="1000">            <h2 className="home-section-title">About Me</h2>
            <h3 className="home-about-subtitle">B.Tech Computer Science Student</h3>
            
            <p className="home-about-description">
              Hi, I’m Kavya Kumar Thakur, a B.Tech Computer Science and Engineering student with a strong foundation in object-oriented programming and software development.
              I’m passionate about building efficient, user-focused applications and continuously improving my skills through real-world projects and self-driven learning.
              My goal is to create technology solutions that enhance user experiences and bridge the gap between innovation and usability.
              Explore my portfolio to see projects that reflect my commitment to coding excellence and thoughtful design.
            </p>
              <div className="home-about-info">
              <div className="home-info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Kavya Kumar Thakur</span>
              </div>
              <div className="home-info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">kavyathakur449@gmail.com</span>
              </div>
              <div className="home-info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Greater Noida, Utter Pradesh, India</span>
              </div>
            </div>              <div className="home-skill-highlights">
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="100">Java</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="200">HTML/CSS</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="300">JavaScript</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="400">React</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="500">DSA</span>
              <span className="skill-tag" data-aos="zoom-in" data-aos-delay="600">Python</span>
            </div>              <div className="home-about-buttons">
              <Link to="/about" className="btn-more-about">More About Me</Link>
              <a href="/files/resume.pdf" download className="btn-download-resume">
                <FaDownload className="download-icon" /> Download CV
              </a>
            </div></div>
        </div>      </div>
      
      {/* Tools I use section */}
      <ToolsGrid />
      
      {/* Featured Projects section */}      <FeaturedProjects />      
      {/* Client Testimonials section */}
      <Testimonials />
    </motion.div>
  );
};

export default Home;
