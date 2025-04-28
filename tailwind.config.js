/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#baddff',
          300: '#7cc3ff',
          400: '#38a8ff',
          500: '#0091ff',
          600: '#0066ff',
          700: '#0057d8',
          800: '#0046af',
          900: '#003a8c',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
