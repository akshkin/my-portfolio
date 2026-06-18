function Project({ project }) {
	const { title, imageUrl } = project;

	return (
		<div className="mx-auto radius-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
			<img
				src={imageUrl}
				className="max-w-full max-h-[80vh] object-contain transform transition-transform ease-in duration-300 hover:scale-110"
				alt={`${project.title} screenshot`}
			/>
			<h3 className="text-xl font-bold mt-4 text-center">{title}</h3>
		</div>
	);
}

export default Project;
