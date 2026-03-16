/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        sage: '#5C7A5C',
        gold: '#C9A84C',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
