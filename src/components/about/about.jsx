import "./about.styles.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
	return (
		// <AnimationOnScroll animateIn="animate__fadeInUp" className="inner">
		<div className="inner">
			<h2>ABOUT ME</h2>

			<p>
				As a web developer with two years of continuous learning experience, my
				focus is on front-end development, utilizing HTML, CSS, JavaScript, and
				React to create intuitive user experiences. I am passionate about
				continuously improving my skills and collaborating with dynamic teams to
				deliver impactful projects. I am open to collaborate on interesting
				projects that add value.
			</p>

			<p>When I am not coding, I like to spend time with my family.</p>

			<h3>My Open Source Contribution</h3>
			<p>
				I contributed to an open source project from Zero To Mastery -{" "}
				<a
					href="https://github.com/zero-to-mastery/ZtM-Job-Board/pull/3476"
					target="_blank"
					rel="noreferrer"
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
