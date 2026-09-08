import { useTranslations } from "next-intl";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
	const t = useTranslations("about");
	return (
		// <AnimationOnScroll animateIn="animate__fadeInUp" className="inner">
		<section className="text-xl mb-8 scroll-mt-24 max-w-5xl mx-auto" id="about">
			<h2 className="section-heading">{t("title")}</h2>

			<p>
				{/* As a software developer with 3+ years of continuous learning and
				hands-on experience, my, focus is on front-end development, utilizing
				HTML, CSS, JavaScript, and React to create intuitive user experiences. I
				enjoy leveraging AI as part of my development workflow for debugging,
				architectural decisions, improving code quality, and accelerating
				learning while maintaining strong problem-solving fundamentals.
				<br />I am passionate about continuously improving my skills and
				collaborating with dynamic teams to deliver impactful projects. I am
				open to collaborate on interesting projects that add value. */}
				{t("paragraph1")}
			</p>

			<p className="mt-6">
				{/* <b>Background: </b>Before transitioning into software development, I
				earned a degree in Homeopathy, an alternative holistic system of
				medicine that emphasizes understanding individuals as a whole and
				identifying root causes rather than only addressing symptoms. This
				mindset has strongly influenced my approach to software development
				where I focus on understanding underlying causes of bugs and technical
				challenges to build effective, long-term solutions rather than temporary
				fixes. */}
				{t("paragraph2")}
			</p>

			<p className="mt-6">
				{/* When I am not coding, I like to spend time with my family. */}
				{t("paragraph3")}
			</p>

			<h3 className="mt-8 text-3xl font-bold mb-4">{t("openSourceTitle")}</h3>
			<p>
				{/* I contributed to an open source project from Zero To Mastery -{" "}
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
				contribution was reviewed, approved, and merged into the main codebase. */}
				{t.rich("openSourceText", {
					link: (chunks) => (
						<a
							href="https://github.com/zero-to-mastery/ZtM-Job-Board/pull/3476"
							target="_blank"
							className="text-purple-400 hover:filter hover:brightness-125 transition duration-300"
						>
							{chunks}
						</a>
					),
				})}
			</p>
		</section>
		// </AnimationOnScroll>
	);
}

export default About;
