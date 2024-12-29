/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        pinky: {
          "50": "#fff1f4",
          "100": "#fee5e9",
          "200": "#fdceda",
          "300": "#fba1b7",
          "400": "#f87497",
          "500": "#f04375",
          "600": "#dd2161",
          "700": "#bb1552",
          "800": "#9c154a",
          "900": "#861546",
          "950": "#4b0622",
        },
        dark: "#2A3335",
        light: "#F5F5F5",
      },
    },
    fontFamily: {
      Revolution: ["CustomFont", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "CustomFont",
          src: 'url("/src/assets/fonts/custom-font.woff2") format("woff2"), url("/src/assets/fonts/custom-font.woff") format("woff")',
          fontWeight: "400",
          fontStyle: "normal",
        },
      });
    }),
  ],
};
