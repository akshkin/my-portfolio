import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Education from "@/components/education/Education";
import Experience from "@/components/Experience";
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
			<About />
			<MyStory />
			<Stats />
			<Projects />
			<Experience />
			<Skills />
			<Education />
			<Approach />
			<Testimonials />
			<Contact />
		</>
	);
}
