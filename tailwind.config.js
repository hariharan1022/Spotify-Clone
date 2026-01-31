/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#191414',
          gray: '#B3B3B3',
          lightgray: '#282828',
          darkgray: '#121212'
        }
      }
    },
  },
  plugins: [],
}