import React from 'react';
import About from './About';
import Contact from './Contact';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../assests/giff.gif';
import Type from './Type';
import Experience from './Experience';

import './Home.css';

const Home = () => {
  return (
    <>
      <section id="home" className="section-reveal">
        <Container fluid className="home-section">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <div className="reveal-left">
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                  </h1>

                  <h1 className="heading-name reveal">
                    I'm <strong className="main-name">Sai Rishi Palavalasa</strong>
                  </h1>

                  <div style={{ padding: 50, textAlign: "left" }} className="reveal-up">
                    <Type />

                    <div className="home-links">
                      <a href="#resume-buttons" className="home-link-text">Resume?</a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <div className="reveal-right">
                  <img
                    src={image}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section id="about"  className="section-reveal">
        <About />
      </section>

      <Experience />

      <section id="contact" className="section-reveal">
        <Contact />
      </section>
    </>
  );
};

export default Home;
