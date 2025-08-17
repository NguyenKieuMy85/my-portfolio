import React from "react";
import AboutTech from "./AboutTech";
import AboutTool from "./AboutTool";

function About() {
  return (
    <div className="about-section">
      <h1>
        About <span className="purple">Me</span>
      </h1>
      <div className="about-text">
            <p>
                Hello 👋, my name is <b>Nguyen Kieu My</b>. I am pursuing a career path as a 
                <b> Business Analyst / Data Analyst</b>. I have hands-on experience with 
                <b> Web Development, Database Management</b>, and <b>Data Visualization</b>. 
                I am passionate about learning new technologies and applying them to real-world projects 
                in order to create valuable solutions.
            </p>
        </div>

      {/* Professional Skillset */}
      <AboutTech />

      {/* Tools I Use */}
      <AboutTool />
    </div>
  );
}

export default About;
