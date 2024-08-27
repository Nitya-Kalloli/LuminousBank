/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontSize: {
        '26': '26px',
      },
      colors: {
        'black-1': '#000000', // Adjust the color value as needed
      'black-2': '#222222',
      },
      fontFamily: {
        'ibm-plex-serif': ['IBM Plex Serif', 'serif'], // Ensure you have the font available
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

