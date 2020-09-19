import React from "react";
import "./skillsPage.styles.scss";

function SkillsPage() {
  return (
    <main id="skills-content">
      <h1 id="skill-head">My Skills</h1>
      <div>
        <section>
          <h2 className="skill-sub">Programming Languages</h2>
          <span className="skill-tag">C C++ Java Python JavaScript</span>
        </section>
        <section>
          <h2 className="skill-sub">Technologies Known/Interests</h2>
          <span className="skill-tag">
            Full Stack Web Development Cyber Security Internet of Things Machine
            Learning (soon in future)
          </span>
        </section>
        <section>
          <h2 className="skill-sub">Web Development</h2>
          <span className="skill-tag">
            HTML CSS JS TS React NodeJS MySQL Azure Flask
          </span>
        </section>
      </div>
    </main>
  );
}

export default SkillsPage;
