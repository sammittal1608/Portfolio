import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { gtag } from "../Utility/analytics";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // Function to track footer link clicks
  const trackFooterClick = (platform) => {
    if (typeof gtag === "function") {
      gtag("event", "footer_click", {
        event_category: "footer",
        event_label: platform,
      });
    }
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Saiyam Mittal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SM</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub Link */}
            <li className="social-icons">
              <a
                href="https://github.com/sammittal1608"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFooterClick("GitHub")} // Track GitHub click
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn Link */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/saiyam-mittal-2757a91a4/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFooterClick("LinkedIn")} // Track LinkedIn click
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
