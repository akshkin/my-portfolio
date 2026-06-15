function Project({ project }) {
	const { title, imageUrl, id } = project;

	return (
		<div className="mx-auto radius-sm overflow-hidden cursor-pointer">
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
