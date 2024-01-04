/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      "nunito-bold": ["Nunito-Bold", "sans-serif"],
    },
    colors: {
      app: {
        accent: "red",
        caption: "#844DFF"
      },
      purple: {
        100: "#844DFF",
      },

      violet: "#844DFF",
      black: "#121512",
      blue: "#3975F1",
      pink: "#FF2CF5",
      red: "#F92D55",
      green: "#00EF5C",
    },
    extend: {},
  },
  plugins: [],
};
