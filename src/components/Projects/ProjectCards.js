import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.githubLink && (
          <Button
            variant="primary"
            href={props.githubLink}
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}

        {props.kaggleLink && (
          <Button
            variant="primary"
            href={props.kaggleLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaKaggle /> &nbsp;
            {"Kaggle"}
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
