import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHTML from "remark-html";

export async function formatMarkdown(contents: string) {
	const vfile = await unified().use(remarkParse).use(remarkHTML).process(contents);
	return String(vfile);
}
