import { useTranslations } from "next-intl";
import React from "react";

function MyStory() {
	const t = useTranslations("myStory");

	const myStory = [
		"scrimba",
		"firstInternship",
		"flutter",
		"swedish",
		"vardbitrade",
		"lexicon",
		"uppakra",
	];
	return (
		<section className="max-w-5xl mx-auto text-xl mb-8 scroll-mt-16">
			<h2 className="section-heading uppercase">{t("title")}</h2>
			{myStory.map((item) => (
				<div className="relative p-2" key={item}>
					<h3 className="text-purple-300 pl-10">{t(`items.${item}.year`)}</h3>
					<p className="pl-10">{t(`items.${item}.info`)}</p>
					<div>
						<span className="w-5 h-5 rounded-full bg-gray-100 absolute top-3"></span>
						<span className="w-0.5 h-full bg-gray-100 absolute top-1 left-4"></span>
					</div>
				</div>
			))}
		</section>
	);
}

export default MyStory;
