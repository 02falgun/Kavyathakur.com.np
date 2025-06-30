import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../css/Testimonials.css';

const Testimonials = () => {
  const clients = [    {
      id: 1,
      name: 'MIT Campus',
      website: 'mitjnk.edu.np',
      description: 'Kavya\'s expertise in web development transformed our outdated website into a modern, responsive platform that perfectly represents our educational institution. His attention to detail and commitment to delivering high-quality work exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Gyan Foundation Educational Consultancy',
      website: 'gyanfoundation.com.np',
      description: 'Working with Kavya was a pleasure from start to finish. He understood our vision for an interactive educational portal and implemented innovative solutions that have significantly improved user engagement and streamlined our online processes.',
      rating: 5
    },
    {
      id: 3,
      name: 'Nocha Resort',
      website: 'nocharesort.com.np',
      description: 'Kavya delivered an exceptional website for our resort that beautifully showcases our amenities and has dramatically increased our online bookings. His technical skills and creative design approach have made a significant positive impact on our business.',
      rating: 5
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title" data-aos="fade-up">What My Clients Say</h2>
        
        <div className="testimonials-grid">
          {clients.map((client) => (
            <div className="testimonial-card" key={client.id} data-aos="fade-up" data-aos-delay={client.id * 100}>
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{client.description}</p>
                
                <div className="rating">
                  {[...Array(client.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
              
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <a href={`https://${client.website}`} target="_blank" rel="noopener noreferrer" className="client-website">
                  {client.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
