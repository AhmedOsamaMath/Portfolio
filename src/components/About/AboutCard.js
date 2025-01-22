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
            I am a self-driven data science enthusiast with a strong background in programming and data analysis.
            <br />
            I have completed several professional certifications, including the Udacity Data Scientist Nanodegree, Udemy Data Science Bootcamp, and Machine Learning Nanodegree.
            <br />
            <br />
            Apart from data science, some other activities that I love to do!
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
            "Strive to turn data into insights that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmed Osama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
