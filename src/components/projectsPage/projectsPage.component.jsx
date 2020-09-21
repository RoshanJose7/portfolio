import React, { useEffect } from "react";
import ProjectCard from "./projectCard.component";
import "./projectsPage.styles.scss";
import gsap from "gsap";

function ProjectsPage() {
  const cardInfo = [
    {
      id: 1,
      head: "Miniature Jarvis",
      text:
        "Coded a miniature demo version of Jarves(from Iron Man) using python 3.8",
      pLink: null,
      ghLink: "https://github.com/RoshanJose7/jarves",
    },
    {
      id: 2,
      head: "Tinder for Dogs",
      text:
        "A RIP off of Tinder but for dogs. The page shows only the pricing plans and homepage but not the exact functional version of Tinder.",
      pLink: "https://roshanjose7.github.io/Tinder-RIP/",
      ghLink: "https://github.com/RoshanJose7/Tinder-RIP",
    },
    {
      id: 3,
      head: "Weather App",
      text:
        "A simple weather app with NodeJS. It takes a WeatherStack API to request for the current weather forecast of any city in the world.",
      pLink: null,
      ghLink: "https://github.com/RoshanJose7/jarves",
    },
    {
      id: 4,
      head: "Monster's Rolodex",
      text:
        "A simple React Web App which uses an API to show the images, and use a search filter to showcase Reacts' Virtual DOM.",
      pLink: "https://monstersrolodex.netlify.app/",
      ghLink: "https://github.com/RoshanJose7/monsters-rolodex",
    },
    {
      id: 5,
      head: "Task Manager API",
      text:
        "A simple REST API with user authentication and a backend DataBase made using NodeJS, Mongoose and MongoDB.",
      pLink: null,
      ghLink: "https://github.com/RoshanJose7/task_manager",
    },
    {
      id: 6,
      head: "Covid19 App",
      text: "A project which we built in the FLIPR hackathon 6.0",
      pLink: "https://covid-data-team-x.herokuapp.com/",
      ghLink: "https://github.com/RoshanJose7/jarves",
    },
    {
      id: 7,
      head: "Interior Design",
      text:
        "A Interior Design website project which we built in an Internship/Workshop program with Verzeo.",
      pLink: null,
      ghLink: "https://github.com/RoshanJose7/jarves",
    },
  ];
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(
      ".big-text",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.25 },
      "-=1"
    );
  });
  return (
    <main id="project-content">
      <div className="project">
        <h1 className="big-text" id="project-head">
          My Projects
        </h1>
        <div id="project-card-holder">
          {cardInfo.map((card, index) => {
            return <ProjectCard key={index} info={card} />;
          })}
        </div>
      </div>
      <div className="intro">
        <h1 className="hide">
          <span className="text">My Project's</span>
        </h1>
      </div>
      <div className="slider"></div>
    </main>
  );
}

export default ProjectsPage;
