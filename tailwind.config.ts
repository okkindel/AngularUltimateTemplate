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
          primary: '#047857',
          secondary: '#34d399',
          accent: '#f472b6',

          neutral: '#9ca3af',
          success: '#22c55e',
          warning: '#facc15',
          error: '#f87171',
          info: '#22d3ee',

          'base-100': '#fcfcfc',
          'base-200': '#f9fafb',
          'base-300': '#f4f5f7',
        },
      },
    ],
  },
};
