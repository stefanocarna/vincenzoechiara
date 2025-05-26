/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    fontFamily: {
      serif: ['"Didact Gothic"', 'serif'],
      sans: ['"Great Vibes"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}