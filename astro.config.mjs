// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";
import { processIcons } from "./src/pureUI/modules/pureIconPlugin";

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), solidJs()],
	vite: {
		resolve: {
			alias: {
				"@": new URL("./src", import.meta.url).pathname,
			},
		},
		plugins: [
			{
				name: "vite-build-plugin",
				buildStart() {
          console.log("Processing icons...");
					processIcons();
				},
			},
		],
	},
});
