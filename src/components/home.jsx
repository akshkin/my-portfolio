import React from "react";
import Hero from "./hero/hero";
import About from "./about/about";
import Education from "./education/education";
import Skills from "./education/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import { ReactComponent as DownloadIcon } from "../assets/svgs/download.svg";

function Home() {
  return (
    <div>
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

          {/* <div className="download-container">
            <a className="download" href="/Akshaya_Kini_Resume.pdf" download>
              Download Resume <DownloadIcon />
            </a>
          </div> */}
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

export default Home;
