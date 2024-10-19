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
      },
      keyframes: {
        'fade-in-top-bottom': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-top-bottom': 'fade-in-top-bottom 1.5s ease',
        'fade-in': 'fade-in 2s ease',

      },
      transitionDelay: {
        '0': '0s',
        '150': '0.15s',
        '300': '0.3s',
        '450': '0.45s',
        '600': '0.6s',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};