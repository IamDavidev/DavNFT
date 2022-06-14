module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: "#000",
      glow_gree: "#36f599",
      purple: "#4c67f4",
      dark: "#1c2541",
      light: "#f5f5f5",
      gray: {
        100: "#f8f9fb",
        300: "#f1f4f7",
        500: "#7d8cac",
        900: "#485470",
      },
      nav: "#15161c",
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
    },
    animation: {
      "layer": "spin 70s linear infinite"
    }
  },
  plugins: [],
}
