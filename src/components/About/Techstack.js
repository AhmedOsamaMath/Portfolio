import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJavascript1, DiJava, DiPhp, DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import {
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiJenkins,
  SiVisualstudiocode,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiAmazonaws,
  SiFirebase,
  SiNginx
} from "react-icons/si";

const TechCategory = ({ title, children }) => (
  <div>
    <h2 className="category-heading">{title}</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {children}
    </Row>
  </div>
);

const TechIcon = ({ children }) => (
  <Col xs={4} md={2} className="tech-icons">
    {children}
  </Col>
);

function Techstack() {
  return (
    <div>
      <TechCategory title="Programming Languages">
        <TechIcon><DiPython /></TechIcon>
        <TechIcon><DiJavascript1 /></TechIcon>
        <TechIcon><SiTypescript /></TechIcon>
        <TechIcon><DiJava /></TechIcon>
        <TechIcon><DiPhp /></TechIcon>
      </TechCategory>

      <TechCategory title="Frontend Development">
        <TechIcon><DiReact /></TechIcon>
        <TechIcon><SiNextdotjs /></TechIcon>
      </TechCategory>

      <TechCategory title="Backend & APIs">
        <TechIcon><DiNodejs /></TechIcon>
        <TechIcon><SiExpress /></TechIcon>
        <TechIcon><SiNginx /></TechIcon>
      </TechCategory>

      <TechCategory title="Databases">
        <TechIcon><SiMysql /></TechIcon>
        <TechIcon><SiPostgresql /></TechIcon>
        <TechIcon><DiMongodb /></TechIcon>
        <TechIcon><SiFirebase /></TechIcon>
      </TechCategory>

      <TechCategory title="DevOps & Tools">
        <TechIcon><SiDocker /></TechIcon>
        <TechIcon><SiJenkins /></TechIcon>
        <TechIcon><SiAmazonaws /></TechIcon>
        <TechIcon><SiGit /></TechIcon>
        <TechIcon><SiGithub /></TechIcon>
        <TechIcon><SiLinux /></TechIcon>
        <TechIcon><SiVisualstudiocode /></TechIcon>
      </TechCategory>
    </div>
  );
}

export default Techstack;
