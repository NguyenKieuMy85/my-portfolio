import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import "../../style.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">KM</div>

      {/* Icon mở menu mobile */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${open ? "active" : ""}`}>
        <li><NavLink to="/" end className="nav-link"> <FaHome /> Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link"><FaUser /> About</NavLink></li>
        <li><NavLink to="/projects" className="nav-link"><FaProjectDiagram /> Projects</NavLink></li>
        <li><NavLink to="/resume" className="nav-link"><FaFileAlt /> Resume</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
