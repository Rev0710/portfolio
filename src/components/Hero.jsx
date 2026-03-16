import { Typewriter } from "react-simple-typewriter"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"
import Tilt from "react-parallax-tilt"
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"

function Hero() {

    return (

        <section className="hero">

            <div className="blob"></div>

            <div className="hero-container">

                {/* LEFT SIDE */}

                <div className="hero-text">

                    <h1>Hello, I'm <br /><span className="name">John Rev Dela Rosa</span></h1>

                    <h2 className="typing-text">

                        <Typewriter
                            words={[
                                "Backend Developer",
                                "Full Stack Developer",
                                "MERN Stack Developer"
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />

                    </h2>

                    <p className="hero-desc">
                        A 2nd-year IT student driven by curiosity, innovation, and the goal of creating meaningful digital experiences.
                    </p>

                    <div className="hero-buttons">

                        <a href="#projects" className="btn">
                            View Projects
                        </a>

                        <a href="/cv.pdf" className="btn btn-outline">
                            Download CV
                        </a>

                    </div>

                    {/* SOCIAL ICONS */}

                    <div className="hero-socials">

                        <a href="https://github.com/Rev0710">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/john-rev-dela-rosa-056483372">
                            <FaLinkedin />
                        </a>

                        <a href="https://www.facebook.com/delarosajohnrev">
                            <FaFacebook />
                        </a>

                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="hero-image">

                    <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                    >
                        <img src="/profile.png" alt="profile" className="profile-img" />
                    </Tilt>

                    {/* ORBIT RING */}

                    <div className="orbit-ring">

                        <FaReact className="orbit-icon react" />
                        <FaJs className="orbit-icon js" />
                        <FaNodeJs className="orbit-icon node" />
                        <SiMongodb className="orbit-icon mongo" />

                    </div>

                    {/* FLOATING EXPERIENCE */}

                    <div className="experience experience-1">
                        <h3>1+</h3>
                        <p>Years Experience</p>
                    </div>

                    <div className="experience experience-2">
                        <h3>3+</h3>
                        <p>Projects Built</p>
                    </div>

                </div>

            </div>

        </section>

    )

}

export default Hero