/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
    },

    extend: {
      colors: {
        lightOrange: "#d2512d",
        lightOrangeHover: "#d55d3aff",
        darkOrange: "#a63626",
        lightGreen: "#309da0",
        lightGreenHover: "#3ababeff",
        darkGreen: "#1b6e6d",
        darkGray: "#5c5a5a",
      },
    },
    fontFamily: {},
  },
  plugins: [nextui()],
};
