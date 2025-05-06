import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmed Osama </span>
            from <span className="purple"> Mansoura, Egypt.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            I am a self-driven Software Engineer with a strong background in programming, problem-solving, and building scalable applications
            <br />
            I have completed several professional certifications, including the 9-Month Professional Diploma from the Information Technology Institute (ITI), which provided intensive training in software engineering and development best practices.
            <br />
            <br />
            Apart from software engineering, here are a few things I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching and mentoring students in mathematics
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new advancements in technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging in open-source projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build software that solves real-world problems and creates impact!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmed Osama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
