/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "first": "#2B4F43",
        "second": "#719771",
        "third": "#F9B900",
        "forth": "#B78A4F",
        "text1": "black",
        "text2":"white",

        'steelBlue': '#51829B',
        "darkGreen": '#004d40',
        'paleAqua': "#ADC9C9",
        'grayishBlue':"#A9A9C7",
        'bluish-green':"#1C2A28",
        "darkNavy":"#0C0C17",
        "yellow-green":"#d9fe54"
      }
    },
  },
  plugins: [],
})