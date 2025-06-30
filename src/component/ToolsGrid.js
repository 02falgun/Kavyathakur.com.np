import React from 'react';
import '../css/ToolsGrid.css';

const ToolsGrid = () => {
  // Primary tools/skills data
  const primaryTools = [
    { name: 'Java', icon: 'devicon-java-plain colored', color: '#f89820' },
    { name: 'React', icon: 'devicon-react-original colored', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored', color: '#E34F26' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored', color: '#1572B6' },
    { name: 'Python', icon: 'devicon-python-plain colored', color: '#3776AB' }
  ];

  // Secondary tools/skills data
  const secondaryTools = [
    { name: 'Spring', icon: 'devicon-spring-plain colored', color: '#6DB33F' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored', color: '#4479A1' },
    { name: 'Git', icon: 'devicon-git-plain colored', color: '#F05032' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', color: '#7952B3' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored', color: '#007ACC' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', color: '#339933' }
  ];

  return (
    <div className="tools-section">
      <div className="tools-section-header">
        <h4 className="tools-category">SOFTWARE</h4>
        <h2 className="tools-title">Tools I use</h2>
      </div>

      <div className="tools-container">
        <div className="skills-category">
          <h3 className="skills-level">PRIMARY SKILLS ON</h3>
          <div className="tools-grid primary-grid">
            {primaryTools.map((tool, index) => (
              <div 
                key={index} 
                className="tool-item" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <i className={tool.icon}></i>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category secondary-category">
          <h3 className="skills-level">SECONDARY SKILLS ON</h3>
          <div className="tools-grid secondary-grid">
            {secondaryTools.map((tool, index) => (
              <div 
                key={index} 
                className="tool-item" 
                data-aos="zoom-in" 
                data-aos-delay={100 + (index * 100)}
              >
                <i className={tool.icon}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsGrid;
