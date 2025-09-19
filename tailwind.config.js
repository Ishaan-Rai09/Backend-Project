/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#F87171",
        neutral: "#F3F4F6",
        darkBg: "#121212",
        darkCard: "#1E1E1E",
        darkBorder: "#333333",
      },
    },
  },
  plugins: [],
} 