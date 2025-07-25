import React from "react";
import "./Projects.css";

const projectData = [
  {
    name: "Campus Connect",
    description:
      "An AI-powered chatbot that resolves student queries instantly across academics, facilities, and campus life. Designed to reduce manual workload on administration staff using Gemini API.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "CSS"],
    link: "https://github.com/RISHI85/Campus-Connect",
    demo: "",//Not deployed yet
  },
  {
    name: "Food Delivery App",
    description:
      "A full-stack food ordering web application built with MERN stack. Users can browse menus, place orders, and view details through a smooth user interface.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "CSS"],
    link: "https://github.com/RISHI85/Food-Delivery",
    demo: "", // Not deployed yet
  },
  {
    name: "Real-Time Chat App",
    description:
      "A real-time one-to-one chat app using Socket.io for bidirectional messaging. Supports live messaging, dynamic chat windows, and message persistence.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    link: "https://github.com/RISHI85/Chatty-Real-time-chat-App",
    demo: "https://chatty-rishi.vercel.app/login",
  },
];

const Projects = () => {
  const handleDemoClick = (e, demoUrl) => {
    if (!demoUrl) {
      e.preventDefault();
      alert("Live demo not yet deployed!");
    }
  };

  return (
    <div className="projects-section" id="projects">
      <div className="section-divider">
        <h2 className="section-title">
          <span className="purple">My Projects</span>
        </h2>
      </div>
      <div className="project-cards-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Code →
              </a>
              <a
                href={project.demo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => handleDemoClick(e, project.demo)}
                style={{ marginLeft: "15px" }}
              >
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
