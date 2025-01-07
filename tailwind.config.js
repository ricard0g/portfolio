/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: [
        '"scale-variable", sans-serif',
        {
          fontVariationSettings: '"wdth" 100, "wght" 500',
        },
      ],
      displayLight: [
        '"scale-variable", sans-serif',
        {
          fontVariationSettings: '"wdth" 100, "wght" 300',
        },
      ],
      textSemiBold: [
        '"pf-grand-gothik-variable", sans-serif',
        {
          fontVariationSettings: '"wght" 500',
        },
      ],
    },
    extend: {
      colors: {
        shopify: {
          light: "#bbf1c8",
        },
      },
      boxShadow: {
        blob: "0 0 100px 100px #bbf1c8",
        smallBlob: "0 0 50px 50px #bbf1c8",
      },
      borderRadius: {
        circle: "50%",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
