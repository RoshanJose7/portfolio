import React from "react";
import "./navBar.styles.scss";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    color: "white",
  };
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
    </nav>
  );
}

export default NavBar;
