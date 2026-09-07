import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/education/Education";
import Hero from "@/components/Hero";
import MyStory from "@/components/MyStory";
import Projects from "@/components/projects/projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Stats />
			<MyStory />
			<About />
			<Skills />
			<Education />
			<Testimonials />
			<Projects />
			<Contact />
		</>
	);
}
