import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				'quicksand': ['Quicksand', ...defaultTheme.fontFamily.sans],
				'exo2': ['"Exo 2"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
};
