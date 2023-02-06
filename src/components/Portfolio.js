import React from "react";
import Project from "./Project";

import textEditor from "./../assets/images/textEditor.png";
import socialNetworkApi from "./../assets/images/socialNetworkApi.png";
import techBlog from "./../assets/images/techBlog.png";
import employeeTracker from "./../assets/images/employeeTracker.png";
import teamProfileGenerator from "./../assets/images/teamProfileGenerator.png";
import workDayScheduler from "./../assets/images/workDayScheduler.png";

const projects = [
  {
    title: "Text Editor",
    description:
      "Technologies: JavaScript, Node.js, Express.js, Webpack, Babel, IndexedDB/IDB",
    deployedLink: "https://mysterious-reef-06963.herokuapp.com/",
    githubLink: "https://github.com/CheBar1/text-editor",
    image: textEditor,
  },
  {
    title: "Social Network API",
    description:
      "Technologies: JavaScript, Node.js, Express.js, MongoDB, Mongoose, Moment",
    deployedLink:
      "https://drive.google.com/file/d/1QFEJ4rg9yn1scgb3ct0I9HJVaRfbJNXd/view",
    githubLink: "https://github.com/CheBar1/social-network-api",
    image: socialNetworkApi,
  },
  {
    title: "Tech Blog",
    description: "Technologies: MySQL, Handlebars, MVC paradigm, RESTful API",
    deployedLink: "https://young-savannah-76133.herokuapp.com/",
    githubLink: "https://github.com/CheBar1/tech-blog2",
    image: techBlog,
  },
  {
    title: "Employee Tracker",
    description: "Technologies: JavaScript, jQuery, Inquirer, MySQL2",
    deployedLink:
      "https://drive.google.com/file/d/1xLGc6egHD_B5Nn3UnN0sFkv9CnrkGAt-/view",
    githubLink: "https://github.com/CheBar1/employee-tracker",
    image: { employeeTracker },
  },
  {
    title: "Team Profile Generator",
    description: "Technologies: JavaScript, Node.js, jQuery, Bootstrap, Jest",
    deployedLink:
      "https://drive.google.com/file/d/1bx21w2RdMyMCzXP6qdD0I2IyvNGO7VdK/view",
    githubLink: "https://github.com/CheBar1/team-profile-generator",
    image: teamProfileGenerator,
  },
  {
    title: "Work Day Scheduler",
    description: "Technologies: JavaScript, jQuery, HTML, CSS, Moment",
    deployedLink: "https://chebar1.github.io/work-day-scheduler/",
    githubLink: "https://github.com/CheBar1/work-day-scheduler",
    image: workDayScheduler,
  },
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="workContainer">
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
