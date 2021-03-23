const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: true,
    safeList: [],
    content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
  },
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
