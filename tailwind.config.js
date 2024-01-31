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
        'popupbg': '#f7f7f7',
        'popupinput': '#EFF1FD',
        'popuptext': '#A9B0F3',
        'dark': '#121212',
        'popupsubmit': '#7C74EE',
        'blueDark': '#4E43BE',
        'gray': '#C4C4C4',
      },
      fontFamily: {
        montserrat: "Montserrat",
      }
    },
  },
  plugins: [],
}





















