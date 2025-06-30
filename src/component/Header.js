import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../css/Header.css';
import logoImg from '../files/kavya-logo.png';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Kavya Kumar Thakur Logo" className="logo-img" />
            <span className="logo-text"></span>
          </Link>
        </div>

        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-btn">
            {isDarkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            <li className="hire-me-btn">
              <Link to="/hire-me" className="btn-hire">Hire Me</Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-btn" onClick={handleMenuClick}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;