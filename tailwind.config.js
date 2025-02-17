/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff2b2bf6",
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",     
          md: "3rem",    
          lg: "4rem",  
          xl: "5rem",     
          "2xl": "6rem",  
        },
      },
    },
  },
  plugins: [],
}
