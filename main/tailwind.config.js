import tDefaultTheme from 'tailwindcss/defaultTheme'
// import tColors from 'tailwindcss/colors'
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2FFF76',
        light: '#F1FCFF',
        dark: '#0E1D21',
        base: '#0E1D21',
        alt: '#9DDDD9',
      },
      fontFamily: {
        sans: 'Onest',
        eg: 'Sh Europa',
        am: 'GT America Trial Cm Rg',
      },
    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./nuxt.config.{js,ts}`,
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
  variants: {
    extend: {},
  },
  darkMode: 'class',
}
