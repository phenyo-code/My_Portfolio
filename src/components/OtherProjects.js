import React from 'react';
import ProjectCard from './ProjectCard'; // Assuming you reuse the same card component
import OtherProjects from '../data/OtherProject';
import './MyWork.css'; // Reusing the same CSS styles

const OtherWork = () => {
  return (
    <section className="my-work">
      <h2 className="section-title">Other Projects</h2>
      <div className="project-container">
        {OtherProjects.map(project => (
          <ProjectCard
            key={project.id}
            image={project.image} // Optional: Add placeholder or icons for GitHub-only projects
            name={project.name}
            language={project.language}
            githubLink={project.githubLink}
            url={null} // No live URLs for these projects
          />
        ))}
      </div>
    </section>
  );
};

export default OtherWork;
