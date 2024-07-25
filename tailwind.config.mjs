/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
				exo2: ["Exo2", "sans-serif"],
			},
		},
	},
	plugins: [],
};
