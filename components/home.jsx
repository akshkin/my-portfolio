import React from "react";
import Hero from "./Hero";
import About from "./About";
import Education from "./education/Education";
import Skills from "./Skills";
import Projects from "./projects/projects";
import Contact from "./Contact";
import DownloadIcon from "../assets/svgs/download.svg?react";

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

				<div id="projects">
					<h2 className="projects-title">MY PROJECTS</h2>
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
