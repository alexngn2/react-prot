import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
      <li className="flex-sm-fill text-sm-center">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="nav-link active"
        >
          About
          </NavLink>
      </li>
      <li className="flex-sm-fill text-sm-center">
        <NavLink
          to="/portfolio"
          className="nav-link"
          activeClassName="nav-link active"
        >
          Portfolio
          </NavLink>
      </li>
      <li className="flex-sm-fill text-sm-center">
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="nav-link active"
        >
          Contact
          </NavLink>
      </li>
      <a
        className="flex-sm-fill text-sm-center nav-link"
        href="https://github.com/alexngn2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/github.png")}
          alt="GitHub"
          height="25"
          width="25"
          className="github"
        />
      </a>
      <a
        className="flex-sm-fill text-sm-center nav-link"
        href="https://www.linkedin.com/in/alex-nguyen-b9a424183/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/linkedin.png")}
          alt="Linkedin"
          height="24"
          width="29"
          className="linkedin"
        />
      </a>
      <a
      className="flex-sm-fill text-sm-center nav-link"
      href="https://docs.google.com/document/d/1gs6H67u9ntXbuEfBy3e5pEs1DV9ieNAqw04Bho4qdNo/edit"
      target="_blank"
      rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/resume.jpg")}
          alt="resume"
          height="28"
          width="28"
          className="resume"
        />
      </a>
    </nav>
  );
}

export default Navbar;