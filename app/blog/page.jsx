import fs from "fs";
import path from "path";
import Link from "next/link";

export default function BlogPage() {
	const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));

	const posts = files.map((filename) => {
		const filePath = path.join(process.cwd(), "content/blog", filename);
		const fileContent = fs.readFileSync(filePath, "utf8");

		return {
			slug: filename.replace(".mdx", ""),
			...fileContent,
		};
	});

	return (
		<div className="p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
			<h1 className="text-3xl font-bold text-center mb-10 relative after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-violet-500 after:to-pink-500 after:mx-auto after:mt-2">
				My tech notes
			</h1>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="max-w-lg block"
					>
						<div className="p-2 border rounded-lg hover:border-pink-300 transition-colors duration-300 h-full">
							<h2 className="text-xl font-bold">{post.slug}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
