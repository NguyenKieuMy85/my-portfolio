import React from "react";
import { Link } from "react-router-dom";
import "../../style.css"; 

import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBlog, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">KM</div>

      {/* Menu + Button nằm bên phải */}
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li>
            <Link to="/"><FaHome className="icon" /> Home</Link>
          </li>
          <li>
            <Link to="/about"><FaUser className="icon" /> About</Link>
          </li>
          <li>
            <Link to="/projects"><FaProjectDiagram className="icon" /> Projects</Link>
          </li>
          <li>
            <Link to="/resume"><FaFileAlt className="icon" /> Resume</Link>
          </li>
          <li>
            <Link to="/blogs"><FaBlog className="icon" /> Blogs</Link>
          </li>
        </ul>

        <button className="navbar-btn">
          <FaEnvelope className="icon" /> Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
