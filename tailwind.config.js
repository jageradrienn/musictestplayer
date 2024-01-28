/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple': '#7C74EE',
        'linearGreen': '#3DC3C0',
        'linearPurple': '#8568F5',
        'bgBlack': '#171b1e',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans"],
      }
    },
  },
  plugins: [],
}





















