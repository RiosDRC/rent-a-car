/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#CED7E4",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: {'max': '480px'},
      ss: {'max': '620px'},
      sm: {'max': '768px'},
      md: {'max': '1060px'},
      lg: {'max': '1200px'},
      xl: '1700px',
    },
  },
  plugins: [],
};