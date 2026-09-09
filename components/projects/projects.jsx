import data from "@/data";
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
import Link from "next/link";
import { useTranslations } from "next-intl";

function Projects() {
	const t = useTranslations("projects");
	return (
		<section className="scroll-mt-20" id="projects">
			<h2 className="section-heading">{t("title")}</h2>
			<p className="text-center text-xl bg-pink-800 p-4">
				{t.rich("text", {
					challengesLink: (chunks) => (
						<Link
							href="/blog"
							className="text-purple-200 hover:filter hover:brightness-125 transition+colors duration-300"
						>
							{chunks}
						</Link>
					),
				})}
			</p>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] justify-center gap-8 align-middle py-8">
				{Object.entries(data).map(([key, value]) => (
					<Dialog key={key} className="mx-8">
						<DialogTrigger asChild>
							<Project
								title={t(`items.${key}.title`)}
								imageUrl={value.imageUrl}
							/>
						</DialogTrigger>
						<DialogContent className="w-[92vw] sm:max-w-2xl max-w-2xl sm:p-4 bg-black/90 text-white border-none">
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold text-center">
									{t(`items.${key}.title`)}
								</DialogTitle>
								<DialogDescription className="text-stone-200 text-lg"></DialogDescription>
							</DialogHeader>
							<div className="overflow-y-auto max-h-[60vh] text-gray-100 text-xl no-scrollbar">
								{t(`items.${key}.description`)}
								<p className="mt-4">
									<span className="text-pink-600 font-bold">
										{t("builtWith")}
									</span>{" "}
									{value.builtWith}
								</p>
							</div>

							<DialogFooter className="bg-transparent">
								{value.sourceCode ? (
									<div className="flex gap-8  justify-end">
										<a
											href={value.sourceCode}
											rel="noreferrer"
											target="_blank"
											className="px-4 py-2 bg-purple-700 hover:bg-purple-700 transition-colors duration-300 border-0 rounded-md"
										>
											{t("viewCode")}
										</a>
										{value.liveDemo && (
											<a
												href={value.liveDemo}
												rel="noreferrer"
												target="_blank"
												className="px-4 py-2 bg-pink-800 hover:bg-pink-700 transition-colors duration-300 border-0 rounded-md"
											>
												{t("viewDemo")}
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
		</section>
	);
}

export default Projects;
