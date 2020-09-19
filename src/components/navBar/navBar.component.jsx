import React, { useEffect } from "react";
import "./navBar.styles.scss";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    color: "white",
  };

  useEffect(() => {
    const navSlide = () => {
      const burger = document.querySelector("#burger");
      const nav = document.querySelector("#nav-links");

      burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("open");
        // Burger Animation
        burger.classList.toggle("toggle");
      });
    };
    navSlide();
  });

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h1>LOGO</h1>
      </Link>
      <ul id="nav-links">
        <Link style={navStyle} to="/skills">
          <li>Skills</li>
        </Link>
        <Link style={navStyle} to="/projects">
          <li>Projects</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div id="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
