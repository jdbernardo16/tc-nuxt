import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';
import defaultTheme from 'tailwindcss/defaultTheme';
export default <Partial<Config>>{
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
          sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      fontDisplay: {
          sans: 'swap',
      },
      colors: {
          primary: {
            light: '#AE7DDD',
            DEFAULT: process.env.PRIMARY_COLOR || '#0050CD',
            dark: '#754fa3',
            50:'#EDEFEF',
            100:'#E5E5E5',
            200:'rgba(33, 33, 33, 0.08)',
            300:'rgba(33, 33, 33, 0.32)',
            400:'#1E746E',
            500:'#31BEB5',
            600:'#22857F',
            700:'#2E4959',
            800:'#212121',
            900:'#1C2C36',
          },
          secondary: {
              200: '#FFF8E6',
              300: '#FFF5D9',
              400: '#FFEAB0',
              500: '#FFBC00',
              600: '#BF8D00',
              700: '#594200',
          },
      },
      fontSize: {
          '3xl': '2rem',
          'h1': ['6rem', '6rem'],
          'h2': ['4.5rem', '4.5rem'],
          'h3': ['3rem', '4rem'],
          '28': ['1.75rem', '2.625rem']
      },
      aspectRatio: {
        '9/8': '1 / 1.125',
      },
      screens: {
        '2xl': '1400px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),  aspectRatio],
};
