import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import HireMe from './pages/HireMe';
import './App.css';

// AnimatedRoutes component
function AnimatedRoutes({ isDarkMode, toggleTheme }) {
  // useLocation hook to track current location
  const location = useLocation();
  
  return (
    <div className={`App ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="main-content">
        <div className="page">
          <Routes location={location}>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hire-me" element={<HireMe />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  // Check for user's preferred theme on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
