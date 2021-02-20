const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const enablePurge = process.env.ENV === 'production';

module.exports = {
  // purge: [],
  purge: {
    enabled: false,
    // enabled: enablePurge,
    content: ['./dist/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,

        brand: '#3365A2',
        'brand-darken-45': '#1C3759',
        'brand-lighten-85': '#DDE7F4',
        'text-01': '#242A30',
        'text-02': '#666D76',
        'text-03': '#A3A7AD',
        'ui-01': '#DCE0E5',
        'ui-02': '#F4F5F7',
        'ui-03': '#FFFFFF',
        'semantic-info': '#4386D6',
        'semantic-error': '#DD0A35',
        'semantic-success': '#21ABA5',
        'semantic-alert': '#FFA900',
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        'inter-var': ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
        ...defaultTheme.fontSize,
      },
    },

    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
}
