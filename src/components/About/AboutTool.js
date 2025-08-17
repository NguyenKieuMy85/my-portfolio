import React from "react";
import { FaChartBar, FaFileExcel, FaGitAlt, FaDocker, FaFigma, FaProjectDiagram } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

function AboutTool() {
  return (
    <div className="tools-section">
      <h1>
        <span className="purple">Tools</span> I Use
      </h1>
      <div className="tools-grid">
        <FaChartBar title="PowerBI" />
        <FaFileExcel title="Microsoft Excel" />
        <SiPostman title="Postman" />
        <FaGitAlt title="Git" />
        <FaDocker title="Docker" />
        <FaFigma title="Figma" />
        <FaProjectDiagram title="Draw.io / UML Tools" />
      </div>
    </div>
  );
}

export default AboutTool;
