/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFBE34',
        primary2: '#091242',
        secondary: 'F4F4F4',
        dimBlack: '#1C1F35',
        dimGray: '#666C89',
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        header: 'url("./src/assets/headerbg.png")',
      },
    },
  },
  plugins: [],
};
