import React from 'react';

function Projects() {
  return (
    <div className="project-card">
      <div className="utility-margin-bottom-medium">Step 1</div>
      <h3 className="utility-margin-bottom-medium ">Add your projects.</h3>
      <p className="utility-margin-bottom-medium">
        Don’t just give a job title; provide context, too. A potential employer
        looking at your site will not be able to take away much with just a job
        title. Consider including: who it was for, project/job description, when
        (dates), any relevant screenshots/URLs/code samples to the work.
      </p>

      <div className="utility-margin-bottom-big">Suggested Projects</div>

      <div className="flex-container project utility-margin-bottom-medium">
        <div className="project__item">
          <div className="project__text">Project Name</div>
        </div>
        <div className="project__item">
          <div className="project__text">Project Name</div>
        </div>
        <div className="project__item">
          <div className="project__text">Project Name</div>
        </div>
        <div className="project__item">
          <div className="project__text">Project Name</div>
        </div>
        <div className="project__item">
          <div className="project__text">Manually Add A Project</div>
        </div>
      </div>

      <div className="break-line">&nbsp;</div>
    </div>
  );
}

export default Projects;
