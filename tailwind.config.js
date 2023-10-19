/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*", "./assets/**/*", "node_modules/preline/dist/*.js"],
  theme: {
    fontFamily: {
     Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin')
  ],
}

