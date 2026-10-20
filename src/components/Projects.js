
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "LexAI – AI-Powered Legal Contract Risk Analyzer",
      description:
        "AI-powered legal contract risk analyzer using RAG, LLMs, and document retrieval.",
      technologies: ["Python", "FastAPI", "RAG", "Pinecone"],
      imgUrl: "/images/lexai.png",
      githubUrl: "https://github.com/bhavanarasamsetti/legal-contract-risk-analyzer",
      demoUrl: "https://legal-contract-risk-analyzer-blue.vercel.app",
    },
    {
      title: "PayFlow Support Intelligence",
      description:
        "AI-powered customer support automation platform that classifies tickets, detects priority and sentiment, and orchestrates workflows across Google Sheets, Notion, and Slack using n8n.",
      technologies: ["React", "Node.js", "Express", "OpenAI GPT-4.1 Mini", "n8n","Docker"],
      imgUrl: "/images/payflow.png",
      githubUrl: "https://github.com/bhavanarasamsetti/payflow-support-intelligence",
      demoUrl: "https://payflow-support-intelligence.vercel.app",
    },
    {
      title: "Chemnitz Culture Map",
      description:
        "An interactive cultural map for exploring places in Chemnitz, with location details, opening hours, directions, and user comments.",
      technologies: ["JavaScript", "Leaflet.js", "OpenStreetMap", "Node.js", "Express.js", "MongoDB"],
      imgUrl: "/images/chemnitz-culture-map.png",
      githubUrl: "https://github.com/bhavanarasamsetti/chemnitz-culture-map",
      demoUrl: "https://chemnitz-culture-backend.onrender.com",
    },
    {
      title: "NutriXR",
      description:
        "An interactive nutrition platform combining fruit nutrition insights, food comparison, recipe suggestions, and immersive AR experiences.",
      technologies: ["JavaScript", "React", "WebXR", "Three.js"],
      imgUrl: "/images/nutrixr.png",
      githubUrl: "https://github.com/bhavanarasamsetti/NutriXR",
      demoUrl: "https://nutri-xr.vercel.app/",
    },
    {
  title: "FinSight360 – Financial Analytics Dashboard",
  description:
    "Analyzed 10K+ financial transactions using Python, SQL, and Power BI to uncover revenue trends, customer patterns, and fraud indicators. Built interactive dashboards with a star schema, DAX measures, and KPIs for month-over-month growth and channel-level fraud analysis.",
  technologies: [
    "Python",
    "Pandas",
    "SQL",
    "Power BI",
    "DAX",
    "Excel",
  ],
  imgUrl: "/images/finsight360.png",
  githubUrl: "https://github.com/bhavanarasamsetti/FinSight360",
  demoUrl: "", // No live web demo; the dashboard runs in Power BI Desktop
},
    
{
  title: "EdLearn – Customer Churn & Acquisition Analytics",
  description:
    "Analyzed customer churn, retention, and acquisition channel performance for an online learning platform. Cleaned customer and subscription data, validated metrics using SQL, and built interactive Power BI dashboards with a star schema and DAX measures for 30-, 60-, and 90-day retention analysis.",
  technologies: [
    "Power BI",
    "SQL",
    "Excel",
    "DAX",
    "Data Modeling",
  ],
  imgUrl: "/images/edlearn.png",
  githubUrl:
    "https://github.com/bhavanarasamsetti/edlearn-churn-analysis",
  demoUrl: "", // Power BI Desktop project; no live web demo specified
},

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <div className="project-heading">
                    <h2>Projects</h2>
                    <p>
                      A selection of projects showcasing my work in
                      intelligent applications, software engineering, and
                      data analytics.
                    </p>
                  </div>

                  <Row className="project-grid">
                    {projects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt=""
      />
    </section>
  );
};
