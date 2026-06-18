import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
	return (
		// <AnimationOnScroll animateIn="animate__fadeInUp" className="inner">
		<div className="p-8 max-w-5xl mx-auto text-2xl mb-8" id="about">
			<h2 className="section-heading">ABOUT ME</h2>

			<p>
				As a web developer with two years of continuous learning experience, my
				focus is on front-end development, utilizing HTML, CSS, JavaScript, and
				React to create intuitive user experiences. I am passionate about
				continuously improving my skills and collaborating with dynamic teams to
				deliver impactful projects. I am open to collaborate on interesting
				projects that add value.
			</p>

			<p>When I am not coding, I like to spend time with my family.</p>

			<h3 className="mt-8 text-3xl font-bold">My Open Source Contribution</h3>
			<p>
				I contributed to an open source project from Zero To Mastery -{" "}
				<a
					href="https://github.com/zero-to-mastery/ZtM-Job-Board/pull/3476"
					target="_blank"
					rel="noreferrer"
					className="text-purple-400 hover:filter hover:brightness-125 transition duration-300"
				>
					ZTM Job Board (Feel free to check it here)
				</a>
				. I migrated the React application from Create React App to Vite,
				improving build performance and modernizing the project’s tooling. My
				contribution was reviewed, approved, and merged into the main codebase.
			</p>
		</div>
		// </AnimationOnScroll>
	);
}

export default About;
