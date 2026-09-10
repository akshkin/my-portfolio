import { useTranslations } from "next-intl";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
	const t = useTranslations("about");
	return (
		// <AnimationOnScroll animateIn="animate__fadeInUp" className="inner">
		<section className="text-xl mb-8 scroll-mt-24 max-w-5xl mx-auto" id="about">
			<h2 className="section-heading">{t("title")}</h2>

			<p>{t("paragraph1")}</p>

			<p className="mt-6">{t("paragraph2")}</p>

			<p className="mt-6">{t("paragraph3")}</p>

			<h3 className="mt-8 text-3xl font-bold mb-4">{t("openSourceTitle")}</h3>
			<p>
				{t.rich("openSourceText", {
					ztmLink: (chunks) => (
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
