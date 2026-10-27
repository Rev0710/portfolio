const steps = [
  {
    title: "Discovery",
    description: "We clarify the goal, audience, constraints, and what a useful result looks like.",
  },
  {
    title: "Plan and structure",
    description: "I map the key pages, user flows, and technical approach before the build.",
  },
  {
    title: "Design and development",
    description: "I shape the interface and connect it to the data and application behavior it needs.",
  },
  {
    title: "Test and refine",
    description: "We review the core flows, responsive layouts, input validation, and edge cases.",
  },
  {
    title: "Launch and handoff",
    description: "I prepare the agreed deployment steps and share the notes needed to take the project forward.",
  },
];

function Process() {
  return (
    <section className="section process-section" id="process" aria-labelledby="process-title">
      <div className="section__inner">
        <div className="process-heading" data-reveal>
          <h2 className="section-title" id="process-title">Good work starts with a shared plan.</h2>
          <p>Each step keeps the project understandable, reviewable, and moving toward the same goal.</p>
        </div>

        <ol className="process-list">
          {steps.map((step, index) => (
            <li
              className="process-step"
              data-reveal
              style={{ "--reveal-index": index }}
              key={step.title}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <a className="section-cta" href="#contact">
          Start with a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Process;
