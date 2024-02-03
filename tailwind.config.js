/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/**/*.{html,ts}"],
  theme: {
    extend: {
      // dodawanie customowych rzeczy
      colors: {
        transparent: "transparent",
        main: "rgba(173, 225, 255, 0.185)",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
