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
        { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} />, level: 85 },
        { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} />, level: 80 },
        { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} />, level: 85 },
        { name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} />, level: 87 }
    ]

    const backend = [
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} />, level: 90 },
        { name: "Express.js", icon: <SiExpress style={{ color: "#000000" }} />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} />, level: 85 }
    ]

    const tools = [
        { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} />, level: 85 },
        { name: "GitHub", icon: <FaGithub style={{ color: "#FFFFFF" }} />, level: 90 },
        { name: "Vercel", icon: <SiVercel style={{ color: "#000000" }} />, level: 90 },
        { name: "Render", icon: <SiRender style={{ color: "#4A4A4A" }} />, level: 90 },
        { name: "Vite", icon: <SiVite style={{ color: "#646CFF" }} />, level: 95 }
    ]


    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section
            id="skills"
            className="skills-section"
            style={{
                background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #1e1e2f, #0d0d1a)`
            }}
        >
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
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