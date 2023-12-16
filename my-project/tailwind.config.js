/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dhurjati: ["Dhurjati", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bnm: {
          primary: "#d85441",
          secondary: "#361f1b",
          accent: "#f2dc74",
          neutral: "#cac9b4",
          "base-100": "#fdfde1",
        },

        shadowtown: {
          primary: "#ac09e1",
          secondary: "#ffffff",
          accent: "#fcb132",
          neutral: "#868a83",
          "base-100": "#000004",
        },

      },
      "default",
      "retro",
      "valentine",
      "cyberpunk",
      "aqua",
    ],
  },
};
