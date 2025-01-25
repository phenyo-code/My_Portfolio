import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import MyWork from '../components/MyWork';
import MyWorkUI from '../components/MyWorkUI';
import OtherProjects from '../components/OtherProjects';
import './Home.css';
import { FaPlus } from 'react-icons/fa';  
import { motion } from 'framer-motion';  

const HomePage = () => {
  // State to manage visibility of the testimonials section
  const [areTestimonialsVisible, setAreTestimonialsVisible] = useState(false);

  // State to manage visibility of the "Recently Working On" section
  const [areRecentWorkVisible, setAreRecentWorkVisible] = useState(false);

  return (
    <div className='home-container'>
      <HeroSection />

      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >


        <MyWork />

   

        {/* "Recently Working Work" Section */}
        <motion.section
          className="recent-work"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonial-header" onClick={() => setAreRecentWorkVisible(!areRecentWorkVisible)}>
            <h3 className="testimonial-title">Recently Working On</h3>
            <FaPlus className="toggle-icon" />
          </div>
          {areRecentWorkVisible && (
            <>
              <div className="testimonial-card">
                <p>I'm currently working on a modern e-commerce application using Next.js, focusing on 
                  performance, SEO optimization, and a seamless user experience. The project involves designing 
                  responsive layouts and integrating advanced features such as server-side rendering (SSR) and dynamic
                   product filtering to enhance functionality.</p>
                   <span>Freelance Project</span>
              </div>
              <div className="testimonial-card">
                <p>I'm also working on a personal project called Auth-SDK, which simplifies authentication 
                  processes, for developers, by providing a seamless and secure way to integrate user authentication, including features such as 
                  email verification, password complexity enforcement, and OTP functionality, into applications.</p>
                <span>Personal Project</span>
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

