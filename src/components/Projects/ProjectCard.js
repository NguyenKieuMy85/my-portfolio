import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ image, title, content, github }) => {
  return (
    <div className="project-card">
      {/* Hình ảnh */}
      <img src={image} alt={title} className="project-image" />

      {/* Nội dung */}
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-content">{content}</p>

        {/* Nút GitHub */}
        <a href={github} target="_blank" rel="noopener noreferrer" className="github-btn">
          <FaGithub size={20} /> View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
