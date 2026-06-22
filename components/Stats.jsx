import React from "react";

const statsData = [
	{
		label: "Years of Experience",
		value: "3+",
	},
	{
		label: "GitHub Repositories",
		value: "60+",
	},
	{
		label: "Tech Notes",
		value: "5+",
	},
];

function Stats() {
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
