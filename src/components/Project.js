// For each project you feature in your portfolio, you should include the following:
// An image of the deployed application (either a GIF or a screenshot)
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

import React from "react";
// Use rafce as shortcut to create React arrow export function

const Project = ({project}) => {
    const { name, description, deployedLink, githubLink, image} = project;

  return (
    <div className="text-center">
      <img
        alt={name}
        className="img-fluid"
        src={require(`../assets/images/${image}`)}
       />
      <h3>Desciption: {description}</h3>
      <h3>DeployedLink: {deployedLink}</h3>
      <h3>GithubLink: {githubLink}</h3>
    </div>
  );
};

export default Project;
