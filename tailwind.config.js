/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: "#00a6e8",
          dark: "#0091cb",
          light: "#3dc8ff",
          white: "#d7f4ff",
        },
      },
      fontFamily: {
        sans: [
          "Poppins",
          "Noto Sans TC",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
