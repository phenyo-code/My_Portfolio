import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const messages = [
  "Software Engineer",
  "Next.js Developer",
  "Web Developer",
  "React Developer",
  "Software Engineer",
  "Next.js Developer",
  "Web Developer",
  "React Developer",
  "Next.js Developer",
  "Web Developer",
  "React Developer",
];

const colors = [
  "#FFFFFF",
  "#FFA07A",
  "#ff4040", 
  "#FFFFFF",
  "#ff4040",
  "#FFFFFF",
  "#FFFFFF",
  "#ff4040", 
  "#FFFFFF",
  "#FFFFFF",
  "#00CED1",
];

const HeroSection = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < (messages[index] || '').length) {
        setCurrentMessage(messages[index].substring(0, charIndex + 1));
        charIndex += 1;
      } else {
        clearInterval(typingInterval); // Stop typing once the message is fully typed
        setTimeout(() => {
          // Move to the next message after typing is done
          setIndex((prevIndex) => (prevIndex + 1) % messages.length); // Safe index update
          setCurrentMessage(''); // Reset the message for the next typing
          charIndex = 0;
        }, 1000); // Hold for 1 second before typing the next message
      }
    }, 120); // Typing speed: 120ms per character

    return () => clearInterval(typingInterval); // Clean up on component unmount
  }, [index]);

  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        className="hero-video"
        src="https://videos.pexels.com/video-files/8721923/8721923-uhd_2732_1440_25fps.mp4" 
        type="video/mp4"
      ></video>

      <div className="hero-overlay">
        <div className="hero-content">
          <motion.h2
            initial={{ opacity: 0, y: -10 }} // Initial state for h2
            animate={{ opacity: 1, y: 0 }} // Final state for h2
            transition={{ duration: 0.5 }} // Animation for h2
          >
            Console.log(<span style={{ color: colors[index] }}>"{currentMessage}"</span>);
          </motion.h2>

          <motion.p 
           initial={{ opacity: 0, y: -30 }} // Initial state
           animate={{ opacity: 1, y: 0 }}   // Final state
           transition={{ duration: 0.5, delay: 0.4 }}
          >
            I’m a software engineer passionate about building efficient and scalable web applications from front-end to back-end.
          </motion.p>

          <div className="hero-buttons">
            <motion.a
              href="/contact"
              className="btn-secondary"
              whileHover={{ scale: 1.1 }} // Button hover effect
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



