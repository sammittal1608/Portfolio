import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trainee from "../../Assets/Projects/training-app.png";
import swigit from "../../Assets/Projects/swigit.png";
import passport from "../../Assets/Projects/passport.png";
import crypto from "../../Assets/Projects/crypto-currency.png";
import employee from "../../Assets/Projects/employee-directory.png";
import CarPool from "../../Assets/Projects/carpool.png";

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
              imgPath={crypto}
              isBlog={false}
              title="Crypto Hunter"
              description="Real-Time Cryptocurrency Tracker Built with React.js, CoinGecko API, and Styled Components, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/sammittal1608/Crypto-hunter"
              demoLink="https://crypto-hunter.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarPool}
              isBlog={false}
              title="Carpool"
              description="A Ride-Sharing and Commuting Management Platform Built with Angular and .NETA Comprehensive Ride-Sharing and Commuting Management Web Application for Booking and Offering Rides, Built with Angular and .NET ."
              ghLink="https://github.com/sammittal1608/CarPool-Angular"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passport}
              isBlog={false}
              title="Passport Scanner System"
              description="Real-Time Document Scanning and Verification Interface for Hotels and Hospitality Services, Built with React.js and .NET ."
              ghLink="https://github.com/sammittal1608/passport-scanner-app"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trainee}
              isBlog={false}
              title="Training Tracker"
              description="Developed a comprehensive training management system using Blazor (frontend) and .NET Web API (backend) for tracking intern progress, with Identity Server integration for secure authentication and authorization."
              ghLink="https://github.com/sammittal1608/training-app"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Directory"
              description="Developed an Angular-based employee directory website with .NET Core Web API backend. Facilitated employee access to details and implemented filtering by department, office, and job tle for enhanced user experience."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swigit}
              isBlog={false}
              title="Swagit"
              description="Developed a clone of an online food ordering platform, Swagit, using only HTML and CSS. The platform allows users to explore and order from a variety of restaurants."
              ghLink="https://github.com/sammittal1608/Swiggy-Clone"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
