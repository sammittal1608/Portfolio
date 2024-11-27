import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/SM.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { gtag } from "../Utility/analytics";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Track navigation link clicks
  const trackNavClick = (linkName) => {
    if (typeof gtag === "function") {
      gtag("event", "navbar_click", {
        event_category: "navigation",
        event_label: linkName,
      });
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Home Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpanded(false);
                  trackNavClick("Home");
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {
                  updateExpanded(false);
                  trackNavClick("About");
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => {
                  updateExpanded(false);
                  trackNavClick("Projects");
                }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {
                  updateExpanded(false);
                  trackNavClick("Resume");
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* GitHub Button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/sammittal1608/Portfolio"
                target="_blank"
                className="fork-btn-inner"
                onClick={() => trackNavClick("GitHub")}
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            {/* LinkedIn Link */}
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/saiyam-mittal-2757a91a4/"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackNavClick("LinkedIn")}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> LinkedIn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
