import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDotnet,
  DiAngularSimple,
  DiHtml5,
  DiCss3,
  DiFirebase,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiFlutter,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <DiHtml5 size={50} />
        <p>HTML5</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiCss3 size={50} />
        <p>CSS3</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiJavascript1 size={50} />
        <p>JavaScript</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiReact size={50} />
        <p>React</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiAngularSimple size={50} />
        <p>Angular</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiNodejs size={50} />
        <p>Node.js</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiNextdotjs size={50} />
        <p>Next.js</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiFirebase size={50} />
        <p>Firebase</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
      <SiFlutter size={50} />
      <p>Flutter</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiDotnet size={50} />
        <p>.NET</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiMongodb size={50} />
        <p>MongoDB</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiJava size={50} />
        <p>Java</p>
      </Col>
     
      {/* <Col xs={6} md={3} className="tech-icons">
        <TbBrandGolang size={50} />
        <p>Golang</p>
      </Col> */}
      <Col xs={6} md={3} className="tech-icons">
        <DiGit size={50} />
        <p>Git</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiPostgresql size={50} />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiPython size={50} />
        <p>Python</p>
      </Col>
    </Row>
  );
}

export default Techstack;
