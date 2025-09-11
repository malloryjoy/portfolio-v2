/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
      important: true, // all Tailwind utilities get !important
    
    theme: {
      extend: {

        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          mogra: ['Mogra', 'sans-serif'],
        },


      },
    },
    plugins: [],
  }
  

  