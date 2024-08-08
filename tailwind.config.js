/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [".index.html","./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
      colors: {
        'gray-500': '#8C8C8C',
        'orange-600': '#CA5C3B',
        'pink-200': '#EEC5C7',
      },
      spacing: {
        '2.5': '10.5px',
        '1.5': '6px',
        '40': '150px',
        '8': '34px',
        '19': '76px',
        '7': '30px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin',
      },
      zIndex: {
        '3': 3,
      },
    },
    },
    plugins: [],
  }