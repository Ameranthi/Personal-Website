import React from 'react'
import { Row, Col, CardColumns, Container, Card, CardTitle, CardText, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function skills() {
  return (

<div className="centered">
<Container>
    <h1 className="text-center"> Skills </h1>
    </Container>
    
    <Container>
    <Row>
  <Col sm="6">
    <Card body >
      <CardTitle tag="h4" className="text-center">
        Technical 
      </CardTitle>
      <CardText>
      <h5>Programming </h5> <p>Java, Python, PHP, Javascript, Swift, Kotlin, C#, HTML5, CSS </p>
<h5> Databases </h5> <p> MYSQL, SQL, MariaDB, HanaDB </p>
<h5> Tools </h5> <p> Unity, IntelliJ, Git, PyCharm, PHPStorm, VirtualBox, NMap, Wireshark,
   Android Studio, Microsoft Office, Linux, SAP: Frun, Hana </p>
<h5> APIs </h5> <p> jQuery, JUnit </p>
<h5> Frameworks </h5> <p> React, Next.js </p>
      </CardText>
    </Card>
  </Col>
  <Col sm="6">
    <Card body >
      <CardTitle tag="h4" className="text-center">
        Design
      </CardTitle>
      <CardText>
      <h5> Design Skills </h5> <p> 
        UI design, UX design, AR Filter Design, Illustrations, Storyboarding, 2D Game Assets, Wireframing, Mobile App Design, Web App Design, Website Design, 3D design </p>

<h5> Design Tools </h5> <p> Photoshop, Illustrator, Clip Studio Paint, InDesign, Adobe Acrobat, Adobe XD, Blender, Adobe Sketch, Figma, Procreate </p>

      </CardText>
    </Card>
  </Col>
</Row>
</Container>
</div>
    )
}

