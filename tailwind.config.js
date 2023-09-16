/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '0.3px',
          '-webkit-text-stroke-color': '#FFF',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

