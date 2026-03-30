import { useEffect, useState } from "react"
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub
} from "react-icons/fa"
import {
    SiMongodb,
    SiExpress,
    SiVite,
    SiVercel,
    SiRender
} from "react-icons/si"
function Skills() {
    const frontend = [
        { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
        { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
        { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
        { name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} /> }
    ];

    const backend = [
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
        { name: "Express.js", icon: <SiExpress style={{ color: "#000000" }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> }
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
        { name: "GitHub", icon: <FaGithub style={{ color: "#FFFFFF" }} /> },
        { name: "Vercel", icon: <SiVercel style={{ color: "#000000" }} /> },
        { name: "Render", icon: <SiRender style={{ color: "#4A4A4A" }} /> },
        { name: "Vite", icon: <SiVite style={{ color: "#646CFF" }} /> }
    ];

    // Rest of your component logic...

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section
            id="skills" data-aos="fade-up"
            className="skills-section"
            style={{
                background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #1e1e2f, #0d0d1a)`
            }}
        >
            <div className="container">
                <h2 className="section-title">Skills & TechStack</h2>
                <p className="section-sub">
                    A comprehensive overview of my technical skills and proficiency
                </p>

                <div className="skills-grid">
                    {[{ title: "Frontend Development", data: frontend }, { title: "Backend & APIs", data: backend }, { title: "Tools & Others", data: tools }].map((section, idx) => (
                        <div className="skills-card floating" key={idx}>
                            <h3>{section.title}</h3>
                            {section.data.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <div className="skill-info">
                                        <span className="icon">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{ width: `${skill.level}%`, backgroundColor: skill.icon.props.style.color }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills