import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCards";
import Particle from "../Particle";
import web from "../../Assets/web.png";
import mobile from "../../Assets/mobile.png";
import ContactForm from "./ContactForm";

function Services() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Services </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are the services I offer on Fiverr.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ServiceCard
                            title="AI Powered Web Application"
                            description="I will build your AI-powered web application using React and Node.js. With 7+ years of experience, I deliver complete solutions including RESTful APIs, database integration, and cloud deployment on AWS/Azure/Firebase. Whether you need a SaaS platform, business dashboard, or AI chatbot, I'll build a modern, scalable solution."
                            link="https://www.fiverr.com/s/WEpVja7"
                            imgPath={web}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ServiceCard
                            title="AI Powered Mobile App"
                            description="I will build your Flutter app with AI features. With 2+ years of experience in Flutter and React Native, I create clean, responsive, and high-performance apps for Android and iOS. My services include API & database integration, AI chatbot/automation, and modern UI/UX design, ensuring a seamless user experience from concept to deployment."
                            link="https://www.fiverr.com/s/7YpwAex"
                            imgPath={mobile}
                        />
                    </Col>
                </Row>

                <ContactForm />
            </Container>
        </Container >
    );
}

export default Services;
