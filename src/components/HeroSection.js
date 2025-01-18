import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const messages = [
  "Backend Developer",
  "Software Engineer",
  "Full Stack Developer",
  "UI Developer",
  "Web Developer",
  "Web Designer",
  "UI/UX Designer",
  "React Developer",
  "Node.js Developer",
  "MERN Stack Developer",
  "Frontend Developer",
];

const HeroSection = () => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => {
        const currentIndex = messages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        className="hero-video"
        src="https://videos.pexels.com/video-files/8721923/8721923-uhd_2732_1440_25fps.mp4" // Replace with the video URL
        type="video/mp4"
      ></video>

      <div className="hero-overlay">
        <div className="hero-content">
          <motion.h2
            initial={{ opacity: 0, y: -20 }} // Initial state for h2
            animate={{ opacity: 1, y: 0 }} // Final state for h2
            transition={{ duration: 0.5 }} // Animation for h2
          >
            Console.log("{currentMessage}");
          </motion.h2>
          <p>
            I’m a software engineer passionate about building efficient and scalable web applications from front-end to back-end.
          </p>
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



