/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: {
        100: "#ffffff",
        500: "#e4e4e4",
        900: "#b0b0b0",
      },
      black: {
        100: "#757575",
        500: "#424242",
        900: "#0f0f0f",
      },
      red: {
        100: "#f18d8d",
        500: "#e63030",
        900: "#a01313",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
