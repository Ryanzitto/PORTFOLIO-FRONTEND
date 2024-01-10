/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sofia: ["Sofia Sans", "sans-serif"],
      Condensed: ["Sofia Sans Extra Condensed"],
      nunito: ["Nunito Sans"],
    },
  },
  plugins: [],
};
