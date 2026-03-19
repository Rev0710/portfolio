import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;