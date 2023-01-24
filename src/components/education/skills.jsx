import { AnimationOnScroll } from "react-animation-on-scroll"
import { ReactComponent as HTMLIcon } from "../../assets/svgs/html.svg"
import { ReactComponent as CSSIcon } from "../../assets/svgs/css.svg"
import { ReactComponent as ReactIcon } from "../../assets/svgs/reactjs.svg"
import { ReactComponent as JavaScriptIcon } from "../../assets/svgs/javascript.svg"
import { ReactComponent as ResponsiveIcon } from "../../assets/svgs/responsive.svg"
import { ReactComponent as SCSSIcon } from "../../assets/svgs/scss.svg"
import { ReactComponent as StyledComponentsIcon } from "../../assets/svgs/styled-components.svg"
import { ReactComponent as JestIcon } from "../../assets/svgs/jest.svg"

import "./skills.styles.scss"


function Skills (){
  return (
    <AnimationOnScroll animateIn="animate__fadeInRight">
      <h2>SKILLS</h2>
      <ul>
          <li className="skills-list-items"><HTMLIcon className="icon"/> HTML</li>
          <li className="skills-list-items"><CSSIcon className="icon"/> CSS</li>
          <li className="skills-list-items"><SCSSIcon  className="icon"/> Sass/SCSS</li>
          <li className="skills-list-items"><JavaScriptIcon className="icon" /> JavaScript</li>
          <li className="skills-list-items"><ReactIcon className="icon"/> React </li>
          <li className="skills-list-items"><ResponsiveIcon className="icon" /> Responsive layouts(mobile first approach)</li>
          <li className="skills-list-items"><StyledComponentsIcon className="icon styled" /> Styled Components (CSS-in-JS)</li>
          <li className="skills-list-items"><JestIcon className="icon" /> Jest</li>
      </ul>

      <a className="download" href="/Akshaya_Kini_Resume.pdf" download>Click to download Resume</a> 
    </AnimationOnScroll>
  )
}

export default Skills