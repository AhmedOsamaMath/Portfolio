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
              I fell in love with programming and data science, and I have learned a lot along the way, constantly striving to grow and improve.
              <br /><br />
              I am fluent in languages like <i><b className="purple">Python and SQL</b></i>, with experience in libraries such as <i><b className="purple">Pandas, NumPy, and TensorFlow</b></i>.
              <br /><br />
              My field of interest lies in <i><b className="purple">applying data science</b></i> to solve real-world problems, <i><b className="purple">building machine learning models</b></i>, and <i><b className="purple">exploring the potential of AI.</b></i>
              <br /><br />
              Whenever possible, I apply my passion for data by <i><b className="purple">developing insightful visualizations</b></i>, <i><b className="purple">creating predictive models</b></i>, and leveraging advanced techniques in machine learning and deep learning to turn raw data into <i><b className="purple">actionable insights.</b></i>
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
