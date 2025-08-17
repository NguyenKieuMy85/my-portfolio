import React from "react";
import {
  SiPython,
  SiR,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiFirebase,
} from "react-icons/si";

function AboutTech() {
  return (
    <div className="skills-section">
      <h2>
        Professional <span style={{ color: "#00C4CC" }}>Skillset</span>
      </h2>
      <div className="skills-grid">
        <SiPython title="Python" />
        <SiR title="R" />
        <SiHtml5 title="HTML5" />
        <SiCss3 title="CSS3" />
        <SiReact title="ReactJS" />
        <SiNodedotjs title="NodeJS" />
        <SiMongodb title="MongoDB" />
        <SiPostgresql title="PostgreSQL" />
        <SiOracle title="Oracle" />
        <SiFirebase title="Firebase" />
      </div>
    </div>
  );
}

export default AboutTech;
