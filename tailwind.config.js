const { colors: defaultColors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    "./src/pages/**/*.js",
    "./src/components/*.js",
    "./src/components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      ascendance: "#ea3ba1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
