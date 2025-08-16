import React from "react";
import introImg from "../../assets/images/image.png";

const Intro = () => {
  return (
    <section className="intro">
  <div className="intro-content">
    <h2>LET ME INTRODUCE MYSELF</h2>

    <p>
      I am excited to begin my professional journey as a Business Analyst Intern.
    </p>

    <p>
      I am genuinely interested in understanding business needs, contributing to analytical tasks, 
      and supporting teams in identifying opportunities for improvement.
    </p>

    <p>
      I believe that working in a real-world environment will help me sharpen my problem-solving mindset, 
      improve communication with stakeholders, and better understand the role of a Business Analyst in 
      bridging business and technology.
    </p>
  </div>

  <div className="intro-image">
    <img src={introImg} alt="Intro" />
  </div>
</section>

  );
};

export default Intro;
