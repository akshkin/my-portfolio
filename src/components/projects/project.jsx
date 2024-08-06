import "./project.style.scss";

function Project({ project, setActiveId, setOpen }) {
  const { title, imageUrl, id } = project;
  function openModal() {
    setActiveId(id);
    setOpen(true);

    document.body.style.overflow = "hidden";
  }
  return (
    <div className="card" onClick={openModal}>
      <img
        src={imageUrl}
        className="card-img"
        alt={`${project.title} screenshot`}
      />
      <h3>{title}</h3>
    </div>
  );
}

export default Project;
