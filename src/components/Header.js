import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">PHENYO</div>
      <div 
        className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <ul className="navbar">
      <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
      <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
      <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
      <li><Link to="/contact" className='contact' onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
</ul>
      </nav>
    </header>
  );
};

export default Header;


