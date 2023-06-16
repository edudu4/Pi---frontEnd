module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["'Open Sans'", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        robotomono: ["'Roboto Mono'", "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
