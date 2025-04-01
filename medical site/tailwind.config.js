import { transform } from 'sucrase';

 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center : true,
      padding : "1rem",
      screens :{
        lg : "1124px",
        xl : "1124px",
        "2xl" : "1124px",
      }
    },
    fontFamily : {
      poppins : ["poppins , sans-serif"]
    },
    extend: {
      colors : {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
  },
  plugins: [],
}