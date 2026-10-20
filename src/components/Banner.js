
import { Container, Row, Col } from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1 className="hero-title">
                    Hi, I'm
                    <br />
                    <span>Bhavana Rasamsetti.</span>
                  </h1>

                 <h2 className="hero-subtitle">
  AI-Focused Full-Stack Engineer
  <span> | LLM Applications | Python &amp; SQL</span>
</h2>

                  <p className="hero-description">
  I build web applications and AI-powered solutions using modern
  software technologies, LLMs, and workflow automation. With 2+
  years of experience in enterprise data analytics at Infosys,
  I'm currently pursuing an M.Sc. in Web Engineering at TU Chemnitz.
</p>

                 <div className="hero-specialties">
  <span>Full-Stack Development</span>
  <span>Generative AI &amp; LLMs</span>
  <span>RAG &amp; AI Applications</span>
  <span>Data Analytics &amp; Automation</span>
</div>

                 
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`profile-image-wrapper ${
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }`}
                >
                  <div className="profile-glow">
                    <img
                      src="/images/bhavana-profile.png"
                      alt="Bhavana Rasamsetti"
                      className="profile-image"
                    />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
