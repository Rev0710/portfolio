const services = [
  {
    title: "Website development",
    description: "Responsive, clear websites that help people understand what you offer and what to do next.",
    outcome: "A sharper first impression",
  },
  {
    title: "Full-stack applications",
    description: "Web apps that connect thoughtful interfaces with authentication, APIs, and the data behind a workflow.",
    outcome: "Useful end-to-end flows",
  },
  {
    title: "Backend and API work",
    description: "Express services and REST endpoints that connect application screens to data and integrations.",
    outcome: "Connected product features",
  },
  {
    title: "UI implementation",
    description: "Accessible React interfaces with responsive layouts, clear feedback, and careful interaction details.",
    outcome: "Interfaces people can use",
  },
  {
    title: "Business workflow tools",
    description: "Purpose-built dashboards and management tools for organizing information and recurring tasks.",
    outcome: "Less friction in everyday work",
  },
];

function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="section__inner">
        <div className="services-heading" data-reveal>
          <h2 className="section-title" id="services-title">Solutions, shaped around the work.</h2>
          <p>From a clear first website to the connected application behind a larger workflow.</p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <article
              className="service-row"
              data-reveal
              style={{ "--reveal-index": index }}
              key={service.title}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-row__outcome">{service.outcome}</span>
            </article>
          ))}
        </div>

        <a className="section-cta" href="#contact">
          Tell me what you’re working on <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Services;
