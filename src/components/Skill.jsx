const skillGroups = [
  {
    title: "Frontend",
    technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Data",
    technologies: ["Supabase", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    technologies: ["Git", "GitHub", "Vite", "Postman", "Vercel", "Render", "Figma"],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="stack" aria-labelledby="skills-title">
      <div className="section__inner">
        <div className="skills-heading" data-reveal>
          <h2 className="section-title" id="skills-title">A practical stack for the job.</h2>
          <p>Technologies used across my portfolio and project work.</p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div
              className="skills-row"
              data-reveal
              style={{ "--reveal-index": index }}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <ul className="skill-tags" aria-label={group.title + " technologies"}>
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
