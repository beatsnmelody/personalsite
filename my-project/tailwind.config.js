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

        ppp: {
          primary: "#ce1515",
          secondary: "#3b0641",
          accent: "#4c8e20",
          neutral: "#5a4c4c",
          "base-100": "#e3ce91",
        },

        hp: {
          primary: "#2ba7ee",
          secondary: "#fffcdf",
          accent: "#ca061d",
          neutral: "#f7c80f",
          "base-100": "#36074d",
        },

        bgcg: {
          primary: "#de27b0",
          secondary: "#f1f1f1",
          accent: "#44d6c8",
          neutral: "#ffe355",
          "base-100": "#000000",
        },

        fungi: {
          primary: "#8cc032",
          secondary: "#fff6d9",
          accent: "#88410b",
          neutral: "#ccbd70",
          "base-100": "#271804",
        },

        dd: {
          primary: "#a131e1",
          secondary: "#1f002d",
          accent: "#ff27bb",
          neutral: "#e5bf02",
          "base-100": "#fff3af",
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
