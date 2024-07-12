import "./education.style.scss";
import { ReactComponent as CertficateIcon } from "../../assets/svgs/certificate.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { certificates } from "./data";

function Education() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft" className="certificates">
      <h2>CERTIFICATES / EDUCATION</h2>
      {certificates.map((certificate) => (
        <div key={certificate.name} className="certificate">
          <p>
            {certificate.name},{" "}
            <span className="provider">{certificate.provider}</span>
          </p>
        </div>
      ))}
      {/* <div className="certificate">
        <h4>
          The Frontend Developer Career Path,{" "}
          <span className="provider">Scrimba</span>
        </h4>
      </div>
      <ul className="certificates-list">
        <li>Learn UI Design, Scrimba</li>
        <li>Responsive Web Design, Scrimba</li>
        <li>Frontend Career Path, Scrimba</li>
        <li>
          Skyscanner Front-End Software Engineering Virtual Experience Program
          on Forage - January 2023
          <br />
          <small>
            Built a web application using React and Backpack library and gained
            experience working with tools which are used at Skyscanner.
          </small>
        </li>
        <li>The Complete Node JS Developer Course</li>
      </ul> */}
    </AnimationOnScroll>
  );
}

export default Education;
