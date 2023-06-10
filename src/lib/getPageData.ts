import matter from "gray-matter";
import fs from "fs/promises";
import { formatMarkdown } from "./markdown";

export default async function getPageData(slug: string) {
	const source = await fs.readFile(`src/content/pages/pl/${slug}.md`);
	const { content, data } = matter(source);
	const md = await formatMarkdown(content);
	return { ...data, md };
}
