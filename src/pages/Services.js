import React from 'react';
import './Services.css';
import { FaLaptopCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h1 className="services-title">Services</h1>
        <p className="services-intro">
          We offer a range of high-quality services to help your business succeed in the digital world.
        </p>
      </div>

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
            Custom, responsive websites built using modern technologies like React.js, Next.js, and Node.js to ensure exceptional performance and user experience.
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
            Improve your website's search engine ranking with our on-page and off-page SEO strategies to drive traffic and grow your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
