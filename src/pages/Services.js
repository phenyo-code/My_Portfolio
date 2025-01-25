import React from 'react';
import './Services.css';
import { FaLaptopCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h1 className="services-title">Skills</h1>
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


      <div className="services-container">
        {/* Web Development */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }}   // Final state
          transition={{ duration: 0.5 }}
        >
          <FaLaptopCode className="service-icon" />
          <h2 className="service-title">Web Development</h2>
          <p className="service-description">
            Custom, responsive websites built using modern technologies such as React.js, Next.js, and Node.js to ensure exceptional performance and user experience.
          </p>
        </motion.div>

        {/* Product Design */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }}   // Final state
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaPaintBrush className="service-icon" />
          <h2 className="service-title">Product Design</h2>
          <p className="service-description">
            User-centered design solutions for web and mobile apps, combining visual aesthetics with functionality to create intuitive interfaces.
          </p>
        </motion.div>

        {/* SEO Optimization */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }}   // Final state
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaChartLine className="service-icon" />
          <h2 className="service-title">SEO Optimization</h2>
          <p className="service-description">
            Improve websites' search engine ranking with on-page and off-page SEO strategies to drive traffic.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
