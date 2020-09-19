import React, { useEffect } from "react";
import "./contactPage.styles.scss";
import gsap from "gsap";

function ContactPage() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { x: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { x: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(
      ".big-text",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.25 },
      "-=1"
    );
  });

  return (
    <main id="contact">
      <div id="contact-content">
        <h1 className="big-text" id="contact-head">
          Contact Me
        </h1>
        <div id="contact-c">
          <div id="contact-para">
            <h1 className="big-text">A Bit about MySelf</h1>
            <p className="big-text">
              Hello!! I'm Roshan Jose a Software Engineering currently in my
              Second year. I am a Web Developer, Beginner Pen Tester and am
              currently exploring the world of Machine Learning
            </p>
          </div>
          <div id="contact-links">
            <ul>
              <li>
                <a
                  className="big-text fa-a"
                  href="https://github.com/RoshanJose7"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  className="big-text fa-a"
                  href="https://www.linkedin.com/in/roshan-jose-919456118/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="big-text fa-a"
                  href="https://www.instagram.com/rj7_plays/"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Contact</span>
          </h1>
          <h1 className="hide">
            <span className="text">Page</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </main>
  );
}

export default ContactPage;
