import "../styles/project-showcase.css";
import projectImage from "../assets/archin-project.jpeg";

function ProjectShowcase() {
  return (
    <section className="project-showcase" id="work">
      <div className="project-header">
        <div className="project-label">
          <span>04</span>
          <span>Selected work</span>
        </div>

        <p>
          A selection of spaces shaped through architecture,
          construction and considered interior design.
        </p>
      </div>

      <div className="featured-project">
        <div className="featured-project-image">
          <img
            src={projectImage}
            alt="Contemporary residential project by ARCHIN INT'L"
          />

          <span className="project-index">01 / 01</span>
        </div>

        <div className="featured-project-info">
          <div>
            <span className="project-category">
              Residential · Architecture
            </span>

            <h2>
              Contemporary
              <br />
              Residence
            </h2>
          </div>

          <div className="project-details">
            <div>
              <span>Discipline</span>
              <strong>Architecture</strong>
            </div>

            <div>
              <span>Scope</span>
              <strong>Design + Build</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>Featured Project</strong>
            </div>
          </div>

          <a href="#project" className="project-link">
            Explore project
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;