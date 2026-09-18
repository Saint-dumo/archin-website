import "../styles/Intro.css";
import introImage from "../assets/archin-hero.jpeg";
import Reveal from "./Reveal";
import StaggerText from "./StaggerText";

function Intro() {
  return (
    <section className="intro" id="studio">
      <Reveal className="intro-heading">
        <span className="intro-number">01</span>

        <StaggerText>
            <h2>
          From the first line
          <br />
          to the final detail.
        </h2>
        </StaggerText>
      </Reveal>

      <Reveal className="intro-content">
         <div className="intro-image">
          <img
            src={introImage}
            alt="ARCHIN architectural interior"
          />

          <span className="intro-image-label">
            ARCHIN INT'L — INTERIORS
          </span>
        </div>
       
        <StaggerText className="intro-copy">
          <p className="intro-lead">
            We believe exceptional spaces begin with a clear vision
            and come to life through thoughtful execution.
          </p>

          <p>
            From architectural design and interior spaces to construction
            and project delivery, every detail contributes to the final
            experience.
          </p>

          <a href="#services" className="intro-link">
            Discover what we do
            <span>↗</span>
          </a>
        </StaggerText>
      </Reveal>
    </section>
  );
}

export default Intro;