import React from "react";
import heroImg from "../../assets/images/IMG_1354.JPG"; // ảnh bạn thay bằng file của bạn

const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-content">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <h2>MY NAME IS NGUYEN KIEU MY</h2>
        <h3>My Major is Information System</h3>
        <button className="btn-primary">Get Started</button>
    </div>
    <div className="hero-image">
        <img src={heroImg} alt="Hero" />
    </div>
    </section>
  );
};

export default Hero;
