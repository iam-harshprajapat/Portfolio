const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tommy: ["Tommy, sans", ...defaultTheme.fontFamily.sans],
        para: ["Para"],
        stylish: ["stylish"],
      },
      colors: {
        golden: "#f8dc72",
        darkbrown: "#532200",
      },
    },
  },
  plugins: [],
};
