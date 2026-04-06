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

        const handleScroll = () => {
            if (menuOpen) setMenuOpen(false);
        };


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    const toggleTheme = () => {
        setDark((prev) => {
            const newDark = !prev;
            document.body.classList.toggle("dark", newDark);
            document.body.classList.toggle("light", !newDark);
            return newDark;
        });
    };

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="hero" smooth={true} duration={700} offset={-50}>
                    <img src="Logo.png" alt="Logo" width="80" height="80" />
                </Link>
            </div>

            {/* Mobile Menu */}
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <Link to="about" smooth={true} duration={500} offset={-50} onClick={handleLinkClick}>
                    About
                </Link>
                <Link to="skills" smooth={true} duration={500} offset={-50} onClick={handleLinkClick}>
                    Skills
                </Link>
                <Link to="projects" smooth={true} duration={500} onClick={handleLinkClick}>
                    Projects
                </Link>
                <Link to="contact" smooth={true} duration={700} offset={-70} onClick={handleLinkClick}>
                    Contact
                </Link>
            </div>
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