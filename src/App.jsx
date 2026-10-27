import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

function getInitialIntroPhase() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "done";
    return window.sessionStorage.getItem("portfolio-intro-seen") === "true" ? "done" : "entering";
  } catch {
    return "done";
  }
}

function App() {
  const [introPhase, setIntroPhase] = useState(getInitialIntroPhase);
  const mainRef = useRef(null);
  const previousIntroPhase = useRef(introPhase);
  const introVisible = introPhase !== "done";

  const finishIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem("portfolio-intro-seen", "true");
    } catch {
      // The intro still closes when session storage is unavailable.
    }

    setIntroPhase((phase) => phase === "entering" ? "leaving" : phase);
  }, []);

  useEffect(() => {
    if (introPhase !== "entering") return undefined;

    const timer = window.setTimeout(finishIntro, 1550);
    const handleKeyDown = (event) => {
      if (event.key === "Escape") finishIntro();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [finishIntro, introPhase]);

  useEffect(() => {
    if (introPhase !== "leaving") return undefined;

    const timer = window.setTimeout(() => setIntroPhase("done"), 420);
    return () => window.clearTimeout(timer);
  }, [introPhase]);

  useEffect(() => {
    document.documentElement.classList.toggle("intro-active", introVisible);
    return () => document.documentElement.classList.remove("intro-active");
  }, [introVisible]);

  useEffect(() => {
    const previousPhase = previousIntroPhase.current;
    previousIntroPhase.current = introPhase;
    if (previousPhase === "leaving" && introPhase === "done") {
      mainRef.current?.focus({ preventScroll: true });
    }
  }, [introPhase]);

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
      <div className="portfolio-shell" inert={introVisible} aria-hidden={introVisible ? "true" : undefined}>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        <main ref={mainRef} id="main" tabIndex="-1">
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
      </div>
      {introVisible && <Intro phase={introPhase} onSkip={finishIntro} />}
    </>
  );
}

export default App;