import React from 'react';
import '../css/ProjectBanner.css';

const ProjectBanner = ({ title, category, technologies }) => {
  // Generate a unique background pattern based on the project title
  const generatePattern = (title) => {
    const hash = title.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    const primaryHue = Math.abs(hash % 360);
    const secondaryHue = (primaryHue + 180) % 360;
    
    return {
      primaryColor: `hsl(${primaryHue}, 70%, 65%)`,
      secondaryColor: `hsl(${secondaryHue}, 70%, 65%)`,
      pattern: hash % 5  // 5 different pattern types
    };
  };

  const pattern = generatePattern(title);
  
  // Get 2 random technologies to display as animated elements
  const getRandomTechs = (techs) => {
    if (!techs || techs.length <= 2) return techs || [];
    const shuffled = [...techs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };
  
  const randomTechs = getRandomTechs(technologies);
  
  // Get appropriate icon for category
  const getCategoryIcon = (cat) => {
    switch(cat.toLowerCase()) {
      case 'react': return 'fab fa-react';
      case 'java': return 'fab fa-java';
      case 'web': return 'fas fa-globe';
      case 'dsa': return 'fas fa-code';
      default: return 'fas fa-laptop-code';
    }
  };

  return (
    <div 
      className={`project-banner pattern-${pattern.pattern}`}
      style={{
        '--primary-color': pattern.primaryColor,
        '--secondary-color': pattern.secondaryColor
      }}
    >
      <div className="banner-content">
        <div className="banner-title-area">
          <h3 className="banner-title">{title}</h3>
          <div className="banner-category">
            <i className={getCategoryIcon(category)}></i>
            <span>{category}</span>
          </div>
        </div>
        
        <div className="banner-floating-techs">
          {randomTechs.map((tech, index) => (
            <div 
              key={index}
              className={`floating-tech ft-${index + 1}`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
