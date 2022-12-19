/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 100 column grid
        25: "repeat(25, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        // Simple 100 column grid
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-25": "span 25 / span 25",
        "span-23": "span 23 / span 23",
      },
      gridRow: {
        "span-19": "span 19 / span 19",
      },
    },
  },
  plugins: [],
};
