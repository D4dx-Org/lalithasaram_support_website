/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          arabic: ['Amiri', 'serif'],
          malayalam: ['Noto Sans Malayalam', 'sans-serif'],
          urdu: ['Noto Nastaliq Urdu', 'serif'],
          tamil: ['Noto Sans Tamil', 'sans-serif'],
          bengali: ['Noto Sans Bengali', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }