const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tommy: ["Tommy, sans", ...defaultTheme.fontFamily.sans],
        para: ["Para"],
      },
    },
  },
  plugins: [],
};
