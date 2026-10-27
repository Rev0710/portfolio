function Intro({ phase, onSkip }) {
  return (
    <section
      className={"intro-screen" + (phase === "leaving" ? " is-leaving" : "")}
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      aria-describedby="intro-description"
    >
      <div className="intro-screen__top">
        <span className="intro-screen__mark" aria-hidden="true">
          JRD <span></span>
        </span>
        <p className="intro-screen__top-note">Portfolio · Full-stack development</p>
      </div>

      <div className="intro-screen__content">
        <p className="intro-screen__eyebrow">John Rev Dela Rosa</p>
        <h1 className="intro-screen__title" id="intro-title">
          <span className="intro-screen__title-line">Thoughtful</span>
          <span className="intro-screen__title-line">
            digital work
            <span className="intro-screen__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </span>
        </h1>
        <p className="intro-screen__description" id="intro-description">
          Full-stack developer building useful websites and practical web applications.
        </p>
      </div>

      <div className="intro-screen__bottom">
        <p className="intro-screen__status">
          <span className="intro-screen__status-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          Opening your portfolio
        </p>
        <button className="intro-screen__skip" type="button" autoFocus onClick={onSkip}>
          Skip intro <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}

export default Intro;