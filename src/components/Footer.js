
import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Github } from "react-bootstrap-icons";

import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <div className="footer-social-icon">
              <a
                href="https://www.linkedin.com/in/bhavana-rasamsetti-a89191349"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/bhavanarasamsetti"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={24} />
              </a>

              <a
                href="mailto:bhavanarasamsetti@gmail.com"
                aria-label="Send email"
              >
                <Envelope size={24} /> 
              </a>
            </div>

            <p className="footer-copyright">
              © {new Date().getFullYear()} Bhavana Rasamsetti. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
