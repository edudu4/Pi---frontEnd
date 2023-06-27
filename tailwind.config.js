module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        'roboto-bold': ["Roboto Bold", "sans-serif"], // Adicione esta linha para a variante bold
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