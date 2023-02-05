import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      name: "Weather Dashboard",
      description: "Javascript, API, Bootstrap",
      deployedLink: "https://writteninnacode.github.io/Weather_Dashboard/",
      githubLink: "https://github.com/WrittenInnaCode/Weather_Dashboard",
      image: "04-weather-dashboard.png",
    },
    {
      name: "Weather Dashboard",
      description: "Javascript, API, Bootstrap",
      deployedLink: "https://writteninnacode.github.io/Weather_Dashboard/",
      githubLink: "https://github.com/WrittenInnaCode/Weather_Dashboard",
      image: "04-weather-dashboard.png",
    },
  ];

  return (
    <div>
      <h2>Portfolio</h2>

      <div>
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
