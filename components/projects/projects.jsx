"use client";

import { useState } from "react";
import data from "@/src/data";
import Project from "./project";
// import CloseIcon from "../../assets/svgs/close.svg?react";
import { X } from "lucide-react";
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
			<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,400px))] justify-center gap-8 align-middle p-8">
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
					<div
						className="fixed top-0 left-0 transition-opacity duration-300 height-full width-full background-color-rgba(136, 136, 136, 0.399) padding-1em z-index-999"
						onClick={closeModal}
					>
						{/* to stop the click event to bubble upto the overlay, using e.stopPropagation
          this prevents any clicking on the modal to bubble to the overlay causing the modal to close as there is a click
          event on the overlay. Clicking on the modal itslef will not close the modal if there is no click event
          on it's parent - the overlay 
		  
		   background-color: $black;
    color: $white;
    width: 90%;
    margin: 1em auto;
    padding: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
    border-radius: 20px;
    max-height: 90vh;
    animation: fadeInUp 0.5s forwards;

		  
		 */}
						<div
							className="fixed top-0 left-0 width-full height-full background-color-black color-white margin-1em-auto padding-1em padding-top-2em padding-bottom-2em border-radius-20px max-height-90vh animation-fadeInUp-0.5s-forwards"
							onClick={(e) => e.stopPropagation()}
						>
							<button title="Close" className="cancel-btn" onClick={closeModal}>
								<X />
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
					document.getElementById("root"),
				)}
		</div>
	);
}

export default Projects;
