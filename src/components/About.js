import React from 'react';
import ProfilePic from "../assets/images/profilePic.png";
import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>

            <img className="mb-5" src={ProfilePic} alt="Cheryl Barclay" />

                
             
          </Card>
        </Col>
        <Col>
        <p>text part 1</p>
        <p>text part 2</p>
        <p>text part 3</p>
        </Col>
      </Row>
             
         
    </Container>
  )
}

export default About
