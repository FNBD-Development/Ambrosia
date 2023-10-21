/*
 This is way to fucking hard
 tailwind configs are shitty
 Procead with caution!!!
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*", "./SmartWiz/*", "./assets/**/*", "node_modules/preline/dist/*.js"], // Withou't this shit will break
  darkMode: 'class', // Dont touch this
  theme: {
    fontFamily: {
     Montserrat: ["Montserrat", "sans-serif"], // Fonts cause why not
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin') // Preline Cause I Hate HTML
  ],
}

