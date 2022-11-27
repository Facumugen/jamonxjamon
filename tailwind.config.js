/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      darkColor: "#7c2d12",
      secondaryColor: "#764640",
      mainColor: "#fed7aa",
      pastelColor: "#fefce8",
      skinColor: "#BF875A",
      darkSkinColor: "#EBECF0",
      black: "black",
      logotipocolor: "#C67763",
      fontPrimary: "#C4A483",
      darkSecondary:"#0D111C",
      white: "white",
      navbarColor: "#764640"
     
    },
    extend: {
  }
  },
  plugins: [require('tw-elements/dist/plugin')],
}
