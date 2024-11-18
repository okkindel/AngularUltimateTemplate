/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'dark',
    themeRoot: 'body',
    prefix: 'daisy-',
    styled: true,
    themes: [
      {
        default: {
          primary: '#344e41',
          secondary: '#a3b18a',
          accent: '#dad7cd',

          neutral: '#dee2ff',
          success: '#81b29a',
          warning: '#f2cc8f',
          error: '#e07a5f',
          info: '#a9def9',

          '--rounded-badge': '.125rem',
          '--rounded-box': '0.25rem',
          '--rounded-btn': '.125rem',
          '--tab-radius': '0.25rem',
          '--btn-focus-scale': '1',

          'base-100': '#fcfcfc',
        },
      },
    ],
  },
};
