/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff402c",
        secondary: "#FF0005",
        text: "#000000",
        border: "#d3d3d3",
        background: "#FAFAFA",
        bgsecondary: "#E7E7E7",
        placeholder: "#8a8a8a",
      },
      borderRadius: {
        '10px': '10px', // Adding 10px rounded class
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
      screens: {
        '3xl': '1900px', // أضفت شاشة جديدة لحجم 1900px
      },
      maxWidth: {
        '3xl': '155px', // تحديد عرض الحاوية عند حجم 1900px
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
