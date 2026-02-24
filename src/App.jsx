import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Media from "./components/Media";
import Team from "./components/Team";

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Media />
      <Team />
      <Contact />
    </div>
  );
}

export default App;