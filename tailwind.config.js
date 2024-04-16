/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["'Rubik'", 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#1F304A',
          800: '#4C596E',
          600: '#798392',
          400: '#A5ACB7',
          200: '#DBDEE2',
          100: '#E9EAED',
          50: '#F4F5F6',
        },
        secondary: {
          400: '#48B7E3',
          300: '#A3DBF1',
          200: '#D1EDF8',
        },
        error: {
          400: '#FF7859',
          300: '#FFBCAD',
          200: '#FFDDD5',
        },
        success: {
          400: '#A7C242',
          300: '#D2E0A5',
          200: '#E9F0D0',
        },
        tertiary: {
          400: '#F5D94F',
          300: '#FAECA7',
          200: '#FCF5D3',
        },
      }
    },
  },
  plugins: [],
}
