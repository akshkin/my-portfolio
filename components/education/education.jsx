import { AnimationOnScroll } from "react-animation-on-scroll";
import { certificates } from "./data";

// .certificate {
//     background: linear-gradient(45deg, rgba(79, 32, 96, 0.7), #e996cbb4);
//     padding: 0.1em 2em;
//     border-radius: 20px;
//     margin-block: 1em;

//     .provider {
//       font-size: smaller;
//       font-weight: 200;
//     }
//   }

//   .certificates-list {
//     li {
//       margin-block: 1em;
//       small {
//         color: #a7a2a2;
//       }
//     }
//   }

function Education() {
	return (
		// <AnimationOnScroll animateIn="animate__fadeInLeft" className="certificates">
		<section className="mx-auto max-w-3xl px-8" id="education">
			<h2>CERTIFICATES / EDUCATION</h2>
			{certificates.map((certificate) => (
				<div
					key={certificate.name}
					className="bg-gradient-to-r from-purple-900 to-blue-800 text-white p-4 max-w-5xl mx-auto my-4 rounded-md"
				>
					<p>
						{certificate.name},{" "}
						<span className="provider">{certificate.provider}</span>
					</p>
				</div>
			))}
		</section>
		// </AnimationOnScroll>
	);
}

export default Education;
