import React from "react";
import "./projectsPage.styles.scss";

function ProjectsPage() {
  return (
    <main id="project-content">
      <div className="project">
        <h1 id="project-head">My Projects</h1>
        <div id="project-card-holder">
          <div className="project-card">
            <h2 className="project-card-head">Miniature Jarves</h2>
            <div className="project-card-content">
              Coded a miniature demo version of Jarves(from Iron Man) using
              python 3.8
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="proj">
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
            <h2 className="project-card-head">Tinder for Dogs</h2>
            <div className="project-card-content">
              A RIP off of Tinder but for dogs. The page shows only the pricing
              plans and homepage but not the exact functional version of Tinder.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="proj">
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
            <h2 className="project-card-head">Weather App</h2>
            <div className="project-card-content">
              A simple weather app with NodeJS. It takes a WeatherStack API to
              request for the current weather forecast of any city in the world.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="proj">
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
            <h2 className="project-card-head">Monster's Rolodex</h2>
            <div className="project-card-content">
              A simple React Web App which uses an API to show the images, and
              use a search filter to showcase Reacts' Virtual DOM.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="proj">
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
            <h2 className="project-card-head">Task Manager</h2>
            <div className="project-card-content">
              A simple REST API with user authentication and a backend DataBase
              made using NodeJS, Mongoose and MongoDB.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="proj">
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
            <h2 className="project-card-head">Covid19 App</h2>
            <div className="project-card-content">
              A project which we built in the FLIPR hackathon 6.0
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="proj">
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
            <h2 className="project-card-head">Interior Design</h2>
            <div className="project-card-content">
              A Interior Design website project which we built in an
              Internship/Workshop program with Verzeo.
              <a href="https://weather-app-by-jose.herokuapp.com/">
                <button className="proj">
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
    </main>
  );
}

export default ProjectsPage;
