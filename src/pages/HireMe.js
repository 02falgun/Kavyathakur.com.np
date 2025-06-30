import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/HireMe.css';

const HireMe = () => {  // Set initial state for the form
  const [projectType, setProjectType] = useState('internship');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    duration: '',
    startDate: '',
    description: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isSubmitted: false
  });

  const handleTypeChange = (type) => {
    setProjectType(type);
  };

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
      message: 'Thank you for your opportunity! I will review and get back to you as soon as possible.',
      isSuccess: true,
      isSubmitted: true
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      duration: '',
      startDate: '',
      description: ''
    });
  };

  return (    <div className="hire-me-container">      <div className="hire-me-header" data-aos="fade-down" data-aos-duration="800">
        <h2 className="section-title">Work With Me</h2>
        <p className="section-description">
          Let's collaborate on tech projects or discuss internship opportunities
        </p>
      </div>
      
      <div className="project-types" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">        <div 
          className={`project-type ${projectType === 'internship' ? 'active' : ''}`}
          onClick={() => handleTypeChange('internship')}
          data-aos="zoom-in" data-aos-delay="100"
        >
          <h3>Internship Opportunity</h3>
          <p>For companies looking to hire interns in software development</p>
        </div>          <div 
          className={`project-type ${projectType === 'project' ? 'active' : ''}`}
          onClick={() => handleTypeChange('project')}
          data-aos="zoom-in" data-aos-delay="300"
        >
          <h3>Project Collaboration</h3>
          <p>College or open-source project partnerships</p>
        </div>
          <div 
          className={`project-type ${projectType === 'mentorship' ? 'active' : ''}`}
          onClick={() => handleTypeChange('mentorship')}
          data-aos="zoom-in" data-aos-delay="500"
        >
          <h3>Technical Mentorship</h3>
          <p>Learning guidance and code reviews for fellow students</p>
        </div>
      </div>
      
      <div className="hire-me-content">
        <div className="process-section">          <h3 className="process-title">How It Works</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Initial Connection</h4>
              <p>We'll discuss your opportunity, project scope, or mentorship needs.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Planning & Schedule</h4>
              <p>We'll agree on objectives, timeline, and communication frequency.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Execution</h4>
              <p>I'll apply my technical skills and programming knowledge to meet our goals.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>              <div className="step-number">4</div>
              <h4>Growth & Feedback</h4>
              <p>I'll provide documentation, collect feedback, and implement continuous improvements.</p>
            </div>
          </div>
        </div>
        
        <div className="hire-form-container">
          <h3 className="form-title">Submit an Opportunity</h3>
          
          {formStatus.isSubmitted && (
            <div className={`form-message ${formStatus.isSuccess ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="hire-form" onSubmit={handleSubmit}>
            <div className="form-row">
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
            </div>
            
            <div className="form-row">              <div className="form-group">
                <label htmlFor="company">Organization/Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your organization or company name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Duration</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
              <div className="form-group">
              <label htmlFor="startDate">Desired Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">              <label htmlFor="description">Opportunity Details</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Describe the opportunity, project, or mentorship needs in detail"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-submit">Submit Request</button>
          </form>
          
          <p className="hire-cta">
            Want to discuss first? <Link to="/contact">Contact me</Link> directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
