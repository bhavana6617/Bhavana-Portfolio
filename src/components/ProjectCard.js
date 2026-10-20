
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  technologies = [],
  imgUrl,
  githubUrl,
  demoUrl,
}) => {
  return (
    <Col xs={12} md={6} className="project-column">
      <article className="proj-imgbx">
       
<div className="project-image-wrapper">
  <img
    src={imgUrl}
    alt={`${title} project preview`}
    loading="lazy"
  />
</div>


        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>

          <div className="project-technologies">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}

            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </Col>
  );
};
