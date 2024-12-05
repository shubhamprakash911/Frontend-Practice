/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(244, 208, 78, 1)",
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
