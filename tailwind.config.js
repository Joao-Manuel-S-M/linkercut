/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'one': ['Bebas Neue',],
    },
    extend: {
    },
    colors: {
      transparent: 'transparent',
      black1: '#5A5A5A',
      black2: '#62656C',
      black3: '#3e43512e',
      black4: "#373C49",
      grey1: '#AAACB0',
      grey2: '#AFB3C3',
      white1: '#FFF',
      blue1: '#5B7DF8',
      blue2: '#374269',
      blue3: '#6C9EFF',
      red1: '#FE3C3C'
    }
  },
  plugins: [],
}

