import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Project({ title, description, deployedLink, githubLink, image }) {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Card className="shadow-lg" style={{ width:"18rem" }}>
            <Card.Header className="p-3">
              <h4 className="center">{title}</h4>
            </Card.Header>
            <Card.Img src={image} />
            <Card.Body>
              <Card.Title>Technologies</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button href={githubLink} className="ml-3">Github Link</Button>
              <Button href={deployedLink}>Deployed Link</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
