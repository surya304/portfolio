/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Pacifico: ["Pacifico", ...defaultTheme.fontFamily.sans],
        Ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        Shrikhand: ["Shrikhand", ...defaultTheme.fontFamily.sans],
        Exo: ["Exo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}