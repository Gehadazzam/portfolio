/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pinky': {
          '50': '#fff1f4',
          '100': '#fee5e9',
          '200': '#fdceda',
          '300': '#fba1b7',
          '400': '#f87497',
          '500': '#f04375',
          '600': '#dd2161',
          '700': '#bb1552',
          '800': '#9c154a',
          '900': '#861546',
          '950': '#4b0622',
        },
        dark: '#2A3335',
        light: '#F5F5F5',
      }
    },
  },
  plugins: [],
}