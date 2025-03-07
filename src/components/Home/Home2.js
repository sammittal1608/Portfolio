import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const trackSocialClick = (platform) => {
    if (typeof window.gtag === "function") {
      console.log(`${platform} click tracked`);
      window.gtag("event", "social_click", {
        event_category: "social",
        event_label: platform,
      });
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript, Python and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Artificial Intelligence.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with
              <b className="purple"> C# .NET, Node.js</b> and
              <i>
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              , such as{" "}
              <i>
                <b className="purple">React.js</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Angular</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sammittal1608"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  onClick={() => trackSocialClick("GitHub")}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saiyam-mittal-2757a91a4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  onClick={() => trackSocialClick("LinkedIn")}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
