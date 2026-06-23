import RecommendationCard from "./RecommendationCard";

const testimonials = [
	{
		type: "recommendation",

		name: "Per Collner",

		role: "Solves the problem with filter-bubbles and fake news",

		organization: "NewSplitter",

		date: "September 2024",

		text: "Akshaya has completed a 4-month internship at NewSplitter, primarily working with React Native in a team with another colleague. Out of the over 30 interns we have had over the years, I have not encountered anyone who is a more skilled programmer. Additionally, she is always pleasant, positive, and cheerful.",

		source: "LinkedIn",
	},

	{
		type: "evaluation",

		name: "Magnus Olsson",

		role: "Undersköterska",

		organization: "Basunen särskilt boende",

		date: "June 2025",

		text: "Akshaya har ett varmt och mjukt bemötande mot brukare och kollegor. Akshaya håller alltid tiderna, hon är lyhörd och har lätt att lära sig. Akshaya tar stort ansvar och hon är omtyckt av kollegor och brukare. Akshaya har deltagit i alla omvårdnadssituationer och följer basala hygienrutiner, är noggran, empatisk, tålmådig, och följer personcentrerad vård. Akshaya har varit med på alla aktiviteter och arbetsupgifter och tagit egna initiativ till dessa. Akshaya är mycket observant. Akshaya behöver kommunicera mer med brukare och kollegor för att utveckla sitt språk men ser inte detta som hinder för att kunna jobba.",

		source: "Internship Evaluation",
	},
];

export default function Testimonials() {
	return (
		<section className="mx-auto max-w-6xl py-20 scroll-mt-16" id="testimonials">
			<h2 className="section-heading">WHAT OTHERS SAY ABOUT ME</h2>

			<div className="grid gap-8 md:grid-cols-2">
				{testimonials.map((item) => (
					<RecommendationCard key={`${item.name}-${item.date}`} {...item} />
				))}
			</div>
		</section>
	);
}
