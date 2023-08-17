import "./hero.style.scss";
import AnimatedLetters from "../animated-letters/animated-letters.component";

function Hero() {
  const letterClass = "text-animate";
  const name = "Akshaya";
  const surname = "Kini";
  const nameArray = name.split("");
  const surnameArray = surname.split("");
  const jobTitle = "Web developer with a focus on frontend";
  const jobTitleArray = jobTitle.split("");

  return (
    <div className="">
      <img src="/images/splsh.jpg" />
      <h1 className="hero-title">
        <span className={letterClass}>Hi, &nbsp; </span>
        <span className={`${letterClass} _14`}> I'm &nbsp;</span>
        <span className="accent">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          &nbsp;
          <span className="accent surname">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={surnameArray}
              index={25}
            />
          </span>
        </span>
      </h1>
      <p className="hero-subtitle">Web developer with a focus on frontend</p>
    </div>
  );
}

export default Hero;
