import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaHackerrank, FaCode } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="footer-section" id="contact">
      <Container>
        <Row>
          <Col md={6} className="contact-details">
            <h4>Contact Me</h4>
            <p><FaEnvelope /> &nbsp; sairishipalavalasa1108@gmail.com</p>
          </Col>
          <Col md={6} className="social-links">
            <h4>Find Me On</h4>
            <div className="icons">
              <a href="https://github.com/RISHI85" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sairishipalavalasa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.hackerrank.com/sairishi1108" target="_blank" rel="noopener noreferrer"><FaHackerrank /></a>
              <a href="https://leetcode.com/sairishipalavalasa/" target="_blank" rel="noopener noreferrer"><FaCode /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center copyright">
            <p>&copy; {new Date().getFullYear()} Sai Rishi Palavalasa. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
