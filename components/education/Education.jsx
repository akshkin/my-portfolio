import { AnimationOnScroll } from "react-animation-on-scroll";
import { certificates } from "./data";

function Education() {
	return (
		// <AnimationOnScroll animateIn="animate__fadeInLeft" className="certificates">
		<section className="mx-auto max-w-3xl" id="education">
			<h2 className="section-heading">CERTIFICATES / EDUCATION</h2>
			{certificates.map((certificate) => (
				<div
					key={certificate.name}
					className="bg-linear-to-r from-purple-900 to-blue-800 text-white p-4 max-w-5xl mx-auto my-4 rounded-md"
				>
					<p>
						<span className="text-xl font-semibold">{certificate.name}, </span>
						<span className="italic text-gray-100">{certificate.provider}</span>
					</p>
				</div>
			))}
		</section>
		// </AnimationOnScroll>
	);
}

export default Education;
