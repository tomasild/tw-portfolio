/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'lofi': "url('../dist/img/lofi-lg.png')",
        'front': "url('../dist/img/front.jpg')",
        'lofi': "url('../dist/img/lofi-lg.png')",
        'lofi': "url('../dist/img/lofi-lg.png')",
        'lofi': "url('../dist/img/lofi-lg.png')",
        'lofi': "url('../dist/img/lofi-lg.png')",
        'lofi': "url('../dist/img/lofi-lg.png')",
        'lofi': "url('../dist/img/lofi-lg.png')",
      },
      backgroundColor: theme => ({
        ...theme('colors'), 
        "primary": '#CC2D4A',
        "secondary": '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        "primary": '#CC2D4A',
        "secondary": '#8FA206',
        'terciary': '#61AEC9'
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
