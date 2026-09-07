import React from "react";

const myPhilosophy = [
	{
		id: 1,
		title: "User Experience First",
		description:
			"Every decision I make starts with one question: 'Will this make the user's experience better?'I don't consider a feature done until it feels intuitive, accessible and purposeful.",
	},
	{
		id: 2,
		title: "Architecture Before Code",
		description:
			"Before writing a single line, I think about scalability. Will this solution hold up at 10x the current load? Is this component reusable? Am I creating technical debt for future me? During my previous internship while working on the React + TypeScript application, I encountered a situation where data was being passed through props in various components. So, I suggested introducing global state management with Redux Toolkit. This reduced unnecessary API calls and made the system more scalable, giving me a deeper understanding of data flow and system design",
	},
	{
		id: 3,
		title: "Build → Ship → Improve",
		description:
			"I believe in getting something working first, then making it fast. Premature optimization kills momentum. I ship, measure, then optimize - backed by real data like Lighthouse scores, not assumptions.",
	},
];

function Approach() {
	return (
		<section className="max-w-5xl mx-auto">
			<h2 className="section-heading">How I Build</h2>
			{myPhilosophy.map((item) => (
				<div key={item.id}>
					<h3 className="font-semibold text-2xl text-purple-200 mt-2 ">
						{item.title}
					</h3>
					<p className="text-xl">{item.description}</p>
				</div>
			))}
		</section>
	);
}

export default Approach;
