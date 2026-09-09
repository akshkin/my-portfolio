import { useTranslations } from "next-intl";
import React from "react";

const experience = {
	uppakra: {
		company: "Uppåkra Arkeologiska Center",
		period: "Maj 2026 – Aug 2026",
		location: "Uppåkra",
		stack: ["Webflow", "GA4", "Google Tag Manager", "Google Search Console"],
	},
	newSplitter: {
		company: "NewSplitter",
		period: "Feb 2026 – Jun 2026",
		location: "Malmö",
		stack: [
			"React Native",
			"React + Typescript",
			"Redux Toolkit",
			"Node.js",
			"AWS",
		],
	},
};

function Experience() {
	const t = useTranslations("experience");
	return (
		<section className="text-xl mb-8 scroll-mt-24 max-w-5xl mx-auto mt-12">
			<h2 className="section-heading">{t("title")}</h2>
			{Object.entries(experience).map(([key, value]) => (
				<div key={key} className="mb-4">
					<div className="flex justify-between items-baseline">
						<h3 className="font-bold text-2xl mb-1">
							{t(`items.${key}.title`)}
						</h3>
						<p className="text-sm">
							{value.company}, {value.location} | {value.period}
						</p>
					</div>
					<p className=" text-md">
						Tech stack:{" "}
						{value.stack.map((item) => (
							<>
								<span className="pr-2 text-pink-200">{item}</span>
								<span className="last:hidden pr-3"> | </span>
							</>
						))}
					</p>
					<ul className="list-disc ml-3">
						{t.raw(`items.${key}.bullets`).map((bullet, i) => (
							<li key={i} className="py-1">
								{bullet}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}

export default Experience;
