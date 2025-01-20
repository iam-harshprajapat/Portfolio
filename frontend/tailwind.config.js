/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      redhat: ['Red Hat Text', 'serif'],
      roboto: ['Roboto Condensed', 'serif']
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-motion')
  ],
}

