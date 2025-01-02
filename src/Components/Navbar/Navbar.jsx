import React, { useState } from 'react';
import './Navbar.css'; // Import the corresponding CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      {/* Logo aligned to the left */}
      <div className="logo">Mehran Khan</div>

      {/* Navigation menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Me</a></li>
        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact-container" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Connect button */}
      <button className="nav-connect" onClick={scrollToContact}>
        Connect with Me
      </button>

      {/* Hamburger icon for mobile, aligned to the right */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleHamburgerClick}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
