import { AnimationOnScroll } from "react-animation-on-scroll"
import { ReactComponent as SCSSIcon } from "../../assets/svgs/scss.svg"
import { ReactComponent as JestIcon } from "../../assets/svgs/jest.svg"

function Skills (){
  return (
    <AnimationOnScroll animateIn="animate__fadeInRight">
      <h2>SKILLS</h2>
      <ul>
          <li><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.71em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 361"><path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11Z"/><path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128V337.95Z"/><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704Zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471Z"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0Zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001ZM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0Zm62.74 0h16.235v32.508h22.824v16.05h-39.06V0Z"/><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937Zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86Z"/></svg> HTML</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.71em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 361"><path fill="#264DE4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962Z"/><path fill="#2965F1" d="m212.417 314.547l19.86-222.49H128V337.95l84.417-23.403Z"/><path fill="#EBEBEB" d="m53.669 188.636l2.862 31.937H128v-31.937H53.669Zm-5.752-64.641l2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58Z"/><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0Zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0Zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0Z"/><path fill="#FFF" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576Z"/></svg> CSS</li>
          <li><SCSSIcon />Sass/SCSS</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#F7DF1E" d="M0 0h256v256H0V0Z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg> JavaScript</li>
          <li><img src="/logo192.png" width="20em" alt="react logo"/> React </li>
          <li>Responsive layouts(mobile first approach)</li>
          <li>Styled Components (CSS-in-JS)</li>
          <li><JestIcon />Jest</li>
      </ul>

      <a className="download" href="/Akshaya_Kini_Resume.pdf" download>Click to download Resume</a> 
    </AnimationOnScroll>
  )
}

export default Skills