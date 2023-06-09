/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1027px",
        xl:"1280px",

      },
      colours:{
        bodyColor:"#1f2235",
        color:"aliceblue",
        boxbg:"ff5823",
        titleColor:"#ff5823"
      },
      boxShadow:{
        shadow:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}