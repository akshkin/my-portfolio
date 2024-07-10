import "./project.style.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Project({ project, setActiveId, setOpen }) {
  const { title, imageUrl, id } = project;
  function openModal() {
    setActiveId(id);
    setOpen(true);

    document.body.style.overflow = "hidden";
  }
  return (
    // <AnimationOnScroll
    //   animateIn="animate__fadeInUp"
    //   key={title}
    //   className="card"
    // >

    <div className="card" onClick={openModal}>
      {/* <div className="img-container"> */}
      <img
        src={imageUrl}
        className="card-img"
        alt={`${project.title} screenshot`}
      />
      {/* </div> */}
      <h3>{title}</h3>
    </div>
    // </AnimationOnScroll>
  );
}

export default Project;
