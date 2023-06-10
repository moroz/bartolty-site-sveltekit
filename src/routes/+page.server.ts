import getPageData from "@/lib/getPageData";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const data = await getPageData("index");

	return data;
}) satisfies PageServerLoad;
