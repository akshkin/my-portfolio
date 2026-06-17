import data from "@/src/data";
import Project from "./project";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

function Projects() {
	return (
		<div className="" id="projects">
			<h2 className="text-center mt-16 mb-0">MY PROJECTS</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,400px))] justify-center gap-8 align-middle p-8">
				{data.map((project) => (
					<Dialog key={project.id} className="mx-8">
						<DialogTrigger asChild>
							<Project project={project} />
						</DialogTrigger>
						<DialogContent className="w-[92vw] sm:max-w-2xl max-w-2xl sm:p-4 bg-black/90 text-white border-none ">
							<DialogHeader>
								<DialogTitle className="px-4">{project.title}</DialogTitle>
								<DialogDescription className="text-stone-200 text-lg"></DialogDescription>
							</DialogHeader>
							<div className="overflow-y-auto max-h-[60vh]">
								{project.Description}
								<p className="mt-4">
									<span className="text-pink-600 font-bold">
										Technologies used:
									</span>{" "}
									{project.builtWith}
								</p>
							</div>

							<DialogFooter className="bg-transparent">
								{project.sourceCode ? (
									<div className="flex gap-8  justify-end">
										<a
											href={project.sourceCode}
											rel="noreferrer"
											target="_blank"
											className="px-4 py-2 bg-purple-700 hover:bg-purple-700 transition-colors duration-300 border-0 rounded-md"
										>
											Source Code
										</a>
										{project.liveDemo && (
											<a
												href={project.liveDemo}
												rel="noreferrer"
												target="_blank"
												className="px-4 py-2 bg-pink-800 hover:bg-pink-700 transition-colors duration-300 border-0 rounded-md"
											>
												Live Demo
											</a>
										)}
									</div>
								) : (
									<span className="coming-soon">Coming soon!</span>
								)}
							</DialogFooter>
						</DialogContent>
					</Dialog>
				))}
			</div>
		</div>
	);
}

export default Projects;
