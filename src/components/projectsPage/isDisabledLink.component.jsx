import React from "react";

const IspLinkDisabled = (props) => {
  if (!props.pLink) {
    return (
      <a href={props.pLink} target="_blank" rel="noopener noreferrer">
        <button disabled className="code">
          <i className="fab fa-firefox-browser" />
          &nbsp; View Project
        </button>
      </a>
    );
  } else {
    return (
      <a href={props.pLink} target="_blank" rel="noopener noreferrer">
        <button className="code">
          <i className="fab fa-firefox-browser" />
          &nbsp; View Project
        </button>
      </a>
    );
  }
};

const IsghLinkDisabled = (props) => {
  if (!props.ghLink) {
    return (
      <a href={props.ghLink} target="_blank" rel="noopener noreferrer">
        <button disabled className="code">
          <i className="fab fa-github" />
          &nbsp; View Code
        </button>
      </a>
    );
  } else {
    return (
      <a href={props.ghLink} target="_blank" rel="noopener noreferrer">
        <button className="code">
          <i className="fab fa-github" />
          &nbsp; View Code
        </button>
      </a>
    );
  }
};

export { IspLinkDisabled, IsghLinkDisabled };
