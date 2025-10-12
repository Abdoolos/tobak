import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6efdf',
          100: '#ead7b5',
          200: '#debf8b',
          300: '#d2a761',
          400: '#c8a96b',
          500: '#b6914f',
          600: '#9a7a42',
          700: '#7e6336',
          800: '#624c29',
          900: '#46351d',
        },
        surface: '#f7f7f7',
        border: '#e6e6e6',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(17, 17, 17, 0.04)',
        'md': '0 4px 8px rgba(17, 17, 17, 0.08)',
        'focus': '0 0 0 3px rgba(200, 169, 107, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
