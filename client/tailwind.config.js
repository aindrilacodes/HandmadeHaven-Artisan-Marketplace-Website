/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dynapuff: ["DynaPuff", "serif"], 
        Agbalumo: ["Agbalumo", "system-ui"]
      },
     
    },
  },
  plugins: [],
}

