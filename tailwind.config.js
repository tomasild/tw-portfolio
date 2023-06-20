/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'), 
        "general": '#14213D',
        "casual": '#2b467d',
        'destacado': '#466EC3',
        "claro": '#d4ddf1'
      }),
      textColor: {
        "texto": '#E8EDF8',
        "titulo": '#A3B6E1',
        'hover': '#466EC3',
        "claro": '#14213d',
      },
      fontFamily: {
        Montserrat: [
          'Montserrat', 'sans-serif'
        ]
      }
    }
  },
  plugins: [],
}
