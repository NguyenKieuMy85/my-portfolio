import React from "react";
import { NavLink } from "react-router-dom";
import "../../style.css"; 
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">KM</div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" end className="nav-link">
              <FaHome className="icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              <FaUser className="icon" /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">
              <FaProjectDiagram className="icon" /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="nav-link">
              <FaFileAlt className="icon" /> Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
