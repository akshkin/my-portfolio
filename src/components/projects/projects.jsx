import { useState } from "react";
import data from "../../data";
import Project from "./project";
import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";
import { createPortal } from "react-dom";

function Projects() {
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);

  const activeProject = data.find((project) => activeId === project.id);

  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "scroll";
  }

  return (
    <div className="projects">
      <div className="projects-container">
        {data.map((project) => (
          <Project
            setActiveId={setActiveId}
            key={project.id}
            project={project}
            setOpen={setOpen}
          />
        ))}
      </div>
      {open &&
        createPortal(
          <div className="overlay" onClick={closeModal}>
            {/* to stop the click event to bubble upto the overlay, using e.stopPropagation
          this prevents any clicking on the modal to bubble to the overlay causing the modal to close as there is a click
          event on the overlay. Clicking on the modal itslef will not close the modal if there is no click event
          on it's parent - the overlay */}
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button title="Close" className="cancel-btn" onClick={closeModal}>
                <CloseIcon />
              </button>
              <div className="modal-content">
                <div className="img-container">
                  <img
                    src={activeProject.imageUrl}
                    className="card-img"
                    alt={`${activeProject.title} screenshot`}
                  />
                </div>
                <div className="card-decription">
                  <h3>{activeProject.title}</h3>
                  <p>{activeProject.Description}</p>
                  <p>
                    <span className="accent-color">Technologies used:</span>{" "}
                    {activeProject.builtWith}
                  </p>
                  {activeProject.sourceCode ? (
                    <div className="links-container">
                      <a
                        href={activeProject.sourceCode}
                        rel="noreferrer"
                        target="_blank"
                        className="btn"
                      >
                        Source Code
                      </a>
                      {activeProject.liveDemo && (
                        <a
                          href={activeProject.liveDemo}
                          rel="noreferrer"
                          target="_blank"
                          className="btn"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="coming-soon">Coming soon!</span>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.getElementById("root")
        )}
    </div>
  );
}

export default Projects;
