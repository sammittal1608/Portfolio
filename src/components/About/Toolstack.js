import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiNetlify,
  SiWindows,
  SiFigma,
  SiAndroidstudio,
  SiVisualstudio,
  SiOpenai
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <SiWindows size={50} />
        <p>Windows</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiVisualstudiocode size={50} />
        <p>VS Code</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiVisualstudio size={50} />
        <p>Visual Studio</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiPostman size={50} />
        <p>Postman</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiSlack size={50} />
        <p>Slack</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiNetlify size={50} />
        <p>Netlify</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiFigma size={50} />
        <p>Figma</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiAndroidstudio size={50} />
        <p>Android Studio</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiOpenai size={50} />
        <p>ChatGPT</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
