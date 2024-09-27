/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#F87070',
      blue: '#70F3F8',
      purple: '#D881F8',
      lightPurple: '#D7E0FF',
      white: '#FFFFFF',
      grey: '#EFF1FA',
      darkBlue: '#1E213F',
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        spaceMono: ['Space Mono', 'monospace'],
        robotoSlab: ['Roboto Slab', 'serif'],
        kumbhSans: ['Kumbh Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
