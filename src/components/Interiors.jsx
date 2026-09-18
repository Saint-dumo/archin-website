import "../styles/interiors.css";
import heroImage from "../assets/archin-hero.jpeg";
import projectImage from "../assets/archin-project.jpeg";
import constructionImage from "../assets/archin-construction.jpeg";

function Interiors() {
  const spaces = [
  {
    number: "01",
    name: "Living",
    image: heroImage,
  },
  {
    number: "02",
    name: "Dining",
    image: projectImage,
  },
  {
    number: "03",
    name: "The Detail",
    image: constructionImage,
  },
];

  return (
    <section className="interiors" id="interiors">

      <div className="interiors-header">

        <div className="interiors-label">
          <span>06</span>
          <span>Inside the space</span>
        </div>

        <div className="interiors-heading">
          <h2>
            Space is
            <br />
            <em>an experience.</em>
          </h2>

          <p>
            Architecture continues beyond the exterior.
            Every interior is considered as part of the whole.
          </p>
        </div>

      </div>


      <div className="interiors-gallery">

        {spaces.map((space) => (
          <article className="interior-space" key={space.number}>

            <div className="interior-image">

              <img
                src={space.image}
                alt={`${space.name} interior`}
              />

              <span className="interior-number">
                {space.number}
              </span>

            </div>

            <div className="interior-info">

              <h3>{space.name}</h3>

              <span>
                Explore space ↗
              </span>

            </div>

          </article>
        ))}

      </div>


      <div className="interiors-cta">

        <span>
          Architecture · Interior · Detail
        </span>

        <h3>
          See the
          <br />
          <em>whole picture.</em>
        </h3>

        <button>
          Enter the experience
          <span>↗</span>
        </button>

      </div>

    </section>
  );
}

export default Interiors;