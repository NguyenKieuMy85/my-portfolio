import React from "react";
import ProjectCard from "./ProjectCard";
import mediChat from "../../assets/images/mediChat.png";
import waterReminder from "../../assets/images/WaterReminder.png";
import biProject from "../../assets/images/BI.png";
import educationSystem from "../../assets/images/educationSystem.png";

const Projects = () => {
  const projectList = [
    {
      image: mediChat,
      title: "MediChat - Healthcare Chatbot",
      content: "MediChat aims to fill the gap by offering a user-friendly, AI-driven system specifically designed for healthcare professionals, built with React, Node.js, and SQL Server. It provides a platform for doctors to interact with patients, manage appointments, and access medical records securely.",
      github: "https://github.com/AvryG99/EHR_AGENT_UI.git"
    },
    {
      image: waterReminder,
      title: "MP Water Reminder Application",
      content: "The Water Reminder App is a simple yet effective solution to help users stay hydrated throughout the day. Built with Flutter and integrated Firebase, this app allows users to set reminders for drinking water, track their daily intake, and receive notifications to encourage healthy hydration habits.",
      github: "https://github.com/TanPhat0507/water_reminder.git"
    },
    {
        image: biProject,
        title: "Retail BI and Return Prediction System",
        content: "Developed ETL pipelines and data warehouse schema using SSIS; built OLAP cubes in SSAS for supply chain and sales data analysis. Created interactive dashboards in Power BI and Excel; applied machine learning models to predict product return rates.",
        github: "https://github.com/NguyenKieuMy85/RetailPerformanceOptimization.git"
    },
    {
        image: educationSystem,
        title: "Academic Research Matching System",
        content: "Built a recommendation system to match researchers to topics based on keyword and field similarity. Processed researcher profiles and applied TF-IDF with Cosine Similarity in Python to rank relevance scores.",
        github: "https://github.com/NguyenKieuMy85/MatchingAcademic.git"
    }
  ];

  return (
    <div className="project-section">
  <div className="projects-header">
    <h1>MY RECENT WORKS</h1>
    <p>Here are a few projects I've worked on recently.</p>
  </div>

  <div className="projects-grid">
    {projectList.map((project, index) => (
      <ProjectCard
        key={index}
        image={project.image}
        title={project.title}
        content={project.content}
        github={project.github}
      />
    ))}
  </div>
</div>
  );
};

export default Projects;
