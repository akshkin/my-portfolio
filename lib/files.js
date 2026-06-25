import fs from "fs";
import path from "path";

export const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));

export const posts = files.map((filename) => {
	const filePath = path.join(process.cwd(), "content/blog", filename);
	const fileContent = fs.readFileSync(filePath, "utf8");

	return {
		slug: filename.replace(".mdx", ""),
		...fileContent,
	};
});
