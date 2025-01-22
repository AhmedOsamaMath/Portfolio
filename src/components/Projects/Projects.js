import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wuzzufDataset from "../../Assets/Projects/wuzzuf-dataset.png";
import titanic from "../../Assets/Projects/titanic.png";
import chess from "../../Assets/Projects/chess.png";
import snake from "../../Assets/Projects/snake.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wuzzufDataset}
              title="Wuzzuf Job Postings Dataset 🕴"
              description="Analyzed the Wuzzuf job dataset to uncover trends in job demand, skills requirements, and industry distribution. Applied data cleaning, exploratory data analysis (EDA), and visualization techniques to present insights, focusing on job market trends and candidate requirements in the MENA region."
              kaggleLink="https://www.kaggle.com/datasets/ahmedosamamath/wuzzuf-dataset"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titanic}
              title="Titanic Survival Prediction 🛳"
              description="Completed the Titanic Survival Prediction competition on Kaggle, achieving a score of 0.75837. Utilized data preprocessing, feature engineering, and machine learning models to predict passenger survival."
              kaggleLink="https://www.kaggle.com/code/ahmedosamamath/titanic-survival-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              title="Snake Game 🐍"
              description="Created a modern Snake game in Python using Pygame. This version includes configurable difficulty levels, dynamic food spawning, collision detection, and real-time score tracking. It features intuitive controls, a customizable settings file, and a smooth gameplay experience."
              githubLink="https://github.com/AhmedOsamaMath/snake-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              title="Chess Game ♟"
              description="Developed a basic chess game in Python using Pygame. The project includes a graphical user interface, fundamental chess logic, and a simple computer AI opponent. Features like check/checkmate detection and piece movement validation are implemented, with plans for future enhancements including advanced AI and special chess moves."
              githubLink="https://github.com/AhmedOsamaMath/chess-game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
