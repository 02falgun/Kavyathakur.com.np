import React from 'react';
import '../css/Timeline.css';

const Timeline = () => {
  const timelineItems = [
    {
      year: "2025",
      title: "AI & Machine Learning",
      organization: "Self-Learning & University",
      description: "Exploring artificial intelligence and machine learning. Completed project on Ear-based Biometric using recent CNN models."
    },
    {
      year: "2023",
      title: "Full Stack Web Development",
      organization: "Self-Learning & University",
      description: "Mastered full stack development with modern technologies. Built responsive and interactive web applications with modern frameworks."
    },
    {
      year: "2024",
      title: "Data Structures & Algorithms",
      organization: "GeeksforGeeks, LeetCode",
      description: "Strengthened DSA skills by solving 300+ problems on competitive platforms. Built a strong foundation in algorithm design and analysis."
    },
    {
      year: "2023",
      title: "B.Tech in Computer Science & Engineering",
      organization: "Sharda University",
      description: "Currently pursuing Computer Science & Engineering with focus on advanced programming concepts and practical applications. Current GPA: 8.74/10.0"
    }
  ];

  return (
    <div className="timeline-section" data-aos="fade-up" data-aos-duration="800">
      <h3 className="timeline-title">Education & Experience</h3>
      <div className="timeline-container">
        {timelineItems.map((item, index) => (
          <div 
            key={index} 
            className="timeline-item" 
            data-aos="fade-up" 
            data-aos-delay={100 * index}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.year}</div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <h5>{item.organization}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
