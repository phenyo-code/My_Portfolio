import React from 'react';
import ProjectCard from './ProjectCard';
import FeaturedProjects from '../data/Projects';
import './MyWork.css';

const MyWork = () => {
  return (
    <section className="my-work">
      <h2 className="section-title">Recent Projects</h2>
      <div className="project-container">
        {FeaturedProjects.map(project => (
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

export default MyWork;


