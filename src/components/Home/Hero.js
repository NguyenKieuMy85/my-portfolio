import React from "react";
import heroImg from "../../assets/images/IMG_1354.JPG"; // ảnh bạn thay bằng file của bạn
import TypingLine from "../TypingLine"; 

const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-content">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <h2>MY NAME IS NGUYEN KIEU MY</h2>
        <h3>
            <TypingLine text="My Major is Information System" speed={100} eraseSpeed={60} delay={2000} />
        </h3>
        
    </div>
    <div className="hero-image">
        <img src={heroImg} alt="Hero" />
    </div>
    </section>
  );
};

export default Hero;
