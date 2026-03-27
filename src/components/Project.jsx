function Projects() {

    const projects = [

        {
            title: "AwesomeTodos",
            desc: "Task manager built with MERN stack",
            img: "/Awesometodos.png",
            link: "https://awesometodos-v2-1.onrender.com/"
        },

        {
            title: "Music Player",
            desc: "Feel the Beat, Control the Sound built with React",
            img: "/music.png",
            link: "https://music-player-green-alpha.vercel.app/"
        },

        {
            title: "HyperX Mouse",
            desc: "Precision Gaming at Your Fingertips built with React",
            img: "/hyperx.png",
            link: "https://hyperx-mouse.vercel.app/"
        },

        {
         
            title: "DocLock",
            desc: "Fast to press, no more stress! built with React",
            img: "/Doclock.png",
            link: "https://doclock.vercel.app/"
        }

    ]

    return (
        <section id="projects" className="projects-section" data-aos="fade-up">

            <h2 className="section-title">Features Projects</h2>

            <div className="projects-grid">

                {projects.map((p) => (
                    <div
                        className="project-card"
                        key={p.title}
                        style={{
                            backgroundImage: `url(${p.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="project-overlay">
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Projects