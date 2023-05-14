import "./about.styles.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
//import { ReactComponent as SVG } from "../../assets/Vorderrhein.svg"

function About() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" className="inner">
      <h2>ABOUT ME</h2>
      <p>
        As a self-taught web developer with a background in Alternative
        Medicine, I bring a unique perspective to web development. With a year
        of experience, my focus is on front-end development, utilizing HTML,
        CSS, JavaScript, and React to create intuitive user experiences. I also
        have knowledge of Node.js for backend development. I am passionate about
        continuously improving my skills and collaborating with dynamic teams to
        deliver impactful projects..
      </p>

      <p>
        When I am not coding, I am spending time with my toddler and husband.
      </p>
    </AnimationOnScroll>
  );
}

export default About;
