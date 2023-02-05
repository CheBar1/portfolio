import React from 'react'
// Use rafce as shortcut to create React arrow export function
import Project from './Project';

const Portfolio = () => {
  const projects = [ 
    {
    name: "Weather Dashboard",
    description: "Javascript, API, Bootstrap",
    deployedLink: "https://writteninnacode.github.io/Weather_Dashboard/",
    githubLink: "https://github.com/WrittenInnaCode/Weather_Dashboard",
    image: "04-weather-dashboard.png"
    },
    {
      name: "Weather Dashboard",
      description: "Javascript, API, Bootstrap",
      deployedLink: "https://writteninnacode.github.io/Weather_Dashboard/",
      githubLink: "https://github.com/WrittenInnaCode/Weather_Dashboard",
      image: "04-weather-dashboard.png"
      },
]
  return (
    <div>
      { projects.map(project =>(
        <Project project = {project} />
      ))}
    </div>
  )
}

export default Portfolio
