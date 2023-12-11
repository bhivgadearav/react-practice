/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#FFF7ED',
      }),
      width: {
        'home-header-width': '34.259rem',
      },
      height: {
        'home-header-height': '6.976rem',
      },
      top: {
        'title-top': '2.25rem',
      },
      left: {
        'title-left': '1.625rem',
        'btns-left': '25.358rem',
      }
    },
  },
  plugins: [],
}
