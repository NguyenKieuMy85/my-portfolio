import React from "react";
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
            <a href="#home"><FaHome className="icon" /> Home</a>
          </li>
          <li>
            <a href="#about"><FaUser className="icon" /> About</a>
          </li>
          <li>
            <a href="#projects"><FaProjectDiagram className="icon" /> Projects</a>
          </li>
          <li>
            <a href="#resume"><FaFileAlt className="icon" /> Resume</a>
          </li>
          <li>
            <a href="#blogs"><FaBlog className="icon" /> Blogs</a>
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