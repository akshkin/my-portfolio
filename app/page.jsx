import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/education/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
	return (
		<>
			<Hero />
			<About />
			<Skills />

			<Education />
			<Testimonials />

			<Projects />

			<Contact />
		</>
	);
}
