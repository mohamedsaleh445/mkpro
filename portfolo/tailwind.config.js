 /** @type {import('tailwindcss').Config} */
 export default {
  darkMode :"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    container :{
      padding : '2rem'
    },
    extend: {
      screens : {
        "sm" : "480px"
      },
      spacing:{
        "big":"48rem"
      }
    },
    fontFamily :{
      nuniato:['Nunito','sans-serif']
    }
  },
  plugins: [],
}