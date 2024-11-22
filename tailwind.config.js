/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "baby-pink" : "rgba(243, 243, 243, 1)",
        "dark-blue" : "rgba(30, 41, 59, 1)"

      }
    },
  },
  plugins: [],
}

