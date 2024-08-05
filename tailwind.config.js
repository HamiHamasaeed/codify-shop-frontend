/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx, html, css, scss, sass, less}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1024px", // Default large breakpoint
        xl: "1440px", // Custom breakpoint for 1500px
        "custom-lg": { max: "1499px" }, // Custom max breakpoint for 1499px
      },
    },
  },
  plugins: [],
};
