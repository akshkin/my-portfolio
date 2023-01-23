import "./education.style.scss"
import { AnimationOnScroll } from "react-animation-on-scroll"

function Education(){
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <h2>CERTIFICATES / EDUCATION</h2>
      <ul>
          <li>Learn UI Design, Scrimba</li>
          <li>Responsive Web Design, Scrimba</li>
          <li>Frontend Career Path, Scrimba</li>
          <li>Skyscanner Front-End Software Engineering Virtual Experience Program on Forage - January 2023<br/>
          <small>Built a web application using React and Backpack library and gained experience working with tools which are used
          at Skyscanner.</small>
          </li>
      </ul>
    </AnimationOnScroll>
  )
}

export default Education