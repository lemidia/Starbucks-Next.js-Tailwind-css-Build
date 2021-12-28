module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      opensans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        "main-color": "#006241",
        "color-secondary": "#d50032",
        "color-extra": "#d4e9e2",
      },
    },
  },
  plugins: [],
};
