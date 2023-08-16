import "./project.style.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Project({ project, setActiveId, setOpen }) {
  const { title, imageUrl, Description, builtWith, sourceCode, liveDemo, id } =
    project;
  function openModal() {
    setActiveId(id);
    setOpen(true);
  }
  return (
    // <AnimationOnScroll
    //   animateIn="animate__fadeInUp"
    //   key={title}
    //   className="card"
    // >

    <div className="card" onClick={openModal}>
      <div className="img-container">
        <img
          src={imageUrl}
          className="card-img"
          alt={`${project.title} screenshot`}
        />
      </div>
      <h3>{title}</h3>
      {/* <div className="card-decription">
        <h3></h3>
        <p>{Description}</p>
        <p>
          <span className="accent-color">Technologies used:</span> {builtWith}
        </p>
        {sourceCode ? (
          <>
            <a
              href={sourceCode}
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              Source Code
            </a>
            {liveDemo && (
              <a
                href={liveDemo}
                rel="noreferrer"
                target="_blank"
                className="btn"
              >
                Live Demo
              </a>
            )}
          </>
        ) : (
          <span className="coming-soon">Coming soon!</span>
        )}
      </div> */}
    </div>
    // </AnimationOnScroll>
  );
}

export default Project;
