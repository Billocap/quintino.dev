/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "sans": ['"Open Sans"', "sans-serif"]
    },
    fontSize: {
      "base": "0.75rem",
      "h4": "1.125rem",
      "h3": "1.5rem",
      "h2": "1.875rem",
      "h1": "2.25rem"
    },
    extend: {
      colors: {
        "main": "#EEEEECE3",
        "accent": "#FFFFFF0D"
      }
    }
  },
  plugins: [],
}
