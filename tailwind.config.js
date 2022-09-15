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
        },
        gray: {
          "play-01": "#191c1e",
          "play-02": "#505356"
        }
      }
    },
  },
  plugins: [],
}
