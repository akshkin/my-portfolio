import "./App.scss";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Navigation from "./components/navigation/navigation";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
import Skills from "./components/education/skills";
import Projects from "./components/projects/projects";
import { ReactComponent as DownloadIcon } from "./assets/svgs/download.svg";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <div className="hero container">
          <Hero />
        </div>
        <div className="about container" id="about">
          <About />
        </div>
        <div className="education container" id="education">
          <div className="inner">
            <Education />
          </div>

          <div className="inner">
            <Skills />
          </div>

          <div className="download-container">
            <a className="download" href="/Akshaya_Kini_Resume.pdf" download>
              Click to download Resume <DownloadIcon />
            </a>
          </div>
        </div>

        <h2 className="projects-title">MY PROJECTS</h2>
        <div className="projects-container" id="projects">
          <Projects />
        </div>

        <div className="contact container" id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
