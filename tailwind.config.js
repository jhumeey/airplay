/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          "play-01": "#0a0e10",
          "play-02": "#1b1f24",
          "play-03": "#25282a",
          "play-04": "#13171a",
          "play-05": "#121212",
          "play-06": "#181818"
        },
        gray: {
          "play-01": "#191c1e",
          "play-02": "#505356",
          "play-03": "#232428",
          "play-04": "#848086",
          "play-05": "#181c1e",
          "play-06": "#141414",
          "play-07": "#b3b3b3"
        }
      },
      fontFamily: {
        Gotham: ["Gotham", "sans-serif"],
      },
    },
  },
  plugins: [],
}
