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
        image: educationSystem,
        title: "Retail BI and Return Prediction System",
        content: "The purpose of this project is to design and implement a Business Intelligence (BI) solution for retail and supply chain data. By applying ETL processes, data modeling, OLAP analysis, visualization, and predictive data mining, the project aims to transform raw operational data into actionable insights that improve efficiency, enhance customer satisfaction, and support strategic decision-making.",
        github: "https://github.com/NguyenKieuMy85/RetailPerformanceOptimization.git"
    },
    {
        image: biProject,
        title: "Academic Research Matching System",
        content: "The purpose of this project is to develop an academic matching system that connects students and lecturers based on their skills, research interests, and expertise. By applying content-based filtering and visualization techniques, the system helps students find suitable supervisors for research or graduation projects, while enabling lecturers to identify students whose interests align with their academic domains.",
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
