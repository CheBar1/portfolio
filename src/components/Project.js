import React from "react";

function Project({ title, description, deployedLink, githubLink, image }) {
  return (
    <div className="card m-3">
      <h5 className="card-header">{title}</h5>

      <div className="card-body">
        <img src={image} className="card-img-top" alt={title} />
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
}

export default Project;
