import "../styles/services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Architecture",
      description:
        "Thoughtful architectural solutions shaped around function, character and the way people live.",
      tags: "Concept · Planning · Design",
    },
    {
      number: "02",
      title: "Interior Design",
      description:
        "Interior environments where materials, lighting, proportions and detail come together with purpose.",
      tags: "Interiors · Finishes · Styling",
    },
    {
      number: "03",
      title: "Construction",
      description:
        "From foundation to final detail, we turn design intent into carefully executed spaces.",
      tags: "Build · Project Management · Delivery",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="services-label">
          <span>02</span>
          <span>What we do</span>
        </div>

        <h2>
          Designed with
          <br />
          <em>purpose.</em>
        </h2>

        <p className="services-intro">
          Architecture, interiors and construction brought together
          through one considered approach to creating exceptional spaces.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span className="service-number">{service.number}</span>

              <span className="service-arrow">↗</span>
            </div>

            <div className="service-card-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-tags">{service.tags}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="services-footer">
        <span>Project Management</span>
        <span>Procurement</span>
        <span>Infrastructure</span>
      </div>
    </section>
  );
}

export default Services;