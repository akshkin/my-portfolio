import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/education/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/Skills";

export default function HomePage() {
	return (
		<div>
			<main className="max-w-screen overflow-hidden">
				<div className="">
					<Hero />
				</div>
				<div className="" id="about">
					<About />
				</div>
				<div id="skills">
					<Skills />
				</div>
				<div className="" id="education">
					<Education />
				</div>

				{/* <div className="download-container">
						<a className="download" href="/Akshaya_Kini_Resume.pdf" download>
						Download Resume <DownloadIcon />
						</a>
					</div> */}

				<div id="projects">
					<h2 className="projects-title">MY PROJECTS</h2>
					<Projects />
				</div>

				<div className="mx-auto border-t-2" id="contact">
					<Contact />
				</div>
			</main>
		</div>
	);
}
