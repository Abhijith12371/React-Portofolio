import React from "react";
import "./Projects.css";
const ProjectCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          rem asperiores blanditiis delectus deserunt, reiciendis illum debitis.
          Pariatur in omnis, explicabo earum officia aliquam dolore amet
          deleniti vitae minima sint?
        </p>
        <div className="buttons">
          <a href={props.link} target="_blank"><button>View Site</button></a>
          <button>Vide Code</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
