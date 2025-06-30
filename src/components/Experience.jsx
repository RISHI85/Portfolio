import React from 'react';
import './Experience.css';
// import 

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* Experience Heading */}
      <div className="section-divider reveal-up">
        <h2 className="section-title">Experience</h2>
      </div>

      {/* Timeline Item */}
      <div className="timeline reveal">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="company-name">Hashtek Solutions</h3>
            <p className="role">Intern – AWS Cloud Services</p>
            <p className="duration">June 2024 – July 2024</p>
            <ul>
              <li>Worked with AWS EC2 for deploying and managing virtual servers.</li>
              <li>Configured IAM roles and policies for secure access control.</li>
              <li>Managed S3 buckets for storage and backups.</li>
              <li>Gained hands-on experience with core AWS services and architecture.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications Heading */}
      <div className="section-divider reveal-up">
        <h2 className="section-title">Certifications</h2>
      </div>

      {/* Certification List */}
      <ul className="certification-list reveal">
        <li>Certified System Administrator (CSA) and Certified Application Developer (CAD) ServiceNow (2025)</li>
        <li>Full Stack Web Development- UDEMY (2024)</li>
        <li>Internship Certificate – Hashtek Solutions on AWS (2024)</li>
        <li> Core Java- Coursera (2024)</li>
        <li>Google Cloud Computing Fundamentals & Generative AI- GDSC (2023)</li>
      </ul>

      {/* Resume Buttons */}
      <div className="resume-download reveal-up" id="resume-buttons">
        <a
          href='/test.pdf'
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>
        <a href='/test.pdf' download className="download-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Experience;
