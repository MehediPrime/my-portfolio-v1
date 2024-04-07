/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      yellow: "#fcda69",
      purple: "#8873f0",
      skyblue: "#b9f2fe",
      red: "#f76b69",
      blue: "#0a66c2",
      grayDark: "#262626",
    },
  },
  plugins: [],
};
