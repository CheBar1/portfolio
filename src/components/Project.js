// For each project you feature in your portfolio, you should include the following:
// An image of the deployed application (either a GIF or a screenshot)
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

import React from "react";

const Project = ({ project }) => {
  const { name, description, deployedLink, githubLink, image } = project;

  return (
    <div className="card m-3">
      <h5 className="card-header">{name}</h5>

      <div className="card-body">
        <img src={image} className="card-img-top" alt={name} />
      </div>

      <div className="footer mx-auto mb-4">
        <p>{description}</p>
        <a
          href={githubLink}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Github Link
        </a>
        <a
          href={deployedLink}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Deployed Link
        </a>
      </div>
    </div>
  );
};

export default Project;
