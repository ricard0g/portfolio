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
      textBold: [
        '"pf-grand-gothik-variable", sans-serif',
        {
          fontVariationSettings: '"wght" 800',
        },
      ],
    },
    extend: {
      keyframes: {
        "background-slide": {
          "0%": {
            "background-position": "left",
          },
          "50%": {
            "background-position": "right",
          },
          "100%": {
            "background-position": "left",
          },
        },
      },
      animation: {
        "background-slide": "background-slide 25s linear infinite",
      },
      colors: {
        shopify: {
          light: "#bbf1c8",
        },
        googleCircleGreen: "rgba(5, 255, 159, 0.06)",
      },
      boxShadow: {
        button: "-4px 4px 0 rgb(55, 65, 81)",
        buttonHover: "-8px 8px 0 #000",
        blob: "0 0 100px 100px #bbf1c8",
        smallBlob: "0 0 50px 50px #bbf1c8",
        googleCircle:
          "0px 0.5px 0px 0.5px rgba(0, 0, 0, 0.15),  0px 10px 30px 0px rgba(243, 244, 246, 0.25) ",
      },
      borderRadius: {
        circle: "50%",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(100% 64% at 50% 100%,#D1FBEB 0%,rgb(243,244,246) 100%);",
        "apps-background":
          "url('./src/assets/images/apps-integration-image.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
