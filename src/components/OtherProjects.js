import React from 'react';
import ProjectCard from './ProjectCard'; 
import OtherProjects from '../data/OtherProject';
import './MyWork.css'; 

const OtherWork = () => {
  return (
    <section className="my-work">
      <h2 className="section-title">Other Projects</h2>
      <div className="project-container">
        {OtherProjects.map(project => (
          <ProjectCard
            key={project.id}
            image={project.image} 
            name={project.name}
            language={project.language}
            githubLink={project.githubLink}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default OtherWork;
