function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section__inner about-layout">
        <figure className="about-portrait" data-reveal>
          <div className="about-portrait__frame">
            <img
              src="/profile.png"
              alt="Professional portrait of John Rev Dela Rosa"
              width="408"
              height="612"
              loading="lazy"
            />
          </div>
          <figcaption>John Rev Dela Rosa</figcaption>
        </figure>

        <div className="about-copy" data-reveal>
          <h2 className="section-title" id="about-title">Thoughtful products start with understanding the people who use them.</h2>
          <p className="about-copy__lead">
            I’m a third-year IT student focused on full-stack development and clear digital experiences.
          </p>
          <p>
            I work with React on the front end and Node.js, Express, and data services behind it.
            I start by understanding the workflow, then shape an interface and connect the pieces
            so the result is practical to use and maintain.
          </p>
          <dl className="about-facts">
            <div>
              <dt>Focus</dt>
              <dd>Full-stack web development</dd>
            </div>
            <div>
              <dt>Front end</dt>
              <dd>React and responsive interfaces</dd>
            </div>
            <div>
              <dt>Back end</dt>
              <dd>Node.js, Express, and data APIs</dd>
            </div>
          </dl>
          <a className="text-link about-cv" href="/cv.pdf" download="John-Rev-Dela-Rosa-CV.pdf">
            View my CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
