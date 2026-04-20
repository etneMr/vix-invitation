/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#faf8f5',
        terracotta: '#c4786b',
        sage: '#a6ae9d',
        gold: '#918a6d',
        skyline: '#c5d4e0',
      },
    },
  },
  plugins: [],
}
