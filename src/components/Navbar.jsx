import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(true);

    useEffect(() => {
        Aos.init({ duration: 1000 });
        document.body.classList.add(dark ? "dark" : "light");
    }, []);

    function toggleTheme() {
        setDark((prev) => {
            const newDark = !prev;

            if (newDark) {
                document.body.classList.remove("light");
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
                document.body.classList.add("light");
            }

            return newDark;
        });
    }

    return (
        <nav className="navbar">

            <div className="logo">
                <Link to="hero" smooth={true} duration={700} offset={-50}>
                    <img src="Logo.png" alt="Logo" width="80" height="80" />
                </Link>
            </div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <Link to="about" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)}>
                    About
                </Link>
                <Link to="skills" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)}>
                    Skills
                </Link>
                <Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                    Projects
                </Link>
                <Link to="contact" smooth={true} duration={700} offset={-70} onClick={() => setMenuOpen(false)}>
                    Contact
                </Link>
            </div>

            {/* RIGHT SIDE CONTROLS */}
            <div className="nav-controls">

                <button className="theme-toggle" onClick={toggleTheme}>
                    {dark ? <FaSun /> : <FaMoon />}
                </button>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>

        </nav>
    );
}

export default Navbar;