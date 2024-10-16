/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript and TypeScript files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
