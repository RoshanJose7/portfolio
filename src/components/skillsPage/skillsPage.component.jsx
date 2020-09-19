import React, { useEffect } from "react";
import "./skillsPage.styles.scss";
import gsap from "gsap";

function SkillsPage() {
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
    <main id="skills-content">
      <h1 className="big-text" id="skill-head">
        My Skills
      </h1>
      <div className="big-text" id="skill">
        <section>
          <h2 className="skill-sub">Programming Languages</h2>
          <span>C C++ Java Python JavaScript</span>
        </section>
        <section>
          <h2 className="skill-sub">Technologies Known/Interests</h2>
          <span>
            Full Stack Web Development Cyber Security Internet of Things Machine
            Learning (soon in future)
          </span>
        </section>
        <section>
          <h2 className="skill-sub">Web Development</h2>
          <span>HTML CSS JS TS React NodeJS MySQL Azure Flask</span>
        </section>
      </div>
      <div className="intro">
        <h1 className="hide">
          <span className="text">My Skills</span>
        </h1>
      </div>
      <div className="slider"></div>
    </main>
  );
}

export default SkillsPage;
