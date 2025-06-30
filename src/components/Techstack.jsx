import React from 'react';
import './Techstack.css'; // Make sure this file exists

const domains = [
  {
    name: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express"]
  },
  {
    name: "Programming",
    skills: ["Python", "Java", "C", "JavaScript"]
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL"]
  },
  {
    name: "Tools",
    skills: ["VS Code", "Postman", "Git", "GitHub", "AWS"]
  }
];

const Techstack = () => {
  return (
    <div className="techstack">
      {domains.map((domain, index) => (
        <div key={index} className="tech-card">
          <h3 className="tech-title">{domain.name}</h3>
          <ul className="tech-list">
            {domain.skills.map((skill, idx) => (
              <li key={idx} className="tech-skill">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
