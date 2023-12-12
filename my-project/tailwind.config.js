/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend:
      {
        fontFamily: {
          'dhurjati': ['Dhurjati', 'normal']
        },
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["default", "retro", "valentine", "cyberpunk", "aqua"],
      },
  }