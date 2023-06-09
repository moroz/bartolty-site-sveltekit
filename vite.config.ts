import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import path from "path";
import svelteSVG from "@poppanator/sveltekit-svg";

export default defineConfig({
	plugins: [sveltekit(), svelteSVG()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	resolve: {
		alias: {
			"@": path.join(process.cwd(), "src/"),
			"@css": path.join(process.cwd(), "src/css"),
			"@components": path.join(process.cwd(), "src/components")
		}
	}
});
