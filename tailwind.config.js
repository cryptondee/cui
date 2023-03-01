/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js", "./app/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
