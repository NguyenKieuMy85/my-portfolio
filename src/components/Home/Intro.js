import React from "react";
import introImg from "../../assets/images/image.png";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      {/* Section 1: Intro */}
      <section className="intro">
        <div className="intro-top">
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
        </div>
      </section>

      {/* Section 2: Social */}
      <section className="intro-social">
        <h2>FIND ME ON</h2>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="intro-social-links">
          <li className="social-icons">
            <a href="https://github.com/NguyenKieuMy85"><AiFillGithub /></a>
          </li>
          <li className="social-icons">
            <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-ki%E1%BB%81u-my-b9b981278/"><FaLinkedinIn /></a>
          </li>
          <li className="social-icons">
            <a href="https://www.facebook.com/kieu.my.928459"><AiFillFacebook /></a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Intro;
