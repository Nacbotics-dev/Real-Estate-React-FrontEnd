/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50':'rgba(0,1,0,0.5)',
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}
