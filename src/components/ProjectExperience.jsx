import "../styles/project-experience.css";

function ProjectExperience() {
  return (
    <section className="project-experience" id="project">

      <div className="project-experience-header">

        <div className="project-experience-label">
          <span>05</span>
          <span>Project experience</span>
        </div>

        <div className="project-experience-title">
          <span>Residence 01</span>

          <h2>
            Architecture
            <br />
            <em>in context.</em>
          </h2>
        </div>

        <div className="project-experience-meta">
          <div>
            <span>Discipline</span>
            <strong>Architecture</strong>
          </div>

          <div>
            <span>Scope</span>
            <strong>Design + Build</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>Port Harcourt, Nigeria</strong>
          </div>
        </div>

      </div>


      <div className="project-hero-image">

        <img
          src="/src/assets/archin-project.jpeg"
          alt="ARCHIN residential project"
        />

        <div className="project-image-caption">
          <span>Residential Project</span>
          <span>01 / 04</span>
        </div>

      </div>


      <div className="project-story">

        <div className="project-story-label">
          <span>The idea</span>
        </div>

        <div className="project-story-content">

          <h3>
            Designed around
            <br />
            <em>the way people live.</em>
          </h3>

          <p>
            A considered residential approach where architecture,
            proportion, materials and natural light work together
            to create a balanced living environment.
          </p>

          <p>
            From the initial architectural vision through the
            construction process, every stage contributes to
            the character of the final space.
          </p>

        </div>

      </div>


      <div className="project-gallery">

        <div className="project-gallery-large">
          <img
            src="/src/assets/archin-construction.jpeg"
            alt="Residential project during construction"
          />

          <span>Construction</span>
        </div>

        <div className="project-gallery-small">
          <img
            src="/src/assets/archin-project.jpeg"
            alt="Residential architectural visualization"
          />

          <span>Exterior study</span>
        </div>

      </div>


      <div className="project-explore">

        <div>
          <span className="project-explore-number">05 / 05</span>

          <h3>
            Explore
            <br />
            <em>the space.</em>
          </h3>
        </div>

        <button className="project-explore-button">
          Enter project
          <span>↗</span>
        </button>

      </div>

    </section>
  );
}

export default ProjectExperience;