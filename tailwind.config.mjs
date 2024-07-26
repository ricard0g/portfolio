import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand Variable', ...defaultTheme.fontFamily.sans],
		mono: ['"Exo 2 Variable"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'accent': '#D7F205',
        'text': '#CDCDCD',
        'background': '#262626',
      }
    },
  },
  plugins: [],
}