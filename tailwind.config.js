/** 
 * * This is way to fucking hard
 * * tailwind configs are shitty
 * * Procead with caution!!!
**/

/** @type {import('tailwindcss').Config} */
export default {
  /*
   * Aha i fixed the sidebar problem! It was that i forgot "./templates/*" in the contents thing below 
  */
  content: ["./views/**/*", "./templates/*", "./SmartWiz/*", "./assets/**/*", "node_modules/preline/dist/*.js"], // Withou't this shit will break
  darkMode: 'class', // ! Dont touch this
  theme: {
    fontFamily: {
     Montserrat: ["Montserrat", "sans-serif"], // TODO: ADD A BETTER FUCKING FONT
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin') // * Only preline can save this project
  ],
}

