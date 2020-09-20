import React from "react";
import { IspLinkDisabled, IsghLinkDisabled } from "./isDisabledLink.component";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <h2 className="big-text project-card-head">{props.info.head}</h2>
      <div className="big-text project-card-content">
        {props.info.text}
        <IspLinkDisabled pLink={props.info.pLink}></IspLinkDisabled>
        <IsghLinkDisabled ghLink={props.info.ghLink}></IsghLinkDisabled>
      </div>
    </div>
  );
};

export default ProjectCard;
