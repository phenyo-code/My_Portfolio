import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Replace FaTwitter with FaGithub
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://web.facebook.com/phenyo.trigger.98/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://github.com/phenyo-code" target="_blank" rel="noopener noreferrer"><FaGithub /></a> {/* GitHub link */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/phenyo-koikoi-96a976310/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Me</h4>
          <p>Email: phenyokoikoi3@gmail.com</p>
          <p>Phone: 074 755 3247</p>
          <p>Address: 11003 Signal Hill, Mafikeng</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Phenyo Koikoi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

