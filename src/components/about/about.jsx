import "./about.styles.scss"
import { AnimationOnScroll } from "react-animation-on-scroll"
//import { ReactComponent as SVG } from "../../assets/Vorderrhein.svg"

function About(){
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp"  className="inner">
      <h2>ABOUT ME</h2>
      <p>Passionate and self-taught front-end developer with a desire to learn and grow in a collaborative work environment. 
        I am always looking for ways to improve. I enjoy learning by building applications. 
      </p>
      <p>I have a Bachelor's degree in alternative medicine. Looking to learn something new, I came across HTML and CSS.
        And when I started coding I found my new passion and I couldn't go back and only continued to learn new skills in frontend development.        
      </p>
      <p>When I am not coding, I am spending time with my toddler and husband.</p> 
          
    </AnimationOnScroll>  
  )
}

export default About