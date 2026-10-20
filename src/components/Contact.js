
import { useState, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import emailjs from "@emailjs/browser";
import Earth from "./canvas/Earth";
import Stars from "./canvas/Stars";

export const Contact = () => {
  const initialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(initialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Sending...");
  setStatus({});

  try {
    await emailjs.send(
      "service_qx2vvwq",
      "template_izban9g",
      {
        name: formDetails.firstName,
        email: formDetails.email,
        message: formDetails.message,
      },
      {
        publicKey: "UMIFTgxZjg_G-Q3vp",
      }
    );

    setStatus({
      success: true,
      message: "Message sent successfully!",
    });
    setFormDetails(initialDetails);
  } catch (error) {
    console.error("EmailJS error:", error);
    setStatus({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  } finally {
    setButtonText("Send");
  }
};

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center contact-row">
          <Col xs={12} md={6} className="contact-form-column">
            <div className="contact-card">
              <p className="contact-eyebrow">GET IN TOUCH</p>
              <h2>Contact.</h2>

              <form onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="What's your name?"
                    value={formDetails.firstName}
                    onChange={(e) =>
                      onFormUpdate("firstName", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="What's your email?"
                    value={formDetails.email}
                    onChange={(e) =>
                      onFormUpdate("email", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    rows="5"
                    placeholder="What do you want to say?"
                    value={formDetails.message}
                    onChange={(e) =>
                      onFormUpdate("message", e.target.value)
                    }
                    required
                  />
                </div>

                {status.message && (
                  <p
                    className={`contact-status ${
                      status.success ? "success" : "danger"
                    }`}
                    role="status"
                  >
                    {status.message}
                  </p>
                )}

                <button
                  className="contact-submit"
                  type="submit"
                  disabled={buttonText === "Sending..."}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </Col>

          <Col xs={12} md={6} className="contact-image-column">
            <div className="contact-scene">
              <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[5, 5, 5]} intensity={2} />

                <Stars count={1800} />

                <Suspense fallback={null}>
                  <Earth />
                </Suspense>

                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={false}
                />
              </Canvas>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
