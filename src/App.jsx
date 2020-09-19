import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar.component";
import HomePage from "./components/homePage/homePage.component";
import ProjectsPage from "./components/projectsPage/projectsPage.component";
import ContactPage from "./components/contactPage/contactPage.component";
import SkillsPage from "./components/skillsPage/skillsPage.component";
import "./App.scss";
import "./components/App-responsive.styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
