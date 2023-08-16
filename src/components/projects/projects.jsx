import { useState } from "react";
import data from "../../data";
import Project from "./project";

function Projects() {
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);

  const activeProject = data.find((project) => activeId === project.id);

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
      {open && (
        <div className="overlay">
          <div className="modal">
            <button className="cancel-btn" onClick={() => setOpen(false)}>
              X
            </button>
            <div className="img-container">
              <img
                src={activeProject.imageUrl}
                className="card-img"
                alt={`${activeProject.title} screenshot`}
              />
            </div>
            {/* <h3>{activeProject.title}</h3> */}
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
      )}
    </div>
  );
}

export default Projects;
