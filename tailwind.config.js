/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#217e17",
          300: "#aadf94",
          500: "#7dbf6a",
          700: "#4f9f41",
        },
        }
    },
  },
  plugins: [],
};
