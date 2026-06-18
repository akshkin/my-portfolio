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
		<div className="p-10">
			<h1 className="text-3xl font-bold mb-6">My tech notes</h1>

			<div className=" flex flex-wrap gap-4">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="max-w-lg block w-[250px]"
					>
						<div className="p-2 border rounded-lg hover:border-pink-300 transition-colors duration-300">
							<h2 className="text-xl font-bold">{post.slug}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
