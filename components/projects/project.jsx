// import "./project.style.scss";

function Project({ project, setActiveId, setOpen }) {
	const { title, imageUrl, id } = project;
	function openModal() {
		setActiveId(id);
		setOpen(true);

		document.body.style.overflow = "hidden";
	}

	/**
	 * 
	 *  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;


   img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    transform: scale(1);
    transition: transform ease-in 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
	 */
	return (
		<div
			className="mx-auto radius-sm overflow-hidden cursor-pointer"
			onClick={openModal}
		>
			<img
				src={imageUrl}
				className="max-w-full max-h-[80vh] object-contain transform transition-transform ease-in duration-300 hover:scale-110"
				alt={`${project.title} screenshot`}
			/>
			<h3 className="mt-0">{title}</h3>
		</div>
	);
}

export default Project;
