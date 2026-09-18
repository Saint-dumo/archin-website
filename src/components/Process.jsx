import "../styles/process.css";
import projectImage from "../assets/archin-project.jpeg";
import constructionImage from "../assets/archin-construction.jpeg";
import project2Image from "../assets/archin-project2.jpeg";

function Process() {
 const stages = [
  {
    number: "01",
    title: "The Vision",
    label: "Concept",
    description:
      "Every project begins with an idea. A considered response to the people, place and purpose behind the space.",
    image: projectImage,
  },
  {
    number: "02",
    title: "Taking Shape",
    label: "Construction",
    description:
      "From foundation to structure, careful execution turns architectural intent into something tangible.",
    image: constructionImage,
  },
  {
    number: "03",
    title: "The Reality",
    label: "Completion",
    description:
      "The final space brings architecture, materials and detail together to create something made to be lived in.",
    image: project2Image,
  },
];

  return (
    <section className="process" id="process">
      <div className="process-intro">
        <div className="process-label">
          <span>03</span>
          <span>The process</span>
        </div>

        <div className="process-heading">
          <h2>
            From vision
            <br />
            <em>to reality.</em>
          </h2>

          <p>
            Behind every finished space is a process of ideas,
            decisions, materials and craftsmanship.
          </p>
        </div>
      </div>

      <div className="process-stages">
        {stages.map((stage) => (
          <article className="process-stage" key={stage.number}>
            <div className="process-image">
              <img src={stage.image} alt={stage.title} />

              <span className="process-stage-number">
                {stage.number}
              </span>
            </div>

            <div className="process-stage-info">
              <div>
                <span className="process-stage-label">
                  {stage.label}
                </span>

                <h3>{stage.title}</h3>
              </div>

              <p>{stage.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;