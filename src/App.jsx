import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skill"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import ParticlesBg from "./components/ParticlesBg"
import CursorGlow from "./components/CursorGlow"
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

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

  )

}

export default App