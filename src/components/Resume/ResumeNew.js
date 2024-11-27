import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Saiyam_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { gtag } from "../../Utility/analytics";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  // Handle window resizing
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Function to handle tracking resume download
  const trackResumeDownload = () => {
    if (typeof gtag === "function") {
      gtag("event", "resume_download", {
        event_category: "engagement",
        event_label: "Download CV",
      });
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            onClick={trackResumeDownload} 
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
