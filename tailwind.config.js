/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#0F9FBC",
        "primary-hover": "#0a7389",
        secondary: "#38723F",
      }
    },
  },
  plugins: [],
}

