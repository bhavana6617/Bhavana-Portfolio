
import { Container } from "react-bootstrap";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    company: "Infosys",
    role: "System Associate",
    period: "May 2022 – May 2024",
    location: "Bangalore, India",
    logo: "/images/infosys-logo.png",
    skills: ["Python", "Oracle SQL", "Power BI", "Excel", "Data Analytics"],
     points: [
      "Automated data processing and reporting workflows using Python and SQL to improve reporting efficiency.",
      "Developed Power BI dashboards and Excel reports, reducing manual reporting time by 50%.",
      "Analyzed large datasets using Python and Oracle SQL to support process monitoring and improve process adherence by 17%.",
      "Supported A/B testing and statistical analysis to evaluate user behavior and contribute to an 8% increase in user engagement.",
      "Contributed to fraud-risk analysis and model validation, supporting a 15% improvement in prediction accuracy.",
    ],
  },
  {
    id: 2,
    company: "Rooman Technologies",
    role: "Networking Intern",
    period: "October 2021 – February 2022",
    location: "Bangalore, India",
    logo: "/images/rooman-logo.png",
    skills: [
      "Networking",
      "CCNA Fundamentals",
      "Switches",
      "Network Protocols",
    ],
    points: [
      <>
        Gained practical exposure to networking concepts, protocols, and
        network infrastructure.
      </>,
      <>
        Learned about network switches, configuration, and connectivity.
      </>,
      <>
        Participated in technical presentations and practical networking
        activities.
      </>,
      <>
        Developed foundational knowledge of network troubleshooting.
      </>,
    ],
  },
];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <div className="experience-heading">
          <p className="section-subtitle">MY PROFESSIONAL JOURNEY</p>
          <h2>Work Experience</h2>
          <p className="experience-intro">
            My professional experience across software, data, and networking.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <div
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
              key={item.id}
            >
              <div className="timeline-logo">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add(
                      "logo-fallback"
                    );
                    e.currentTarget.parentElement.setAttribute(
                      "data-initial",
                      item.company === "Infosys" ? "I" : "R"
                    );
                  }}
                />
              </div>

              <article className="experience-card">
                <span className="experience-period">{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p className="experience-location">{item.location}</p>

                <ul className="experience-list">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
