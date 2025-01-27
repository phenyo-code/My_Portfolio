import React from 'react';
import './About.css';
import { motion } from 'framer-motion'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Using Prism default theme
import { RiFileCopyLine } from 'react-icons/ri'; // Using Remix Icon for File Copy

const About = () => {
  const npmInstallCode = `npm install phenyo`;
  const importCode = `import { AboutMe } from 'phenyo';
console.log(AboutMe);`;

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <section className="about">
      <div className="about-header">
        {/* Code Box for npm install */}
        <div className="code-box">
          <button className="copy-btn" onClick={() => copyToClipboard(npmInstallCode)}>
            <RiFileCopyLine /> {/* Clipboard icon */}
          </button>
          <SyntaxHighlighter
            language="bash"
            style={prism} // Use prism theme here
          >
            {npmInstallCode}
          </SyntaxHighlighter>
        </div>
        
        {/* Code Box for Import */}
        <div className="code-box">
          <button className="copy-btn" onClick={() => copyToClipboard(importCode)}>
            <RiFileCopyLine /> {/* Clipboard icon */}
          </button>
          <SyntaxHighlighter
            language="javascript"
            style={prism} // Use prism theme here
          >
            {importCode}
          </SyntaxHighlighter>
        </div>

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





