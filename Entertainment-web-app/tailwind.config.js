/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#10141E',
        red: '#FC4747',
        greyishBlue: '#5A698F',
        semiDarkBlur: '#161D2F',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
