/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#312e81', // indigo-900
          800: '#1e40af', // blue-900
          700: '#1e3a8a', // blue-800
        }
      },
    },
  },
  plugins: [],
}
