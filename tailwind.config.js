/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#80c851",
          50: "#f2faeb",
          100: "#e2f4d3",
          200: "#a3da7c",
          300: "#a3da7c",
          500: "#62ae34",
          600: "#4a8a26",
          700: "#396a21",
          800: "#31551f",
          900: "#2c481f",
          950: "#14270c",
        },
        secondary: {
          DEFAULT: "#e59252",
          50: "#fdf7ef",
          100: "#faecda",
          200: "#f4d5b4",
          300: "#edb884",
          500: "#df7530",
          600: "#d05d26",
          700: "#ad4821",
          800: "#8a3a22",
          900: "#70321e",
          950: "#3c170e",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "roboto"],
      },
      animation: {
        "animated-gradient": "gradient-move-infinite 10s infinite alternate",
      },
      keyframes: {
        "gradient-move-infinite": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "100% 100%",
          },
        },
      },
    },
    plugins: [],
  },
};
