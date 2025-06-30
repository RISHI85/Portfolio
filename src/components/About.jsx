import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "./Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../assests/mine.jpg";

import "./About.css";
import Button from "react-bootstrap/Button";
import Projects from "./Projects";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      {/* <Particle /> */}
      <Container>
        {/* Header Quote */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ textAlign: "center" }} className="reveal-up">
            <h2 style={{ marginBottom: 0 }}>
              "I Know That <span className="purple">Consistency</span> Is The
              Key To Owe A <span className="purple">Skill </span>!"
            </h2>
          </Col>
        </Row>

        {/* About Card and Image */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            className="reveal-left"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            className="about-img reveal-right"
            style={{
              paddingTop: "60px",
              paddingBottom: "50px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{
                borderRadius: "20px",
                background: "transparent",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
                zIndex: 2,
                position: "relative",
              }}
            />
          </Col>
        </Row>

        {/* Projects */}
        <div className="reveal">
          <Projects />
        </div>

        {/* Skills Heading */}
        <h1 className="project-heading reveal-up" id="skills">
          <div className="section-divider">
            <span className="purple">
              Professional <strong className="purple">Skillset </strong>
            </span>
          </div>
        </h1>

        {/* Tech Stack */}
        <div className="reveal">
          <Techstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;
