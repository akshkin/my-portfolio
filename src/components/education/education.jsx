import "./education.style.scss";
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
    </AnimationOnScroll>
  );
}

export default Education;
