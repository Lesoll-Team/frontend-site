/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/language/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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

        grayText: "#828A8A",
        grayText2: "#454545",
        gray1: "#A3A1A1",
        gray2: "#656565",
        // gray3: "#454545",
        //656565 A3A1A1 454545
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        ss: "440px",
        xs: "340px",
      },
    },
    fontFamily: {},
  },
  plugins: [nextui()],
};
