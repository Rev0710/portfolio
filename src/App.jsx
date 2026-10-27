import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Skills from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) return undefined;

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer" id="footer">
        <div className="site-footer__inner section__inner">
          <div className="site-footer__top">
            <div>
              <p className="site-footer__invite">Let’s make something useful.</p>
              <p className="site-footer__positioning">
                Full-stack web development for thoughtful, practical digital products.
              </p>
            </div>
            <div className="site-footer__links" aria-label="Professional links">
              <a href="mailto:delarosa.johnrev071004@gmail.com">Email</a>
              <a href="https://github.com/Rev0710" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/john-rev-dela-rosa-056483372" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="site-footer__bottom">
            <p>© {new Date().getFullYear()} John Rev Dela Rosa · Portfolio</p>
            <a href="#hero">Back to top <span aria-hidden="true">↑</span></a>
          </div>
          <p className="site-footer__wordmark" aria-hidden="true">John Rev Dela Rosa</p>
        </div>
      </footer>
    </>
  );
}

export default App;
