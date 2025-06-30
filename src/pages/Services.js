import React from 'react';
import { FaCode, FaDesktop, FaDatabase, FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import '../css/Services.css';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Java Development',
      description: 'Object-oriented programming solutions using Java with emphasis on clean, maintainable code and efficient algorithms.',
    },
    {
      id: 2,
      icon: <FaDesktop />,
      title: 'Web Development',
      description: 'Responsive websites and web applications using React and modern frontend technologies that provide a seamless user experience.',
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Efficient database schema design and implementation with SQL, focusing on performance optimization and data integrity.',
    },
    {
      id: 4,
      icon: <FaLaptopCode />,
      title: 'Data Structures & Algorithms',
      description: 'Implementation of efficient algorithms and data structures to solve complex computational problems.',
    },
    {
      id: 5,
      icon: <FaMobileAlt />,
      title: 'Mobile Application Prototyping',
      description: 'Creating functional prototypes for mobile applications with intuitive user interfaces and smooth interactions.',
    },
    {
      id: 6,
      icon: <FaChartLine />,
      title: 'Technical Project Support',
      description: 'Assistance with technical projects, including code reviews, troubleshooting, and implementation guidance.',
    },
  ];

  return (
    <motion.div className="services-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="services-header" data-aos="fade-down" data-aos-duration="800"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">My Skills & Services</h2>
        <p className="section-description">
          Technical areas I specialize in as a Computer Science student
        </p>
      </motion.div>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div className="service-card futuristic-glow" key={service.id}
            data-aos="flip-up" data-aos-delay={index * 100} data-aos-duration="800"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px #00eaff55' }}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="drop-animation"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
