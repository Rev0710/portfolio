import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

function Contact() {

    return (

        <section id="contact" className="contact-section">

            <div className="contact-container">

                <h2 className="section-title">Contact Me</h2>

                <p className="contact-sub">
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button type="submit" className="btn">
                        Send Message
                    </button>

                </form>

                {/* SOCIAL LINKS */}

                <div className="contact-socials">

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

        </section>

    )

}

export default Contact