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

			<div className="space-y-4">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="max-w-lg block hover:text-pink-200 rounded-lg transition-colors duration-300"
					>
						<div className="p-4 border rounded-lg">
							<h2 className="text-xs font-semibold">{post.slug}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
