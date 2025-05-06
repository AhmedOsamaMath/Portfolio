import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaLinkedinIn, FaKaggle 
} from "react-icons/fa";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Building impactful software, one line of code at a time.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>ahmedosamamath@gmail.com</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/zold/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.kaggle.com/ahmedosamamath"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaKaggle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/AhmedOsamaMath"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/@AhmedOsamaMath"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
                </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/AhmedOsamaMath"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
