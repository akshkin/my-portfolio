import fs from "fs";
import { ArrowLeft } from "lucide-react";
import path from "path";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params, searchParams }, parent) {
	// read route params
	const { slug } = await params;

	return {
		title: slug,
	};
}

export default async function BlogPost({ params }) {
	const { slug } = await params;
	const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

	const fileContent = fs.readFileSync(decodeURIComponent(filePath), "utf8");

	return (
		<main className="p-10 max-w-3xl mx-auto">
			<ArrowLeft /> Back to{" "}
			<a href="/blog" className="underline">
				all tech notes
			</a>
			<article
				className="mt-4 prose prose-invert prose-lg prose-headings:text-white prose-h1:text-5xl
                prose-p:text-gray-300
                prose-code:text-pink-400
                prose-pre:bg-zinc-900
                prose-headings:text-left
                prose-pre:rounded-xl
                prose-pre:p-4
                prose-code:before:hidden
                prose-code:after:hidden
                prose-headings:tracking-tight
                prose-img:rounded-xl
                "
			>
				<ReactMarkdown
				// components={{
				// 	code({ children }) {
				// 		return (
				// 			<pre className="rounded-lg p-4 overflow-auto">
				// 				<code>{children}</code>
				// 			</pre>
				// 		);
				// 	},
				// }}
				>
					{fileContent}
				</ReactMarkdown>
			</article>
		</main>
	);
}
