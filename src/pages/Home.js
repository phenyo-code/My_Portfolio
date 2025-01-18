import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MyWork from '../components/MyWork';
import MyWorkUI from '../components/MyWorkUI';
import OtherProjects from '../components/OtherProjects';
import './Home.css';
import { FaPlus } from 'react-icons/fa';  // Importing the plus icon from react-icons
import { motion } from 'framer-motion';  // Import Framer Motion

const HomePage = () => {
  // State to manage visibility of the testimonials section
  const [areTestimonialsVisible, setAreTestimonialsVisible] = useState(false);

  // State to manage visibility of the "Recently Working Work" section
  const [areRecentWorkVisible, setAreRecentWorkVisible] = useState(false);

  return (
    <div>
      <HeroSection />

      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <section className="tools">
          <div className="tools-container">
            <div className="tech-icons">
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50" title="JavaScript" />
              </div>
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" width="50" height="50" title="React.js" />
              </div>
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" width="50" height="50" title="Angular" />
              </div>
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" height="50" title="Node.js" />
              </div>
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="50" height="50" title="Express" />
              </div>
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" width="50" height="50" title="Postman" />
              </div>
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="50" height="50" title="MongoDB" />
              </div>
              <div className="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" width="50" height="50" title="Next.js" />
              </div>
            </div>
          </div>
        </section>

        <MyWork />

        {/* Testimonials Section */}
        <motion.section
          className="testimonials"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonial-header" onClick={() => setAreTestimonialsVisible(!areTestimonialsVisible)}>
            <h2 className="testimonial-title">Testimonials</h2>
            <FaPlus className="toggle-icon" />
          </div>
          {areTestimonialsVisible && (
            <>
              <div className="testimonial-card">
                <p>"Phenyo's work is top-notch! Great attention to detail and creativity."</p>
                <span>DesignCraft Team</span>
              </div>
              <div className="testimonial-card">
                <p>"A true professional, delivering on time and with fantastic results."</p>
                <span>Finora Marketing Manager</span>
              </div>
            </>
          )}
        </motion.section>

        {/* "Recently Working Work" Section */}
        <motion.section
          className="recent-work"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonial-header" onClick={() => setAreRecentWorkVisible(!areRecentWorkVisible)}>
            <h2 className="testimonial-title">Recently Working On</h2>
            <FaPlus className="toggle-icon" />
          </div>
          {areRecentWorkVisible && (
            <>
              <div className="testimonial-card">
                <p>"Developed an e-commerce app with React Native using Expo."</p>
                <span>CodeCraft Team</span>
              </div>
              <div className="testimonial-card">
                <p>"Worked on a UI design for a fashion show brochure."</p>
                <span>Soro Fashion Team</span>
              </div>
            </>
          )}
        </motion.section>

        <OtherProjects />

        <MyWorkUI />

      </motion.div>
    </div>
  );
};

export default HomePage;

