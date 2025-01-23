/** @type {import('tailwindcss').Config} */
export default {
  media: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
        // "3xl": "10rem",
      },

      // default breakpoints
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors:{
        "primary":"#256D20",
        "lightGreen":"#ECFFD1",
        "red":"#FF0909",
        "black":"#242826",
        "orange":"#FFAA01"
      },
      boxShadow:{
        card1:"0px 4px 4px 0px rgba(163, 163, 163, 0.25)",
        card2:"0px 4px 4px 0px #FFAA01"
      }
    },
  },
  plugins: [],
}

