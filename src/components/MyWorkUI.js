import React from 'react';
import './ProjectCard.css';  // Reusing the same CSS
import FeaturedUIDesigns from '../data/UIDesigns';
import './MyWork.css';

const MyWorkUI = () => {
  return (
    <section className="my-work">
      <h2 className="section-title">UI Designs</h2>
      <div className="project-container">
        {FeaturedUIDesigns.map(uiDesign => (
          <div key={uiDesign.id} className="project-card">
            <img src={uiDesign.image} alt={uiDesign.name} className="project-image" />
            <div className="project-info">
              <a href={uiDesign.url} target="_blank" rel="noopener noreferrer" className="project-name">
                {uiDesign.name}
              </a>
              <div className="project-links">
                <p className="language">{uiDesign.tools}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorkUI;
