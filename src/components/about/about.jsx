import "./about.styles.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" className="inner">
      <h2>ABOUT ME</h2>

      <p>
        As a web developer with two years of continuous learning experience, my
        focus is on front-end development, utilizing HTML, CSS, JavaScript, and
        React to create intuitive user experiences. I am passionate about
        continuously improving my skills and collaborating with dynamic teams to
        deliver impactful projects. I am open to collaborate on interesting
        projects that add value.
      </p>

      <p>When I am not coding, I like to spend time with my family.</p>
    </AnimationOnScroll>
  );
}

export default About;
