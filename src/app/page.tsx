import Hero from "./components/hero"
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Skill from "./components/Skill"
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Contact/>
      <Skill/>
      
    </div>
  )
}
    