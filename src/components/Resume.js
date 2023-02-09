import React from "react";
import ResumeFile from "../assets/images/ResumeImage.png";

const Resume = () => {
  return (
    <container >
      <h4>Technologies</h4>
      <ul>
        <li class="list-group-item">HTML 5</li>
        <li class="list-group-item">CSS3</li>
        <li class="list-group-item">JavaScript</li>
        <li class="list-group-item">jQuery</li>
        <li class="list-group-item">Boostrap</li>
      </ul>

      <div>
        <a href={ResumeFile} download="Cheryl Barclay Resume">
          Download Resume
        </a>
      </div>
    </container>
  );
};

export default Resume;
