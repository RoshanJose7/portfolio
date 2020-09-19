import React, { useEffect } from "react";
import "./projectsPage.styles.scss";
import gsap from "gsap";

function ProjectsPage() {
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
          <div className="project-card">
            <h2 className="big-text project-card-head">Miniature Jarves</h2>
            <div className="big-text project-card-content">
              Coded a miniature demo version of Jarves(from Iron Man) using
              python 3.8
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="code">
                  <i className="fab fa-firefox-browser" />
                  &nbsp; View Project
                </button>
              </a>
              <a href="https://github.com/RoshanJose7/jarves">
                <button className="code">
                  <i className="fab fa-github" />
                  &nbsp; View Code
                </button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="big-text project-card-head">Tinder for Dogs</h2>
            <div className="big-text project-card-content">
              A RIP off of Tinder but for dogs. The page shows only the pricing
              plans and homepage but not the exact functional version of Tinder.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="code">
                  <i className="fab fa-firefox-browser" />
                  &nbsp; View Project
                </button>
              </a>
              <a href="https://github.com/RoshanJose7/Tinder-RIP">
                <button className="code">
                  <i className="fab fa-github" />
                  &nbsp; View Code
                </button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="big-text project-card-head">Weather App</h2>
            <div className="big-text project-card-content">
              A simple weather app with NodeJS. It takes a WeatherStack API to
              request for the current weather forecast of any city in the world.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="code">
                  <i className="fab fa-firefox-browser" />
                  &nbsp; View Project
                </button>
              </a>
              <a href="https://github.com/RoshanJose7/weather_app">
                <button className="code">
                  <i className="fab fa-github" />
                  &nbsp; View Code
                </button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="big-text project-card-head">Monster's Rolodex</h2>
            <div className="big-text project-card-content">
              A simple React Web App which uses an API to show the images, and
              use a search filter to showcase Reacts' Virtual DOM.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="code">
                  <i className="fab fa-firefox-browser" />
                  &nbsp; View Project
                </button>
              </a>
              <a href="https://github.com/RoshanJose7/monsters-rolodex">
                <button className="code">
                  <i className="fab fa-github" />
                  &nbsp; View Code
                </button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="big-text project-card-head">Task Manager</h2>
            <div className="big-text project-card-content">
              A simple REST API with user authentication and a backend DataBase
              made using NodeJS, Mongoose and MongoDB.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="code">
                  <i className="fab fa-firefox-browser" />
                  &nbsp; View Project
                </button>
              </a>
              <a href="https://github.com/RoshanJose7/task_manager">
                <button className="code">
                  <i className="fab fa-github" />
                  &nbsp; View Code
                </button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="big-text project-card-head">Covid19 App</h2>
            <div className="big-text project-card-content">
              A project which we built in the FLIPR hackathon 6.0
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="code">
                  <i className="fab fa-firefox-browser" />
                  &nbsp; View Project
                </button>
              </a>
              <a href="https://github.com/MVJ-Boys/flipr-FSA-covid">
                <button className="code">
                  <i className="fab fa-github" />
                  &nbsp; View Code
                </button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="big-text project-card-head">Interior Design</h2>
            <div className="big-text project-card-content">
              A Interior Design website project which we built in an
              Internship/Workshop program with Verzeo.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="code">
                  <i className="fab fa-firefox-browser" />
                  &nbsp; View Project
                </button>
              </a>
              <a href="https://github.com/WD06B6/interior-design">
                <button className="code">
                  <i className="fab fa-github" />
                  &nbsp; View Code
                </button>
              </a>
            </div>
          </div>
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
