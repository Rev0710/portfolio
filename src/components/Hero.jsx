const HEADLINE_LINES = ["Websites application", "built for real needs."];

function splitLine(line, lineIndex, characterOffset) {
  return Array.from(line).map((character, index) => {
    const wordsBefore = line.slice(0, index).trim().split(/\s+/).filter(Boolean);
    const wordIndex = character === " " ? Math.max(0, wordsBefore.length - 1) : wordsBefore.length;
    const globalIndex = characterOffset + index;

    return (
      <span
        className="hero-char"
        data-line={lineIndex}
        data-word={wordIndex}
        data-char={index}
        style={{ "--char-index": globalIndex }}
        key={lineIndex + "-" + index}
      >
        {character === " " ? "\u00A0" : character}
      </span>
    );
  });
}

function Hero() {
  const headline = HEADLINE_LINES.map((line, index) => {
    const characterOffset = HEADLINE_LINES
      .slice(0, index)
      .reduce((total, previousLine) => total + Array.from(previousLine).length, 0);
    const chars = splitLine(line, index, characterOffset);

    return (
      <span className="hero-line" data-line={index} key={line}>
        {chars}
        {index === HEADLINE_LINES.length - 1 && (
          <span className="hero-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        )}
      </span>
    );
  });

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__intro">John Rev Dela Rosa <span aria-hidden="true">·</span> Full-stack developer</p>

        <h1 className="hero__name" id="hero-title" aria-label={HEADLINE_LINES.join(" ")}>
          <span className="hero__name-visual" aria-hidden="true">{headline}</span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__summary">
            I’m a third-year IT student building responsive websites that can make you're daily life get easier
            with React, Node.js, Express, and Supabase.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Let’s build your project <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
