import { files } from "@/lib/files";
import { useTranslations } from "next-intl";
import React from "react";

function Stats() {
	const t = useTranslations("stats");

	const statsData = [
		{
			label: t("yearsOfExp.label"),
			value: t("yearsOfExp.value"),
		},
		{
			label: t("githubRepos.label"),
			value: t("githubRepos.value"),
		},
		{
			label: t("techNotes.label"),
			value: t("techNotes.value", { filesLength: `${files.length - 1}` }),
		},
	];

	return (
		<div className="p-8 max-w-5xl mx-auto text-xl mb-8 " id="stats">
			<h2 className="section-heading">STATS</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{statsData.map((stat, index) => (
					<div key={index} className="text-center rounded-2xl border p-4">
						<div className="text-4xl font-bold text-blue-400">{stat.value}</div>
						<div className="text-lg font-semibold">{stat.label}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Stats;
