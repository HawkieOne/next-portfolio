module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      pattern: "url('../public/images/bg_detail.png')",
    },
    extend: {
      colors: {
        "primary-dark": "#222831",
        "primary": "#F9F7F7",
        "secondary": "#364F6B",
        "secondary-dark": "#EEEEEE",
        "accent": "#3FC1C9",
        "accent-dark": "#00ADB5",
        "highlight": "#FC5185",
        "error": "#ff0000",
        "error-dark": "#BF616A",
        "overlay": "rgba(0,0,0, 0.2)"
      },
    },
  },
  plugins: [
    "@tailwindcss/forms", 
    require("tailwind-group-even-odd")
  ],
};
