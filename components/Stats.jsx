import { files } from "@/lib/files";
import { useTranslations } from "next-intl";
import React from "react";

function Stats() {
	const t = useTranslations("stats");

	const statsData = ["yearsOfExp", "githubRepos", "techNotes"];

	return (
		<div className="p-8 max-w-5xl mx-auto text-xl mb-8 " id="stats">
			<h2 className="section-heading">STATS</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{statsData.map((stat) => (
					<div key={stat} className="text-center rounded-2xl border p-4">
						<div className="text-4xl font-bold text-blue-400">
							{t(`${stat}.value`, { filesLength: `${files.length - 1}` })}
						</div>
						<div className="text-lg font-semibold">{t(`${stat}.label`)}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Stats;
