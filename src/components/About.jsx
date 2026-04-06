import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiVite, SiVercel, SiRender } from "react-icons/si";
import "./About";

function About() {
    useEffect(() => {
        Aos.init({ duration: 800, once: true });
    }, []);

    return (
        <section id="about" className="about-section" data-aos="fade-up">
            <div className="about-blob"></div>
            <div className="floating-icons">
                <FaHtml5 className="icon html" />
                <FaCss3Alt className="icon css" />
                <FaJs className="icon js" />
                <FaReact className="icon react" />
                <FaNodeJs className="icon node" />
                <SiExpress className="icon express" />
                <SiMongodb className="icon mongo" />
                <FaGitAlt className="icon git" />
                <FaGithub className="icon github" />
                <SiVite className="icon vite" />
                <SiVercel className="icon vercel" />
                <SiRender className="icon render" />
            </div>

            <div className="container">
                <h2>About Me</h2>

                <p className="about-text">
                    I am a Dedicated <span className="highlight">Full Stack Developer</span> when it comes in <span className="highlight">MERN stack</span> (MongoDB, Express.js, React, Node.js). I love building modern, responsive, and scalable websites that provide great user experiences.
                </p>

                <p className="about-text">
                    On the <span className="highlight">backend</span>, I enjoy designing RESTful APIs, working with databases, and implementing authentication & authorization. On the <span className="highlight">frontend</span>, I craft clean and interactive UIs using <span className="highlight">React</span>, <span className="highlight">Tailwind CSS</span>, and modern UI libraries.
                </p>

                <p className="about-text">
                    I also deploy websites to platforms like <span className="highlight">Vercel</span> and <span className="highlight">Render</span>, and I am always learning new technologies to improve my full-stack development skills.
                </p>
            </div>
        </section>
    );
}

export default About;