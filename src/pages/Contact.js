import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../css/Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isSubmitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend service here
    
    // Simulate form submission success for demonstration
    setFormStatus({
      message: 'Thank you! Your message has been sent successfully.',
      isSuccess: true,
      isSubmitted: true
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <motion.div className="contact-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="contact-header" data-aos="fade-down" data-aos-duration="800"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Contact Me</h2>
        <p className="section-description">
          Let's connect and discuss opportunities
        </p>
      </motion.div>
      
      <div className="contact-content">
        <motion.div className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
          }}
        >
          <h3 className="info-title">Let's get in touch</h3>
          <p className="info-description">
            I'm always interested in connecting with fellow students, faculty, or potential employers for internships, projects, 
            or collaborative learning opportunities. Feel free to reach out with any questions or just to say hello!
          </p>
          
          <div className="contact-details">
            <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+91 9798398911</p>
              </div>
            </div>
            <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>kavyathakur449@gmail.com</p>
              </div>
            </div>
          </div>
          
          <motion.div className="social-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
            }}
          >
            <a href="https://linkedin.com/in/kavya-kumar-thakur" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="https://github.com/02falgun" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </motion.div>
        </motion.div>
        <motion.div className="contact-form-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
          }}
        >
          <h3 className="form-title">Send me a message</h3>
          
          {formStatus.isSubmitted && (
            <motion.div className={`form-message ${formStatus.isSuccess ? 'success' : 'error'}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {formStatus.message}
            </motion.div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            
            <motion.button type="submit" className="btn-submit"
              whileHover={{ scale: 1.08, background: 'linear-gradient(90deg, #00eaff 0%, #007bff 100%)', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
            >Send Message</motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
