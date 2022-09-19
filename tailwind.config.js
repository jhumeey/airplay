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
        },
        gray: {
          "play-01": "#191c1e",
          "play-02": "#505356",
          "play-03": "#232428",
          "play-04": "#848086",
          "play-05": "#181c1e"
        }
      }
    },
  },
  plugins: [],
}
