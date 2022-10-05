import "./hero.style.scss"
import AnimatedLetters from "../animated-letters/animated-letters.component"

function Hero(){
  const letterClass = "text-animate"
  const name = "Akshaya  Kini"
  const nameArray = name.split('')
  const jobTitle = "Frontend Developer"
  const jobTitleArray = jobTitle.split('')

   
  return (
    <div className="hero" >
      <h1 className="hero-title">
        <span className={letterClass}>Hi,  </span> 
        <span className={`${letterClass} _14`}> I'm </span>
        <span className="accent">
          <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
        </span>
      </h1>
      <p className="hero-subtitle">
        <AnimatedLetters letterClass={letterClass}
          strArray={jobTitleArray}
          index={25}
        />
      </p>
    </div>    
  )
}

export default Hero