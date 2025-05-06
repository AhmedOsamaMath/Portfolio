import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { 
  FaLinkedinIn, FaKaggle 
} from "react-icons/fa";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and software development, and I’ve been on a continuous journey to build, learn, and grow as an engineer.
              <br /><br />
              I am fluent in languages like <i><b className="purple">Python and JavaScript</b></i>, with experience in frameworks such as <i><b className="purple">React, Node.js, and Express</b></i>.
              <br /><br />
              My field of interest lies in <i><b className="purple">developing full-stack applications</b></i>, <i><b className="purple">designing scalable backend systems</b></i>, and <i><b className="purple">solving real-world problems through code.</b></i>
              <br /><br />
              Whenever possible, I apply my skills by <i><b className="purple">building responsive web apps</b></i>, <i><b className="purple">automating workflows</b></i>, and contributing to <i><b className="purple">open-source projects</b></i> that have real impact.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zold/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/ahmedosamamath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaKaggle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/AhmedOsamaMath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@AhmedOsamaMath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/AhmedOsamaMath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
