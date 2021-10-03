const colors = require("tailwindcss/colors");
var flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        normak: ["Roboto, sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
