 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ml': '880px',
      },
      fontFamily: {
        BSD: ['"Big Shoulders Display"'],
        Lexend: ['"Lexend Deca"']
      }
    }
  },
  plugins: [],
}