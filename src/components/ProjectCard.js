import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa';  // GitHub icon

const ProjectCard = ({ image, name, language, githubLink, url }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-info">
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-url">
          {url}
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-name">
          {name}
        </a>
        <div className="project-links">
          <p className='language'>{language}</p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



