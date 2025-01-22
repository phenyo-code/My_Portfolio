import React from 'react';
import './About.css';
import { motion } from 'framer-motion'; 

const About = () => {
  return (
    <section className="about">
      <div className="about-header">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -50 }}  // Initial state
          animate={{ opacity: 1, y: 0 }}    // Final state
          transition={{ duration: 0.5 }}  // Animation properties
        >
          About Me
        </motion.h1>
        <motion.p
          className="about-intro"
          initial={{ opacity: 0 }}  // Initial state
          animate={{ opacity: 1 }}  // Final state
          transition={{ duration: 0.5, delay: 0.2 }}  // Animation properties
        >
          I'm Phenyo Koikoi, a passionate Web Developer, Product Designer, and SEO Specialist dedicated to crafting impactful digital experiences.
        </motion.p>
      </div>


      <section className="tools">
      <div className="tools-container">
        <motion.div
          className="tech-icons"
          animate={{ x: [0, 50, 0] }}  // Animation movement
          transition={{ duration: 1, ease: "easeInOut", staggerChildren: 0.2 }}
        >
          <motion.div
            className="tech-icon"
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50" title="JavaScript" />
          </motion.div>

          <motion.div
            className="tech-icon"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" width="50" height="50" title="React.js" />
          </motion.div>

          <motion.div
            className="tech-icon"
            initial={{ x: "-700%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" width="50" height="50" title="Angular" />
          </motion.div>

          <motion.div
            className="tech-icon"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" height="50" title="Node.js" />
          </motion.div>

          <motion.div
            className="tech-icon"
            initial={{ x: "-900%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="50" height="50" title="Express" />
          </motion.div>

          <motion.div
            className="tech-icon"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" width="50" height="50" title="Postman" />
          </motion.div>

          <motion.div
            className="tech-icon"
            initial={{ x: "-500%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="50" height="50" title="MongoDB" />
          </motion.div>

          <motion.div
            className="tech-icon"
            initial={{ x: "-900%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" width="50" height="50" title="Next.js" />
          </motion.div>
        </motion.div>
      </div>
    </section>


    

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="section-subtitle">My Journey</h2>
          <p>
            I started my journey as a freelancer, driven by my love for creativity and technology. Over the years, I've honed my skills in web development, UI/UX design, and search engine optimization, working on diverse projects ranging from e-commerce platforms to SaaS applications.
          </p>

          <h2 className="section-subtitle">My Mission</h2>
          <p>
            My mission is to bridge the gap between aesthetics and functionality, delivering innovative solutions that not only meet but exceed client expectations.
          </p>

          <h2 className="section-subtitle">My Vision</h2>
          <p>
            To become a leader in the tech and design industry, empowering businesses worldwide with cutting-edge digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

