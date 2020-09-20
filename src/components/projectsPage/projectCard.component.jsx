import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <h2 className="big-text project-card-head">{props.info.head}</h2>
      <div className="big-text project-card-content">
        {props.info.text}
        <a href={props.info.pLink}>
          <button className="code">
            <i className="fab fa-firefox-browser" />
            &nbsp; View Project
          </button>
        </a>
        <a href={props.info.ghLink}>
          <button className="code">
            <i className="fab fa-github" />
            &nbsp; View Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
