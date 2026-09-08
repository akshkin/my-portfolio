import { useTranslations } from "next-intl";
import React from "react";

function Approach() {
	const t = useTranslations("philosophy");

	const approach = ["ux", "architecture", "ship"];

	return (
		<section className="max-w-5xl mx-auto">
			<h2 className="section-heading">How I Build</h2>
			{approach.map((item) => (
				<div key={item}>
					<h3 className="font-semibold text-2xl text-purple-200 mt-2 ">
						{t(`items.${item}.title`)}
					</h3>
					<p className="text-xl">{t(`items.${item}.description`)}</p>
				</div>
			))}
		</section>
	);
}

export default Approach;
