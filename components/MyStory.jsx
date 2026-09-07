import React from "react";

const myStory = [
	{
		year: "2022 - where it all began",
		info: "Discovered web development through Scrimba and immediately fell in love with building things. What started as curiosity quickly became a passion that I couldn't put down.",
	},
	{
		year: "Feb 2024 - June 2024 — First real-world experience",
		info: "Landed my first internship and applied everything I had been teaching myself for two years.",
	},
	{
		year: "Mid 2024 — Expanding horizons",
		info: "Explored mobile development with Flutter/Dart while pursuing a potential opportunity.",
	},
	{
		year: "Dec 2024 - Dec 2025 — Investing time in Swedish",
		info: "Committed to learning Swedish to fully integrate into the Swedish tech industry.",
	},
	{
		year: "May 2025 – Nov 2025",
		info: "Worked as Vårdbiträde and developed teamwork, communication and responsibility in a high-pressure environment",
	},
	{
		year: "Nov 2025- May 2026 — Formalizing my skills",
		info: "Joined Lexicon's fullstack program to complement my self-taught background with structured education.",
	},
	{
		year: "May 2026 – Aug 2026",
		info: "APL - Webbutvecklare Uppåkra Arkeologiska Center",
	},
];

function MyStory() {
	return (
		<section className="p-8 max-w-5xl mx-auto text-xl mb-8 scroll-mt-16">
			<h2 className="section-heading uppercase">My Story</h2>
			{myStory.map((item) => (
				<div className="relative p-2">
					<h3 className="text-purple-300 pl-10">{item.year}</h3>
					<p className="pl-10">{item.info}</p>
					<div>
						<span className="w-5 h-5 rounded-full bg-gray-100 absolute top-3"></span>
						<span className="w-[2px] h-full bg-gray-100 absolute top-1 left-4"></span>
					</div>
				</div>
			))}
		</section>
	);
}

export default MyStory;
