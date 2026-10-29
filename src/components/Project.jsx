import { useEffect, useState } from "react";

const featuredProjects = [
  {
    id: "caretrail",
    title: "CareTrail",
    kind: "Community giving · Full-stack project",
    summary: "A testnet giving experience that keeps payment records distinct from organizer updates.",
    challenge: "Donors need a clear record of a test payment without confusing a confirmed transfer with proof of an outcome.",
    approach: "Campaign discovery, donation history, downloadable records, and organizer-owned reports are brought together in one responsive app.",
    role: "Full-stack implementation",
    status: "Stellar Testnet demo · No real funds",
    image: "/projects/caretrail-relief.webp",
    imageAlt: "Illustration of community relief supplies being prepared for distribution",
    caption: "Illustrative campaign art · Stellar Testnet",
    url: "https://caretrailxpaiflow.vercel.app/",
    source: "https://github.com/Rev0710/CareTrail",
    features: [
      "Search and filter community campaigns",
      "Donation drafts, history, and downloadable records",
      "Organizer-owned campaign creation and reports",
    ],
    stack: ["TypeScript", "React", "Vite", "Express", "Supabase", "Stellar Testnet"],
  },
  {
    id: "votara",
    title: "Votara",
    kind: "School elections · Team project",
    summary: "A school election platform structured around student, Electoral Board, and admin workflows.",
    challenge: "Student registration, election management, voting, and reporting each need clear paths for different school roles.",
    approach: "The team documents student registration and identity steps, Electoral Board election workflows, and admin oversight in one web application.",
    role: "Six-person project team",
    status: "Development demo · Kiosk and end-to-end testing remain in progress",

    image: "/projects/votara-logo.png",
    imageAlt: "Votara logo",
    video: "/projects/votara-intro.mp4",
    poster: "/projects/votara-poster.svg",
    caption: "VOTARA · Online voting system",
    url: "https://votara-election-system.vercel.app/",
    source: "https://github.com/Rev0710/Votara",
    features: [
      "Student registration and email OTP steps",
      "Electoral Board flows for registrations, candidates, and elections",
      "Admin account, data, and reporting workflows",
    ],
    stack: ["JavaScript", "React", "Vite", "Node.js", "Express", "Supabase", "PostgreSQL"],
  },
];

const otherProjects = [
  {
    title: "TaskTracker",
    type: "Student study workspace",
    description: "A calmer place to keep tasks, practicals, quizzes, and scores together.",
    image: "/projects/tasktracker-preview.svg",
    demo: "https://my-project-tasktracker.vercel.app/",
    source: null,
    stack: null,
  },
  {
    title: "AwesomeTodos",
    type: "Task manager",
    description: "A MERN task manager for organizing day-to-day work.",
    image: "/Awesometodos.png",
    demo: "https://awesometodos-v2-1.onrender.com/",
    source: "https://github.com/Rev0710/Awesometodos_v2.1",
    stack: "MongoDB · Express · React · Node.js",
  },
  {
    title: "Music Player",
    type: "React application",
    description: "A web-based music player built with React.",
    image: "/music.png",
    demo: "https://music-player-green-alpha.vercel.app/",
    source: "https://github.com/Rev0710/music-player",
    stack: "React",
  },
  {
    title: "HyperX Mouse",
    type: "Product site",
    description: "A product presentation site for the HyperX gaming mouse.",
    image: "/hyperx.png",
    demo: "https://hyperx-mouse.vercel.app/",
    source: "https://github.com/Rev0710/hyperx-mouse",
    stack: "React",
  },
  {
    title: "DocLock",
    type: "Document workflow",
    description: "A React application for a simpler document workflow.",
    image: "/Doclock.png",
    demo: "https://doclock.vercel.app/",
    source: "https://github.com/Rev0710/Doclock",
    stack: "React",
  },
];

function ProjectMedia({ project, isWide, reducedMotion }) {
  if (project.video && isWide) {
    return (
      <video
        className="case-study__image"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="none"
        poster={project.poster || project.image}
        aria-hidden="true"
      >
        <source src={project.video} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      className="case-study__image"
      src={project.image}
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  );
}

function Projects() {
  const [isWide, setIsWide] = useState(() => window.matchMedia("(min-width: 821px)").matches);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const widthQuery = window.matchMedia("(min-width: 821px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateWidth = () => setIsWide(widthQuery.matches);
    const updateMotion = () => setReducedMotion(motionQuery.matches);

    widthQuery.addEventListener("change", updateWidth);
    motionQuery.addEventListener("change", updateMotion);

    return () => {
      widthQuery.removeEventListener("change", updateWidth);
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <section className="section work-section" id="projects" aria-labelledby="projects-title">
      <div className="section__inner">
        <div className="work-heading" data-reveal>
          <h2 className="section-title" id="projects-title">Built around real workflows.</h2>
          <p>Two recent full-stack projects, followed by a few more builds.</p>
        </div>

        <div className="case-study-list">
          {featuredProjects.map((project, index) => (
            <article
              className={"case-study" + (index % 2 === 1 ? " case-study--reverse" : "")}
              data-reveal
              key={project.id}
            >
              <figure className={"case-study__visual case-study__visual--" + project.id}>
                <div className="case-study__media-frame">
                  <ProjectMedia project={project} isWide={isWide} reducedMotion={reducedMotion} />
                  <figcaption className="case-study__caption">
                    <span>{project.caption}</span>
                    <span aria-hidden="true">↗</span>
                  </figcaption>
                </div>
              </figure>

              <div className="case-study__copy">
                <h3>{project.title}</h3>
                <p className="case-study__kind">{project.kind}</p>
                <p className="case-study__summary">{project.summary}</p>

                <div className="case-study__facts">
                  <div>
                    <h4>Challenge</h4>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <h4>Approach</h4>
                    <p>{project.approach}</p>
                  </div>
                </div>

                <ul className="case-study__features" aria-label={project.title + " documented features"}>
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>

                <div className="case-study__meta">
                  <p><span>Project role</span>{project.role}</p>
                  <p><span>Technology</span>{project.stack.join(" · ")}</p>
                </div>

                <div className="case-study__actions">
                  <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                  <a className="text-link text-link--quiet" href={project.source} target="_blank" rel="noopener noreferrer">
                    View source <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <p className="case-study__status">{project.status}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="other-work" data-reveal>
          <div className="other-work__heading">
            <h3>More projects</h3>
            <p>Additional builds across product interfaces, task management, and document workflows.</p>
          </div>
          <div className="other-work__list">
            {otherProjects.map((project, index) => (
              <article className="other-project" key={project.title} style={{ "--reveal-index": index }}>
                <img src={project.image} alt="" aria-hidden="true" loading="lazy" />
                <div className="other-project__copy">
                  <div className="other-project__title-line">
                    <h4>{project.title}</h4>
                    <span>{project.type}</span>
                  </div>
                  <p>{project.description}</p>
                  {project.stack && <span className="other-project__stack">{project.stack}</span>}
                </div>
                <div className="other-project__links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live <span aria-hidden="true">↗</span></a>
                  {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Code <span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
