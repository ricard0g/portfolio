/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        shopify: {
          light: "#BBF1C8",
          main: "#008060",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
