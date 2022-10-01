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
      </ul>
    </AnimationOnScroll>
  )
}

export default Education